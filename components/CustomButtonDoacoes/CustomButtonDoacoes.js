import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

function CustomButton ({onPress, text, type= 'PRIMARY', bgColor, fgColor, ftWeight }) {
  return (
    <Pressable
        onPress={onPress}
        fontSize= 'bold'
        style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
            ftWeight ? {fontWeight: ftWeight} : {}
        ]}
    >
    <Text 
        style={[
            styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
            ftWeight ? {fontWeight: ftWeight} : {}
        ]}>
        {text}
    </Text> 
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 10,
        height: '50%',
        width: '100%',
        padding: 29,
    },

    container_TERTIARY: {
        backgroundColor: 'none',
        justifyContent: 'right',
        textDecorationLine: 'underline',
        textDecorationColor: '#fff',
    },

    text: {
        flex:1,
        textAlign: "center",
        fontSize: 22
    }
})

export default CustomButton