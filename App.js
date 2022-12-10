import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Atividade from './screens/AtividadeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Atividade />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  }
});