import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';


const EdicaoDoacao = () => {

  const sendButton = () => {
    console.warn('Formulário Enviado');
}

  return (
  <ScrollView style={styles.homeScreen}>
    <View>
      <Text style={styles.titleHome}>EDIÇÃO DO FORMULÁRIO </Text>
            <TextInput style={styles.container} placeholder="Nome da Instituição" />
            <TextInput style={styles.container} placeholder="Email da Instituição" />
            <TextInput style={styles.container} placeholder="Cidade da Instituição" />
            <TextInput style={styles.container} placeholder="Estado da Instituição" />
            <TextInput style={styles.container} placeholder=" País da Instituição" />
            <TextInput style={styles.container} placeholder="Telefone da Instituição" />
            <TextInput style={styles.container} placeholder="Valor da Doação" />

            <Pressable>
              <Text style={styles.sendButton} onPress={sendButton}>Enviar</Text>
            </Pressable>

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
    color: '#0B63CE',
    marginBottom: 50,
  },
  container: {
    backgroundColor: '#fff',
    width: '90%',
    color: '#0B63CE',

    borderColor: '#0B63CE',
    borderRadius: 7,
    borderWidth: 1,

    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#0B63CE',
    width: '90%',
    color: '#fff',

    borderColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,

    paddingVertical: 10,
    paddingHorizontal: 115,
    marginVertical: 10,
    marginTop: 10,
  },
});

export default EdicaoDoacao;