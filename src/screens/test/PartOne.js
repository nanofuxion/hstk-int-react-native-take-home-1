import { SafeAreaView, Text, Pressable, FlatList, StyleSheet, Dimensions, View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import localPlaceholderData from '../../localPlaceholderData'


const Item = ({ title, id, }) => (
    <Pressable
        onPress={() => {

        }}
        style={styles.button}
    >
        <View style={{
            flexDirection: 'row',
            alignSelf: 'stretch',
        }}>
            {/* <Image
                source={images.code}
                style={{
                    width: 38,
                    height: 38,
                }}
                tintColor='black'
            /> */}
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
);

export default function () {

    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id}/>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={localPlaceholderData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    title: {
        width: (Dimensions.get('window').width / 2),
        fontSize: 20,
    },
    button: {
        padding: 12,
        borderRadius: 10,
        marginVertical: 2,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        backgroundColor: 'white',
        opacity: 0.95
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 24,
        marginLeft: 8 / 283 * (Dimensions.get('window').width - 46 * 2),
        color: '#151515',
    }
})