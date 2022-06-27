import React from 'react';
import SearchBar from './common/search';
import Item from './common/post';
import styles from './common/style'
import {
    SafeAreaView,
    Text,
    FlatList,
    View
} from "react-native";
import hstkFetch from '../../hstkFetch'


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
                extraData
                ListHeaderComponent={<SearchBar setQuery={setQuery} />}
                ListEmptyComponent={<ActivityIndicator loaded={data.length > 0} />}
            />
        </SafeAreaView>
    )
}