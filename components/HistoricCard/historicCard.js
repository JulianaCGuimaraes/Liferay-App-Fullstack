import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HistoricCard(props) {

    const editButton = () => {
        console.warn('Wow, Much Edit');
    }

    const deleteButton = () => {
        console.warn('Wow, Much Delete');
    }
    
  return (
    <View style={styles.containerbox}>
        <Text style={styles.CardTitle}>{props.nameInstitution}</Text>
     <Text style={styles.Infos}>Valor doado: R${props.value}</Text>
    <View style={styles.buttonLine}>
        <Pressable style={styles.Edit}>
                <Ionicons name="ios-create-outline" color="white" size={30} onPress={editButton}/>
        </Pressable>
        <Pressable style={styles.Delete}>
                <Ionicons name="ios-trash-outline" color="white" size={30} onPress={deleteButton}/>
        </Pressable>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
    homeScreen: {
      backgroundColor: 'white',
      paddingTop: 20,
      paddingHorizontal: 30,
      width: 375
    },
    titleHome: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#0B63CE',
      marginBottom: 50,
    },
    buttonLine: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    containerbox: {    
      borderColor: '#0B63CE',
      borderRadius: 7,
      borderWidth: 1,
  
      marginTop: 10,
      marginBottom: 10,
    },
    Delete: {
      backgroundColor: '#D0312D',
      color: '#fff',
  
      borderRadius: 7,  
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 10,
    },
    Edit: {
      fontSize: 20,
        
      backgroundColor: '#5DBB63',
      color: '#fff',
  
      borderRadius: 7,
  
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 10,
    },
    Infos: {
      fontSize: 20,
      color: '#0B63CE',

      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 10,
    },
    CardTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0B63CE',

        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginTop: 10,
    },
    button: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginTop: 10,
    },
  });

export default HistoricCard;