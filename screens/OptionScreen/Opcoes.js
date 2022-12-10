import React from "react";
import { 
    View, 
    StyleSheet,
    ScrollView
} from 'react-native';
import CustomButton from '../../components/CustomButtonOpcoes/CustomButton';

const Option = () => { 
    const onSignInPressed = () => {
        console.warn('ATIVIDADES');
    }

    const onSignInPressed2 = () => {
        console.warn('DOAÇÕES');
    }

    return(
        <ScrollView style={styles.buttonScreen} showsVerticalScrollIndicator={false}>
            <View>
                    <View style={styles.container}>
                        <CustomButton 
                            ftWeight= 'bold'
                            text='ATIVIDADES' 
                            onPress= {onSignInPressed} 
                            bgColor= '#0B63CE'
                            fgColor= '#fff'
                        /> 
                         <CustomButton 
                            ftWeight= 'bold'
                            text='DOAÇÕES' 
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
        paddingTop: '30%',
        paddingHorizontal: 20
    },
    container: {
        flex: 1,
        marginTop: '20%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        alignItems: 'center',
    }
});

export default Option;