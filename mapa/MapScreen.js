import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native-webview';

const iframe = 'https://www.google.com/maps/d/u/3/embed?mid=1dKPQ8Rw0iNrfELbQ7kYHCn2HHV9hM-w&ehbc=2E312F'

export default function App() {
  return (
    <View style={styles.container}>
      <View style= {{width:'100%', height: '100%'}}>
        <WebView
          source= {{uri: iframe}}
          onLoad= {console.log('Loaded!')}
        />
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});