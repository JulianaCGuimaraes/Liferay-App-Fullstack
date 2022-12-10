import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type= 'PRIMARY', bgColor, fgColor, ftWeight }) => {
  return (
    <TouchableOpacity
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
    </TouchableOpacity>
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
