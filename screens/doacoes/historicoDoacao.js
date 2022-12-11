import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';
import HistoricCard from '../../components/HistoricCard/historicCard';


const HistoricoDoacao = () => {

  
  const [formList, setFormList] = useState();

  const get = async () => {
    const connectAPI = await (await fetch('https://coding-liferay.herokuapp.com/api/v1/form/get/all'))
    const data = await connectAPI.json();
    return data;
  };

  useEffect(() => {
    
    get().then((response) => {
      setFormList(response);
      console.log(response)
    });
  }, [])

  return (
  <ScrollView style={styles.homeScreen}>
    <View>
      <Text style={styles.titleHome}>REGISTRO DE DOAÇÕES</Text>
      <View >
        {formList?.map((info) => 
        <HistoricCard
        name={info.institution.name}
        value={info.value}
        id={info.id}       
         />)}
      </View>
      
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
  containerbox: {    
    borderColor: '#0B63CE',
    borderRadius: 7,
    borderWidth: 1,

    marginTop: 10,
    marginBottom: 10,
  },
  Delete: {
    backgroundColor: '#D0312D',
    color: '#fff',

    borderRadius: 7,

    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 10,
  },
  Edit: {
    backgroundColor: '#5DBB63',
    color: '#fff',

    borderRadius: 7,

    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 10,
  },
  Infos: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginTop: 10,
  },
});

export default HistoricoDoacao;