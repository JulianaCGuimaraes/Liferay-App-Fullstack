import React, {useState} from "react";
import { 
    View, 
    Image,
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomInput from '../../components/CustomInputLogin';
import CustomButton from '../../components/CustomButtonLogin/CustomButton';

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
        <ScrollView showsVerticalScrollIndicator={false}>
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
        marginTop: '40%',
        alignItems: 'center',
        backgroundColor: '#0d6efd',
        padding: 10
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