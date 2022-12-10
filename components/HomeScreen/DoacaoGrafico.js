import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BarDoacao from '../Progress/BarDoacao';

const DoacaoGrafico = () => {
  return (
    <View>
      <TouchableOpacity style = {styles.progressContainer}>
        <Text style={styles.doacaoTitle}>Minhas Doações</Text>
      </TouchableOpacity>    
      
      <BarDoacao />
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