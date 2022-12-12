import React, {useState} from "react";
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Navbar from '../../screens/navbar/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = () => { 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
        console.warn('Submit');
    }

    const onForgotPasswordPressed = () => {
        console.warn('Esqueceu a sua senha?');
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#0d6efd' }} >
            <View style={styles.containerLogo}>
                    <Image style={styles.logo} source={require('../../assets/images/liferay-logo.png')}/>
                    <Text style={styles.titulo}>Doações</Text>
                
                <CustomInput 
                    placeholder = 'Email' 
                    value= {email} 
                    setValue={setEmail} 
                    />
                <CustomInput 
                    placeholder = 'Password' 
                    value= {password} 
                    setValue={setPassword} 
                    secureTextEntry
                    />  
                <View style={{alignItems: 'flex-end', minWidth: '100%'}}>
                    <CustomButton 
                        text='Esqueceu a sua senha?' 
                        onPress= {onForgotPasswordPressed} 
                        type= 'TERTIARY'
                        fgColor= '#fff'
                    />  
                </View>
                <CustomButton 
                    ftWeight= 'bold'
                    text='Submit' 
                    onPress= {onSignInPressed} 
                    bgColor= '#fff'
                /> 

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerLogo: {
        flex: 1,
        marginTop: "40%",
        alignItems: 'center',
        backgroundColor: '#0d6efd',
        padding: 10,
        height: 667
    },
    logo: {
        width: '70%',
        height: 70,
        maxWidth: 300,
        maxheight: 200,
    },
    titulo: {
        color: '#fff',
        fontSize: '25px',
        fontWeight: 500,
        paddingHorizontal: '50px' ,
        marginBottom: '50px'
    }
});


export default Login;