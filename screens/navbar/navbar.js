import React, {useState} from 'react';
import { View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButtonDoacoes from '../../components/CustomButtonDoacoes/CustomButtonDoacoes';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Doacao from '../../screens/doacoes/doacao';
import Home from '../../screens/home/home';
//import formDoacao from '../../screens/formularioDoacao/formularioDoacao';
import Login from '../../screens/Login/Login';
import Intro from '../../screens/Login/Principal';


//Tela de Login (ainda estou testando modulação para diminuir o código)

function TelaLogin({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
      console.warn('Submit');
      navigation.navigate('Navbar');
  }

  const onForgotPasswordPressed = () => {
      console.warn('Esqueceu a sua senha?');
  }

  return(
      <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#0d6efd' }} >
          <View style={styles.containerLogoLogin}>
                  <Image style={styles.logoLogin} source={require('../../assets/images/liferay-logo.png')}/>
                  <Text style={styles.tituloLogin}>Doações</Text>
              
              <CustomInput 
                  placeholder = 'Email' 
                  value= {email} 
                  setValue={setEmail} 
                  />
              <CustomInput 
                  placeholder = 'Password' 
                  value= {password} 
                  setValue={setPassword} 
                  secureTextEntry
                  />  
              <View style={{alignItems: 'flex-end', minWidth: '100%'}}>
                  <CustomButton 
                      text='Esqueceu a sua senha?' 
                      onPress= {onForgotPasswordPressed} 
                      type= 'TERTIARY'
                      fgColor= '#fff'
                  />  
              </View>
              <CustomButton 
                  ftWeight= 'bold'
                  text='Submit' 
                  onPress= {onSignInPressed} 
                  bgColor= '#fff'
              /> 

          </View>
      </ScrollView>
  );


  /* return (
    <View style={{flex:1, backgroundColor: '#0d6efd' }}>
      <Login />
    </View>
  ); */
}

function TelaIntro({navigation}) {
        const Tap = () => {
          console.warn('Entrar');
          navigation.navigate('Login');
      }

      return(
          <ScrollView showsVerticalScrollIndicator={false} style={{  backgroundColor: '#ffff' }}>
              <View style={styles.containerLogo}>
                  <Image style = {styles.logo} source = {require('../../assets/logo2.jpg')} onClick={Tap} />
              </View>
          </ScrollView>
      );
 /*  return (
    <View style={{flex:1, backgroundColor: '#ffff' }} >
      <Intro />
    </View>
  ); */
}

function PerfilUsuario() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Home />
      </View>
    );
  }
  
function Formularios({navigation}) {

     const onSignInPressed = () => {
        console.warn('FORMULÁRIO DE DOAÇÕES')
        navigation.navigate('FormDoacoes')
    }

    const onSignInPressed2 = () => {
        console.warn('HISTÓRICO DE DOAÇÕES');
    }

    return(
        <ScrollView style={styles.buttonScreen} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButton}>DOAÇÕES</Text>
                    <View style={styles.container}>     
                            <CustomButtonDoacoes
                                ftWeight= 'bold'
                                text='FORMULÁRIO DE DOAÇÕES' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButtonDoacoes 
                                ftWeight= 'bold'
                                text='HISTÓRICO DE DOAÇÕES' 
                                onPress= {onSignInPressed2} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                    </View>
            </View>
        </ScrollView>
    );
   /*  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Doacao />
      </View>
    ); */
  }

  function Mapa() {

    const iframe = 'https://www.google.com/maps/d/u/3/embed?mid=1dKPQ8Rw0iNrfELbQ7kYHCn2HHV9hM-w&ehbc=2E312F'

    return (
      <View style={styles.containerMapa}>
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
  
  function Ajuda() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liferay App</Text>
      </View>    
  );
  }

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

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

  const tabOptionsHide= {
    headerTitle: () => <LogoLiferay/>,  
    headerStyle: { backgroundColor: '#0B63CE'},
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    headerShown: false
  };

  //Navbar de formularios de doação

  function Forms(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="Formularios" component={Formularios} options={tabOptionsHide} />
          <Stack.Screen name="FormDoacoes" component={formDoacao} />
      </Stack.Navigator>
    );  
  }

//Navbar central (perfil, formulários, mapa e etc.)

  function Navbar() {
    return (
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
                <Tab.Screen name="Formulários" component={Forms} options={tabOptions} />
                <Tab.Screen name="Mapa" component={Mapa} options={tabOptions} />
                <Tab.Screen name="Ajuda" component={Ajuda} options={tabOptions} />
            </Tab.Group>
        </Tab.Navigator>
    );
  }

//Navbar mestra(intro, login e acesso à navbar central)

  export default function intro(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Intro" component={TelaIntro} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
          <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

//CSS

const styles = StyleSheet.create({
    buttonScreen: {
        backgroundColor: 'white',
        paddingTop: 30,
        paddingHorizontal: 50
    },
    container: {
        flex: 1,
        marginTop: '40%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        alignItems: 'center',
    },
    titleButton: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0B63CE'
    
    },
    containerLogo: {
      flex: 1,
      marginTop: '40%',
      alignItems: 'center',
      backgroundColor: '#ffff',
      padding: 50,
  },
    logo: {
        width: '90%',
        height: 170,
        maxWidth: 300,
        maxheight: 200,
  },
    titulo: {
        color: '#0d6efd',
        fontSize: '25px',
        fontWeight: 80,
        paddingHorizontal: 50 ,
        marginBottom: 50
  },
    containerLogoLogin: {
      flex: 1,
      marginTop: "40%",
      alignItems: 'center',
      backgroundColor: '#0d6efd',
      padding: 10,
      height: 667
},
    logoLogin: {
        width: '70%',
        height: 70,
        maxWidth: 300,
        maxheight: 200,
},
    tituloLogin: {
        color: '#fff',
        fontSize: '25px',
        fontWeight: 500,
        paddingHorizontal: '50px' ,
        marginBottom: '50px'
},
    containerMapa: {
      marginTop: 28,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
},
});
// headerLeft: () => (<Image source={require('./assets/images/liferay-logo.png')} />),