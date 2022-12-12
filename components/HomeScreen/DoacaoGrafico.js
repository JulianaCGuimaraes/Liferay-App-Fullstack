import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BarDoacao from '../Progress/BarDoacao';
  

function DoacaoGrafico(){

  const [amount, setAmount] = useState();

  const get = async () => {
    const connectAPI = await (await fetch(`https://coding-liferay.herokuapp.com/api/v1/form/get/amount`))
    const data = await connectAPI.json();
    return data;
  };

  useEffect(() => {
    
    get().then((response) => {
      setAmount(response);
      console.log(response)
    });
  }, [])
  const totalDonate = "R$" + amount;

  return (
    <View>
      <TouchableOpacity style = {styles.progressContainer}>
        <Text style={styles.doacaoTitle}>Minhas Doações</Text>
      </TouchableOpacity>    
      
      <BarDoacao quantia={totalDonate} />
    </View>
  );
};


 const styles = StyleSheet.create({
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  doacaoTitle: {
    fontSize: 28,
    color: '#0B63CE',
    paddingVertical: 5
  }
});

export default DoacaoGrafico;