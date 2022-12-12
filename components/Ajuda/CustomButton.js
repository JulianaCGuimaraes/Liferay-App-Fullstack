import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

function CustomButton ({
        onPress, 
        text, 
        type= 'PRIMARY', 
        bgColor, 
        fgColor, 
        ftWeight
}) {
  return (
    <TouchableOpacity
        onPress={onPress}
        fontSize= 'bold'
        style={[
            styles.container,
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor} : {},
            ftWeight ? {fontWeight: ftWeight} : {},
        ]}
    >
    <Text 
        style={[
            styles.text, 
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {},
            ftWeight ? {fontWeight: ftWeight} : {},
        ]}>
        {text}
    </Text> 
    </TouchableOpacity>
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
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        textAlign: 'center',
    }
})

export default CustomButton