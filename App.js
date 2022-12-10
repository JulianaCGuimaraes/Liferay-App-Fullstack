import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AjudaScreen from './screens/AjudaScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <AjudaScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#fff'
  }
});