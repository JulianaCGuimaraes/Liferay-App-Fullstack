import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustomButton';

const Botoes = () => { 
    const onSignInPressed = () => {
        console.warn('Formulário de Doações');
    }

    const onSignInPressed2 = () => {
        console.warn('Formulário de Atividades');
    }

    return(
        <ScrollView style={styles.buttonScreen} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButton}>FORMULÁRIO</Text>
                    <View style={styles.container}>     
                            <CustomButton
                                ftWeight= 'bold'
                                text='Formulário de Doações' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButton 
                                ftWeight= 'bold'
                                text='Formulário de Atividades' 
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

export default Botoes;