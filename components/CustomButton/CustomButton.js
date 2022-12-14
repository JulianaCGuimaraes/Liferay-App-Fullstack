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
        width: '50%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 7,
    },

    container_TERTIARY: {
        backgroundColor: 'none',
        justifyContent: 'right',
        textDecorationLine: 'underline',
        textDecorationColor: '#fff',
    }
})

export default CustomButton