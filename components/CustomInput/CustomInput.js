import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function CustomInput({  value, setValue, placeholder, secureTextEntry }) {
    return (
        <View style = {styles.container}>
            <TextInput 
            value= {value}
            onChangeText= {setValue}
            placeholder= {placeholder}
            style= {styles.input}
            secureTextEntry= {secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '90%',

        borderColor: '#fff',
        borderRadius: 7,
        borderWidth: 1,

        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 10,
    },
    input: {},
});


export default CustomInput;