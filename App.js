import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Navbar from './screens/navbar/navbar';


export default function App() {
  return (
        <Navbar />
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#0d6efd'
  }
});