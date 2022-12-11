import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ScrollView, TextInput } from 'react-native-web';


const EdicaoDoacao = () => {

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
          console.warn("Formulário Editado!")
            }
            else {
              console.warn("Formulário Não Editado, Erro com algum campo!")
            }
    })

  };


  return (
  <ScrollView style={styles.homeScreen}>
    <View>
      <Text style={styles.titleHome}>EDIÇÃO DO FORMULÁRIO </Text>
      <Text style={styles.titleHome}>FORMULÁRIO DE DOAÇÃO</Text>
            <TextInput style={styles.container} placeholder="Nome da Instituição" value={name} onChange={e => setName(e.target.value)}/>

            <TextInput style={styles.container} placeholder="Email da Instituição" value={email} onChange={e => setEmail(e.target.value)}/>

            <TextInput style={styles.container} placeholder="Cidade da Instituição" value={city} onChange={e => setCity(e.target.value)}/>

            <TextInput style={styles.container} placeholder="Estado da Instituição" value={estado} onChange={e => setEstado(e.target.value)}/>

            <TextInput style={styles.container} placeholder=" País da Instituição" value={country} onChange={e => setCountry(e.target.value)}/>

            <TextInput style={styles.container} placeholder="Telefone da Instituição" value={phone} onChange={e => setPhone(e.target.value)}/>

            <TextInput style={styles.container} placeholder="Valor da Doação" value={donation} onChange={e => setDonation(e.target.value)}/>

            <Pressable>
              <Text style={styles.sendButton} onPress={sendButton}>Enviar</Text>
            </Pressable>

    </View>
  </ScrollView>
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
  container: {
    backgroundColor: '#fff',
    width: '90%',
    color: '#0B63CE',

    borderColor: '#0B63CE',
    borderRadius: 7,
    borderWidth: 1,

    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginTop: 10,
  },
  sendButton: {
    backgroundColor: '#0B63CE',
    width: '90%',
    color: '#fff',

    borderColor: '#fff',
    borderRadius: 7,
    borderWidth: 1,

    paddingVertical: 10,
    paddingHorizontal: 115,
    marginVertical: 10,
    marginTop: 10,
  },
});

export default EdicaoDoacao;