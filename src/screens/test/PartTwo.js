import React from 'react';
import SearchBar from './common/search';
import styles from './common/style';
import {
    SafeAreaView,
    Text,
    FlatList,
    Pressable,
    View
} from "react-native";
import hstkFetch from '../../hstkFetch'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const Item = ({ title, id, }) => {

    return (
        <Pressable
            onPress={() => {}}
            style={styles.button}
        >
            <View style={{
                flexDirection: 'row',
                alignSelf: 'stretch',
            }}>
                <FontAwesome name="forumbee" size={38} color="black" />
                <View style={{
                    flexDirection: 'col',
                    alignSelf: 'stretch',
                    alignItems: 'start',
                    marginLeft: 8

                }}>
                    <Text style={styles.title}>
                        {title}
                    </Text>
                    <Text style={styles.buttonText}>
                        {id}
                    </Text>
                </View>
            </View>
            <AntDesign name='right' color='#151515' size={24} />
        </Pressable>
    )
};

const ActivityIndicator = ({ loaded }) => {

    return (
        <View style={styles.loadingView}>
            <View>
                <Text style={styles.loadingText}>
                    {(loaded) ? "There are no results matching your search query." : "Loading.."}
                </Text>
            </View>
        </View>
    )
}

export default function () {

    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState("");

    const fetchData = async () => {
        const resp = await hstkFetch("https://jsonplaceholder.typicode.com/posts");
        const data = await resp.json();
        setData(data);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} />
    );

    const searchList = React.useCallback(() => {

        const result = (query !== "") ? data.filter(post => {
            return post.title.includes(query.toLowerCase())
        }) : data;


        return result

    }, [data, query]);


    return (
        <SafeAreaView>
            <FlatList
                data={searchList()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={<SearchBar setQuery={setQuery} />}
                ListEmptyComponent={<ActivityIndicator loaded={data.length > 0} />}
            />
        </SafeAreaView>
    )
}