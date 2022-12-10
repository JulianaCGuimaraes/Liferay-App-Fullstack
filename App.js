import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Doacao from './screens/DoacoeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Doacao />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  }
});