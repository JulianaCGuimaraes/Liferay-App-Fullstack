import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Doacao = () => { 
    const onSignInPressed = () => {
        console.warn('FORMULÁRIO DE DOAÇÕES');
    }

    const onSignInPressed2 = () => {
        console.warn('HISTÓRICO DE DOAÇÕES');
    }

    return(
        <ScrollView style={styles.buttonScreen} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButton}>DOAÇÕES</Text>
                    <View style={styles.container}>     
                            <CustomButton
                                ftWeight= 'bold'
                                text='FORMULÁRIO DE DOAÇÕES' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButton 
                                ftWeight= 'bold'
                                text='HISTÓRICO DE DOAÇÕES' 
                                onPress= {onSignInPressed2} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                    </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonScreen: {
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
        marginTop: '20%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    titleButton: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0B63CE'
    
    }
});

export default Doacao;
