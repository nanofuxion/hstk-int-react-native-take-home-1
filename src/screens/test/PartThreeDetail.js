import React from 'react';
import styles from './common/style';
import Comments from './detail/comments'
import hstkFetch from '../../hstkFetch'
import { SafeAreaView, Text, Pressable, FlatList, StyleSheet, Dimensions, View, TextInput } from "react-native";

const ActivityIndicator = () => {

    return (
        <View style={styles.loadingView}>
            <View>
                <Text style={styles.loadingText}>
                    Loading
                </Text>
            </View>
        </View>
    )
}

export default function ({ route }) {

    const [data, setData] = React.useState({});
    const id = React.useRef(route.params.id).current

    const fetchData = async () => {
        const resp = await hstkFetch("https://jsonplaceholder.typicode.com/posts/" + id);
        const data = await resp.json();
        setData(data);
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    console.log(id)
    return (

        <SafeAreaView>
            {data !== {} ? <View style={{ margin: 12, height: '100%' }}>
                <Text style={[styles.title, {width: '100%', fontWeight: 'bold'}]}>{data.title}</Text>
                <Text>{data.body}</Text>
                <React.Suspense fallback={<ActivityIndicator />}>
                <Comments id={id} />
                </React.Suspense>
            </View>: <ActivityIndicator />}
        </SafeAreaView>
    );
}