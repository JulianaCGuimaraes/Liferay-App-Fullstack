import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'white'
  },
});
