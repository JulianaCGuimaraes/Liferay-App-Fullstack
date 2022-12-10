import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';

const Perguntas = () => {
    return (
      <View style={styles.containerText}>
            <View style={styles.containerSpace}>
                <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
            <View style={styles.containerSpace}>
                <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
            <View style={styles.containerSpace}>
                <Text style={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
       </View>
    )
}

const styles = StyleSheet.create({
  containerText: {
    textAlign: 'center',
    color: '#0B63CE',
    marginHorizontal: 15,
  },
    title: {
      fontSize: 24,
      color: '#0B63CE',
      paddingTop: 20
    },
    text: {
      fontSize: 14,
      color: '#0B63CE',
    },
    containerSpace: {
      marginVertical: 10
    }
  });

export default Perguntas;