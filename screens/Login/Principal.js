import React, {useState} from "react";
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Principal = () => { 


    const onSignInPressed = () => {
        console.warn('Submit');
    }

    const onSignInPressed2 = () => {
        console.warn('Submit');
    }


    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.containerLogo}>
          <Image style = {styles.avatar} source = {require('../../assets/logo2.jpg')} />
                <View style={{alignItems: 'flex-end', minWidth: '100%'}}> 
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerLogo: {
        flex: 1,
        marginTop: '30%',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 50
    },
    logo: {
        width: '70%',
        height: 70,
        maxWidth: 300,
        maxheight: 200,
    },
    titulo: {
        color: '#0d6efd',
        fontSize: '25px',
        fontWeight: 80,
        paddingHorizontal: 50 ,
        marginBottom: 50
    }
});

export default Principal;