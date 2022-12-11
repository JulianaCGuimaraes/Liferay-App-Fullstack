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


    const onTap = () => {
        console.warn('Entrar');
    }

    const onSignInPressed2 = () => {
        console.warn('Submit');
    }


    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#ffff' }}>
            <View style={styles.containerLogo}>
                <Image style = {styles.logo} source = {require('../../assets/logo2.jpg')} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerLogo: {
        flex: 1,
        marginTop: '40%',
        alignItems: 'center',
        backgroundColor: '#ffff',
        padding: 50,
    },
    logo: {
        width: '90%',
        height: 170,
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