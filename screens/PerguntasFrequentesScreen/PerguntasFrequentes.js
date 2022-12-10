import React from 'react'
import { View, Text, StyleSheet, } from 'react-native';
import { ScrollView } from 'react-native-web';
import Perguntas from '../../components/Ajuda/Perguntas'


const PerguntasFrequentes = () => {
    return (
    <ScrollView style={styles.homeScreen}>
        <View>
            <View>
                <Text style={styles.titleHome}>PERGUNTAS USUAIS</Text>
            </View>

            <Perguntas />
        </View>
  </ScrollView>
  );
};


 const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  titleHome: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B63CE'
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 185,
    height: 185,
    borderRadius: 95,
    marginBottom: 25
  }, 
  nameUser: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0B63CE'
  },
  officeUser: {
    fontSize: 20,
    color: '#0B63CE'
  },
  evp: {
    fontSize: 26,
    color: '#0B63CE',
    paddingTop: 20
  },
});

export default PerguntasFrequentes;