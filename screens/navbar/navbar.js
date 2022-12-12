import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButtonDoacoes from '../../components/CustomButtonDoacoes/CustomButtonDoacoes';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Doacao from '../../screens/doacoes/doacao';
import Home from '../../screens/home/home';
import FormDoacao from '../fomularioDoacao/formularioDoacao';
import Intro from '../../screens/Login/Principal';
import {WebView} from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';
import HistoricCard from '../../components/HistoricCard/historicCard';
import CustomButtonAjuda from "../../components/Ajuda/CustomButton";
import styles from "../../screens/stylesApp";
import Perguntas from '../../components/Ajuda/Perguntas';
import Termos from '../../components/Ajuda/Termos';

const data = [
  {
      nameInstitution: "Imip",
      cityInstitution: "hellcife",
      value: 10,
      id: 1
  },

  {
      nameInstitution: "Hospital das Clinicas",
      cityInstitution: "raincife",
      value: 20,
      id: 2
  },
];

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

const iframe = 'https://www.google.com/maps/d/u/3/embed?mid=1dKPQ8Rw0iNrfELbQ7kYHCn2HHV9hM-w&ehbc=2E312F'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


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
                  <Image style = {styles.logo} source = {require('../../assets/logo2.jpg')} onPress={Tap} />
              </View>
          </ScrollView>
      );
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
        navigation.navigate('FormHistDoacoes')
    }

    return(
        <ScrollView style={styles.buttonScreenDoacao} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButtonDoacao}>DOAÇÕES</Text>
                    <View style={styles.containerDoacao}>     
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

