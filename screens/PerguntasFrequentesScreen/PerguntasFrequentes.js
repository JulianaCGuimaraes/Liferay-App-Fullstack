import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-web';
import Perguntas from '../../components/Ajuda/Perguntas'


const PerguntasFrequentes = () => {
    return (
    <ScrollView style={styles.perguntasFrequentesScreen}>
        <View>
            <View>
                <Text style={styles.titlePerguntas}>PERGUNTAS USUAIS</Text>
            </View>

            <Perguntas />
        </View>
  </ScrollView>
  );
};


 const styles = StyleSheet.create({
  perguntasFrequentesScreen: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  titlePerguntas: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B63CE'
  },
});

export default PerguntasFrequentes;
