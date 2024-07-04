import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {TextInput, Button} from 'react-native-paper';

import BaseCard from '../components/BaseCard';
import BaseModal from '../components/BaseModal'

import { UserContextGlobal } from '../context/UserContext';

export default function Login() {
const {email, setEmail, senha, setSenha, fazerLogin, showModal} = React.useContext(UserContextGlobal)
  return (
    <View style={estilo.content}>
    <Image style={estilo.img} source="https://img.icons8.com/dusk/100/lock-2.png" />
      <BaseCard title="Login do App" sub="Tudo no sigilo, confia">
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
        />

        <TextInput
        label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          mode="outlined"
        />

        <Button style={estilo.btn} mode="contained" onPress={()=>fazerLogin()}>Entrar</Button>
        <Button style={{marginTop: 10}} onPress={showModal} >Cadastrar</Button>
      </BaseCard>
      <BaseModal>
      <Text>funfo modal</Text>
      </BaseModal>
    </View>
  );

  
}

const estilo = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'pink',
        padding: 20,
        justifyContent: 'center'
    },
    btn: {
      marginTop: 8,
      backgroundColor: 'pink'
    },
    img: {
      width: 75,
      height: 75,
      alignSelf: 'center',
      marginBottom: 10,
    }
  })