function TelaformDoacao(){
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [estado, setEstado] = useState();
  const [city, setCity] = useState();
  const [donation, setDonation] = useState();


  function sendButton() {
    const postInst = async () => {
        const connectAPI = await fetch('https://coding-liferay.herokuapp.com/api/v1/form/post/register', { method: 'POST',  body: JSON.stringify({
          cityInstitution: city,
          countryInstitution: country,
          emailInstitution: email,
          nameInstitution: name,
          phoneNumberInstitution: phone,
          stateInstitution: estado,
          value: donation
        }),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }})

        return connectAPI;
    };
    postInst().then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.warn("Formulário Criado!")
            }
            else {
              console.warn("Formulário Não Criado, Erro com algum campo!")
            }
    })

  };

  return (
  <ScrollView style={styles.homeScreenFormDoacao}>
    <View>
      <Text style={styles.titleHomeFormDoacao}>FORMULÁRIO DE DOAÇÃO</Text>
            <TextInput style={styles.containerFormDoacao} placeholder="Nome da Instituição" value={name} onChange={e => setName(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Email da Instituição" value={email} onChange={e => setEmail(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Cidade da Instituição" value={city} onChange={e => setCity(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Estado da Instituição" value={estado} onChange={e => setEstado(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder=" País da Instituição" value={country} onChange={e => setCountry(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Telefone da Instituição" value={phone} onChange={e => setPhone(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Valor da Doação" value={donation} onChange={e => setDonation(e.target.value)}/>

            <Pressable>
              <Text style={styles.sendButtonFormDoacao} onPress={sendButton}>Enviar</Text>
            </Pressable>
    </View>
  </ScrollView>
  );
      //containerFormDoacao
    /* return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FormDoacao />
      </View>
    ); */
  }

function EdicaoDoacao(){

    const [name, setName] = useState();
    const [country, setCountry] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [estado, setEstado] = useState();
    const [city, setCity] = useState();
    const [donation, setDonation] = useState();
  
  
    function sendButton() {
      const postInst = async () => {
          const connectAPI = await fetch('https://coding-liferay.herokuapp.com/api/v1/form/put/update', { method: 'POST',  body: JSON.stringify({
            cityInstitution: city,
            countryInstitution: country,
            emailInstitution: email,
            nameInstitution: name,
            phoneNumberInstitution: phone,
            stateInstitution: estado,
            value: donation
          }),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }})
  
          return connectAPI;
      };
      postInst().then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.warn("Formulário apagado")
              }
              else {
                console.warn("Formulário Não Editado, Erro com algum campo!")
              }
      })
  
    };
  
  
    return (
    <ScrollView style={styles.homeScreenFormDoacao}>
      <View>
        <Text style={styles.titleHomeFormDoacao}>EDIÇÃO DO FORMULÁRIO </Text>
        <Text style={styles.titleHome}>FORMULÁRIO DE DOAÇÃO</Text>
              <TextInput style={styles.containerFormDoacao} placeholder="Nome da Instituição" value={name} onChange={e => setName(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Email da Instituição" value={email} onChange={e => setEmail(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Cidade da Instituição" value={city} onChange={e => setCity(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Estado da Instituição" value={estado} onChange={e => setEstado(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder=" País da Instituição" value={country} onChange={e => setCountry(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Telefone da Instituição" value={phone} onChange={e => setPhone(e.target.value)}/>
  
              <TextInput style={styles.containerFormDoacao} placeholder="Valor da Doação" value={donation} onChange={e => setDonation(e.target.value)}/>
  
              <Pressable>
                <Text style={styles.sendButtonFormDoacao} onPress={sendButton}>Enviar</Text>
              </Pressable>
  
      </View>
    </ScrollView>
    );
  }; 


function TelaHistDoacoes() {

    const [formList, setFormList] = useState();

    const get = async () => {
      const connectAPI = await (await fetch('https://coding-liferay.herokuapp.com/api/v1/form/get/all'))
      const data = await connectAPI.json();
      return data;
    };

    useEffect(() => {
      
      get().then((response) => {
        setFormList(response);
        console.log(response)
      });
    }, [])

      return (
        <ScrollView style={styles.homeScreenHistDoacao}>
          <View>
            <Text style={styles.titleHomeHistDoacao}>REGISTRO DE DOAÇÕES</Text>
            <View >
              {data.map((info) => 
              <HistoricCard
              nameInstitution={info.nameInstitution}
              value={info.value}
              id={info.id}
              nomeTela="EdicaoDoacao"
              />)}
            </View>
            
          </View>
        </ScrollView>
        );
      };

function Mapa() {

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
  
function Ajuda({navigation}) {
      const onSignInPressed = () => {
        console.warn('PERGUNTAS FREQUENTES');
        navigation.navigate("FAQ");
    }

    const onSignInPressed2 = () => {
        console.warn('TERMOS E CONDIÇÕES DE USO');
        navigation.navigate("Termos");
    }

    return(
        <ScrollView style={styles.buttonScreenAjuda} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButtonAjuda}>AJUDA</Text>
                    <View style={styles.containerAjuda}>     
                            <CustomButtonAjuda
                                ftWeight= 'bold'
                                text='PERGUNTAS FREQUENTES' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButtonAjuda 
                                ftWeight= 'bold'
                                text='TERMOS E CONDIÇÕES DE USO' 
                                onPress= {onSignInPressed2} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                    </View>
            </View>
        </ScrollView>
  );
    /* return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Liferay App</Text>
      </View>    
    ); */
  }

  const PerguntasFrequentes = () => {
    return (
    <ScrollView style={styles.perguntasFrequentesScreen}>
        <View>
            <View>
                <Text style={styles.titlePerguntas}>PERGUNTAS USUAIS</Text>
            </View>

            <Perguntas />
        </View>
  </ScrollView>
  );
};

const TermosECondicoes = () => {
  return (
  <ScrollView style={styles.termosScreen}>
      <View>
          <View>
              <Text style={styles.titleTermos}>TERMOS E CONDIÇÕES</Text>
          </View>

          <Termos />
      </View>
  </ScrollView>
);
};


function LogoLiferay() {
    return (
      <Image
        style={{ width: 120, height: 35, alignContent: 'left'}}
        source={require('../../assets/images/liferay-logo-small.png')}
      />
    );
  }

  function EditHistDoacoes(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="FormHistDoacoes" component={TelaHistDoacoes} options={{ headerShown: false }}/>
          <Stack.Screen name="EdicaoDoacao" component={EdicaoDoacao} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }


  //Telas de ajuda e termos de uso

function AjudaeTermos(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="AjudaMain" component={Ajuda} options={tabOptionsHide} />
          <Stack.Screen name="FAQ" component={PerguntasFrequentes} options={{ headerShown: false }}/>
          <Stack.Screen name="Termos" component={TermosECondicoes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }

  //Navbar de formularios de doação

function Forms(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="Formularios" component={Formularios} options={tabOptionsHide} />
          <Stack.Screen name="FormDoacoes" component={TelaformDoacao} options={{ headerShown: false }}/>
          <Stack.Screen name="FormHistDoacoes" component={EditHistDoacoes} options={{ headerShown: false }}/>
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
                <Tab.Screen name="Ajuda" component={AjudaeTermos} options={tabOptions} />
            </Tab.Group>
        </Tab.Navigator>
    );
  }

//Navbar mestra(intro, login e acesso à navbar central)

export default function intro(){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Intro" component={TelaIntro} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }}/>
          <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }