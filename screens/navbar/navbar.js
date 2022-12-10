import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Doacao from '../../screens/doacoes/doacao';
import Home from '../../screens/home/home';
//import Logo from './/liferay-logo.png';


function PerfilUsuario() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
  
  function Formularios() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Doacao />
      </View>
    );
  }

  function Mapa() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liferay App</Text>
      </View>
    );
  }
  
  function Ajuda() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liferay App</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();

 /*  const IconeLiferay = () => {
    <Image source={require('../images/liferay-logo.png')} />;  
  } */

  function LogoLiferay() {
    return (
      <Image
        style={{ width: 200, height: 50 }}
        source={require('../../assets/images/liferay-logo.png')}
      />
    );
  }

  const tabOptions = {
    headerTitle: () => <LogoLiferay/>,  
    headerStyle: { backgroundColor: '#0B63CE'},
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
    }
  };
  
  export default function navbar() {
    return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Usuário') {
                        iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                        color = "white";
                        size = 34;
                    } else if (route.name === 'Formulários') {
                        iconName = focused ? 'document-text' : 'ios-document-text-outline';
                        color = "white";
                        size = 34; 
                    } else if (route.name === 'Mapa') {
                        iconName = focused ? 'ios-map' : 'ios-map-outline';
                        color = "white";
                        size = 34;
                    } else if (route.name === 'Ajuda') {
                        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                        color = "white";
                        size = 34; 
                    }
                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel:false,
            tabBarStyle: { backgroundColor: "#0B63CE", height: 63},
          })}
        
        >
            <Tab.Group>
                <Tab.Screen name="Usuário" component={PerfilUsuario} options={tabOptions} />
                <Tab.Screen name="Formulários" component={Formularios} options={tabOptions} />
                <Tab.Screen name="Mapa" component={Mapa} options={tabOptions} />
                <Tab.Screen name="Ajuda" component={Ajuda} options={tabOptions} />
            </Tab.Group>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

// headerLeft: () => (<Image source={require('./assets/images/liferay-logo.png')} />),