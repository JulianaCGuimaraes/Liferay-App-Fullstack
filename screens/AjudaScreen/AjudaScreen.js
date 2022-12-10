import React from "react";
import { 
    View, 
    Text, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomButton from "../../components/Ajuda/CustomButton";

const AjudaScreen = () => { 
    const onSignInPressed = () => {
        console.warn('PERGUNTAS FREQUENTES');
    }

    const onSignInPressed2 = () => {
        console.warn('TERMOS E CONDIÇÕES DE USO');
    }

    return(
        <ScrollView style={styles.buttonScreen} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButton}>AJUDA</Text>
                    <View style={styles.container}>     
                            <CustomButton
                                ftWeight= 'bold'
                                text='PERGUNTAS FREQUENTES' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButton 
                                ftWeight= 'bold'
                                text='TERMOS E CONDIÇÕES DE USO' 
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
        marginTop: '15%',
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

export default AjudaScreen;