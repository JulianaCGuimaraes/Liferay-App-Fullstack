import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-web';
import Termos from '../../components/Ajuda/Termos';


const TermosECondicoes = () => {
    return (
    <ScrollView style={styles.termosScreen}>
        <View>
            <View>
                <Text style={styles.titleTermos}>TERMOS E CONDIÇÕES</Text>
            </View>

            <Termos />
        </View>
  </ScrollView>
  );
};


 const styles = StyleSheet.create({
  termosScreen: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  titleTermos: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B63CE'
  },
});

export default TermosECondicoes;