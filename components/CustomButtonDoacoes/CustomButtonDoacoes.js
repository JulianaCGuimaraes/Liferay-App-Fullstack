import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type= 'PRIMARY', bgColor, fgColor, ftWeight }) => {
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
        paddingTop: 30,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
        width: 240,
        height: 80
    },

    container_TERTIARY: {
        backgroundColor: 'none',
        justifyContent: 'right',
        textDecorationLine: 'underline',
        textDecorationColor: '#fff',
    }
})

export default CustomButton