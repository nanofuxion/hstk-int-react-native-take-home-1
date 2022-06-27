import React from 'react';
import styles from './style'
import { Text, Pressable, View } from "react-native";
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default ({ title, id, }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => {
                navigation.navigate('part-three-detail', { id });
            }}
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