import React from 'react';
import styles from './style'
import { View, TextInput } from "react-native";


export default ({ setQuery }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={setQuery}
                placeholder="Search"
                placeholderTextColor={"grey"}
            />
        </View>
    )
}