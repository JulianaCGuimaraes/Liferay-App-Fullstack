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

/* const data = [
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
]; */

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


//Tela de Login (ainda estou testando modula????o para diminuir o c??digo)

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
                  <Text style={styles.tituloLogin}>Doa????es</Text>
              
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
        console.warn('FORMUL??RIO DE DOA????ES')
        navigation.navigate('FormDoacoes')
    }

    const onSignInPressed2 = () => {
        console.warn('HIST??RICO DE DOA????ES');
        navigation.navigate('FormHistDoacoes')
    }

    return(
        <ScrollView style={styles.buttonScreenDoacao} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.titleButtonDoacao}>DOA????ES</Text>
                    <View style={styles.containerDoacao}>     
                            <CustomButtonDoacoes
                                ftWeight= 'bold'
                                text='FORMUL??RIO DE DOA????ES' 
                                onPress= {onSignInPressed} 
                                bgColor= '#0B63CE'
                                fgColor= '#fff'
                            /> 
                            <CustomButtonDoacoes 
                                ftWeight= 'bold'
                                text='HIST??RICO DE DOA????ES' 
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
          console.warn("Formul??rio Criado!")
            }
            else {
              console.warn("Formul??rio N??o Criado, Erro com algum campo!")
            }
    })

  };

  return (
  <ScrollView style={styles.homeScreenFormDoacao}>
    <View>
      <Text style={styles.titleHomeFormDoacao}>FORMUL??RIO DE DOA????O</Text>
            <TextInput style={styles.containerFormDoacao} placeholder="Nome da Institui????o" value={name} onChange={e => setName(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Email da Institui????o" value={email} onChange={e => setEmail(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Cidade da Institui????o" value={city} onChange={e => setCity(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Estado da Institui????o" value={estado} onChange={e => setEstado(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder=" Pa??s da Institui????o" value={country} onChange={e => setCountry(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Telefone da Institui????o" value={phone} onChange={e => setPhone(e.target.value)}/>

            <TextInput style={styles.containerFormDoacao} placeholder="Valor da Doa????o" value={donation} onChange={e => setDonation(e.target.value)}/>

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

function EdicaoDoacao({ route, navigation }){

    const [formList, setFormList] = useState();
    const [name, setName] = useState("");
    const [donation, setDonation] = useState();
  
    const { id } = route.params;

    const get = async () => {
      const connectAPI = await (await fetch(`https://coding-liferay.herokuapp.com/api/v1/form/get/${id}`))
      const data = await connectAPI.json();
      return data;
    };

    useEffect(() => {
      
      get().then((response) => {
        setFormList(response);
        console.log(response)
      });
    }, [])
  
    function sendButton() {
      const { id } = route.params;
      const putInst = async () => {
          const connectAPI = await fetch(`https://coding-liferay.herokuapp.com/api/v1/form/put/update/lean/${id}`, { method: 'PUT',  body: JSON.stringify({
            nameInstitution: name,
            value: donation
          }),
              headers: {
              'Content-type': 'application/json; charset=UTF-8',
            }})
  
          return connectAPI;
      };
      putInst().then((response) => {
          console.log(response);
          if (response.status === 201) {
            console.warn("Formul??rio editado")
            navigation.navigate("FormHistDoacoes");
              }
              else {
                console.warn("Formul??rio N??o Editado, Erro com algum campo!")
              }
      })
  
    };
  
  
    return (
    <ScrollView style={styles.homeScreenFormDoacao}>
      <View>
        <Text style={styles.titleHomeFormDoacao}>EDI????O DO FORMUL??RIO </Text>
        <Text style={styles.titleHome}>FORMUL??RIO DE DOA????O</Text>
              <TextInput style={styles.containerFormDoacao}  placeholder= {formList?.institution.name} defaultValue={name} onChange={e => setName(e.target.value)}/> 
              <TextInput style={styles.containerFormDoacao}  defaultValue={formList?.value} onChange={e => setDonation(e.target.value)}/>
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
            <Text style={styles.titleHomeHistDoacao}>REGISTRO DE DOA????ES</Text>
            <View >
              {formList?.map((info) => 
              <HistoricCard
              nameInstitution={info.institution.name}
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
        console.warn('TERMOS E CONDI????ES DE USO');
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
                                text='TERMOS E CONDI????ES DE USO' 
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
              <Text style={styles.titleTermos}>TERMOS E CONDI????ES</Text>
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

  //Navbar de formularios de doa????o

function Forms(){
    return(
      <Stack.Navigator>
          <Stack.Screen name="Formularios" component={Formularios} options={tabOptionsHide} />
          <Stack.Screen name="FormDoacoes" component={TelaformDoacao} options={{ headerShown: false }}/>
          <Stack.Screen name="FormHistDoacoes" component={EditHistDoacoes} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );  
  }

//Navbar central (perfil, formul??rios, mapa e etc.)

function Navbar() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
        
                    if (route.name === 'Usu??rio') {
                        iconName = focused
                        ? 'ios-home'
                        : 'ios-home-outline';
                        color = "white";
                        size = 34;
                    } else if (route.name === 'Formul??rios') {
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
                <Tab.Screen name="Usu??rio" component={PerfilUsuario} options={tabOptions} />
                <Tab.Screen name="Formul??rios" component={Forms} options={tabOptions} />
                <Tab.Screen name="Mapa" component={Mapa} options={tabOptions} />
                <Tab.Screen name="Ajuda" component={AjudaeTermos} options={tabOptions} />
            </Tab.Group>
        </Tab.Navigator>
    );
  }

//Navbar mestra(intro, login e acesso ?? navbar central)

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