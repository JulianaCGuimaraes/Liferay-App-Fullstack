import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import PerguntasFrequentes from './screens/PerguntasFrequentesScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <PerguntasFrequentes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white'
  },
});