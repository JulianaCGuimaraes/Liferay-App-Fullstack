import React from 'react'
import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';
import styles from "../../screens/stylesApp";

const Perguntas = () => {
    return (
      <View style={styles.containerTextPerguntas}>
            <View style={styles.containerSpacePerguntas}>
                <Text style={styles.titlePerguntas}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.textPerguntas}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
            <View style={styles.containerSpacePerguntas}>
                <Text style={styles.titlePerguntas}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.textPerguntas}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
            <View style={styles.containerSpacePerguntas}>
                <Text style={styles.titlePerguntas}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</Text>
                <Text style={styles.textPerguntas}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab, voluptatibus velit explicabo repellat eveniet voluptas est necessitatibus adipisci ducimus similique facilis asperiores iure id mollitia, corrupti aliquid odit, consequatur quos.</Text>
            </View>
       </View>
    )
}

export default Perguntas;