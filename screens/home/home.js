import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native';
import DoacaoGrafico from '../../components/HomeScreen/DoacaoGrafico';
import AtividadeGrafico from '../../components/HomeScreen/AtividadeGrafico';

function HomeScreen(){
  return (
  <ScrollView style={styles.homeScreen}>
    <View>
      <Text style={styles.titleHome}> PERFIL</Text>
        <TouchableOpacity style = {styles.avatarContainer}>
          <Image style = {styles.avatar} source = {require('../../assets/84687519.jpeg')} />
            <Text style={styles.nameUser}>Amanda Gouveia</Text>
            <Text style={styles.officeUser}>Auxiliar Administrativo</Text>
            <Text style={styles.evp}>EVP 2022</Text>
        </TouchableOpacity>

        <DoacaoGrafico />
        <AtividadeGrafico />
    </View>
  </ScrollView>
  );
};


 const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingHorizontal: 30,
    width: 375
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

export default HomeScreen;