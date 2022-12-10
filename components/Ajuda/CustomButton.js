import { Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = ({
        onPress, 
        text, 
        type= 'PRIMARY', 
        bgColor, 
        fgColor, 
        ftWeight
}) => {
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
        height: '50%',
        width: '100%',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginVertical: 30,
        
    },
    text:{
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 28,
        textAlign: 'center',
    }
})

export default CustomButton
