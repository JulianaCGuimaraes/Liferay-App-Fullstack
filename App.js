import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Login from './screens/Login';
import Navbar from './screens/navbar/navbar';

export default function App() {
  return (
      <Navbar />
  );
};

/* export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Login />
    </SafeAreaView>
  );
}; */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#0d6efd'
  }
});