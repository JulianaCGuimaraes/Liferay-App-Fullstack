import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BarAtv from '../Progress/BarAtv';

function AtividadeGrafico() {
  return (
    <View>
      <TouchableOpacity style = {styles.progressContainer}>
        <Text style={styles.atvTitle}>Minhas Atividades</Text>
      </TouchableOpacity> 
      
      <BarAtv />
    </View>
  );
};


 const styles = StyleSheet.create({
  progressContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60
    
  },
  atvTitle: {
    fontSize: 28,
    color: '#0B63CE',
    paddingVertical: 5
  }
});

export default AtividadeGrafico;