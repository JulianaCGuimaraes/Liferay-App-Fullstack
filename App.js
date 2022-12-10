import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TermosECondicoes from './screens/TermosScreen'

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <TermosECondicoes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white'
  },
});
