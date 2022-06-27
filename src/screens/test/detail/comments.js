import React from 'react';
import styles from '../common/style'
import { Text, Pressable, FlatList, View, Alert } from "react-native";
import hstkFetch from '../../../hstkFetch'
import { useRecoilState } from 'recoil';
import { instructAtom, commentsAtom } from '../../../atoms/index'
import _ from 'lodash';


const ActivityIndicator = ({ loaded }) => {

    return (
        <View style={styles.loadingView}>
            <View>
                <Text style={styles.loadingText}>
                    {(loaded) ? "No comments" : "Loading.."}
                </Text>
            </View>
        </View>
    )
}

export default function ({ id }) {


    const [data, setData] = React.useState([]);
    const [shown, setShown] = React.useState([]);

    const [inst, setInst] = useRecoilState(instructAtom);
    const [hidden, setHidden] = useRecoilState(commentsAtom);

    const fetchData = async () => {
        const resp = await hstkFetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
        const data = await resp.json();
        setData(data);
        setShown(data);
    };

    React.useEffect(() => {
        fetchData();
    }, []);


    React.useEffect(() => {
        // console.log(inst)
        if(inst === false) {
            setInst(true)
            Alert.alert(
                "Hide Comment",
                "Press OK to hide this Comment",
                [
                    { text: "OK" }
                ]
            );
        }
    }, [inst]);

    const HideComment = React.useCallback((commentId) => {
        setHidden([...hidden, commentId.id]);
    }, [shown, hidden]);


    const renderItem = React.useCallback(({ item }) => {

        // console.log(hidden[item.postId]);
        // console.log(hidden[item.postId].indexOf(item.id) > 0);
        // console.log(item.id);
            return <Item name={item.name} email={item.email} body={item.body} commentID={{id: item.id, postId: item.postId}} />
    }, [hidden]);;

    const Item = ({ name, email, body, commentID }) => {
        return (
            <Pressable
                onLongPress={() => {
                    Alert.alert(
                        "Hide Comment",
                        "Press OK to hide this Comment",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => HideComment(commentID) }
                        ]
                    );
                }}
                style={[styles.button, {
                    marginHorizontal: 0
                }]}
            >
                <View style={{
                    flexDirection: 'row',
                    alignSelf: 'stretch',
                    marginRight: 8
                }}>
                    {/* <FontAwesome name="forumbee" size={38} color="black" /> */}
                    <View style={{
                        flexDirection: 'col',
                        alignSelf: 'stretch',
                        alignItems: 'start',
                        marginLeft: 8
                    }}>
                        <Text style={[styles.title, { marginBottom: 12, fontWeight: 'bold' }]}>
                            {name}
                        </Text>
                        <Text style={[styles.buttonText, { marginBottom: 8 }]}>
                            by: {email}
                        </Text>
                        <Text style={[styles.buttonText, { marginBottom: 8 }]}>
                            {body}
                        </Text>
                    </View>
                </View>
            </Pressable>
        )
    };


    return (
        <View style={styles.comments}>
            <FlatList
                data={shown.filter((item, i) => {
                    console.log(hidden)
                    console.log(item.id)
                    return (hidden.indexOf(item.id) < 0)
                    
                    })}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={<ActivityIndicator loaded={data.length > 0} />}
            />
        </View>
    )
}