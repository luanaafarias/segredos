import React from 'react';
import { View, Text } from 'react-native';

 import {app} from '../config.firebase'
import { getAuth, 
  signInWithEmailAndPassword, 
  signUpWithEmailAndPassword } from 'firebase/auth';
export const UserContextGlobal = React.createContext({});

export default function UserContext(props) {
  const [email, setEmail] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [logado, setLogado] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
 

  function fazerLogin() {
    const auth = getAuth(app)
       signInWithEmailAndPassword(auth, email, senha)
      .then(user => setLogado(true))
     .catch(erro => console.log("erro ao fazer login, tente novamente"))
  }

  function cadastrar() {
    const auth = getAuth(app)
       CreateUserWithEmailAndPassword(auth, email, senha)
      .then(user => hideModal())
     .catch(erro => console.log("erro ao fazer login, tente novamente"))
  }

  return (
    <UserContextGlobal.Provider
      value={{
        email,
        setEmail,
        senha,
        setSenha,
        logado,
        setLogado,
        fazerLogin,
        visible,
        showModal,
        hideModal,
        nome,
        setNome,
        cadastrar
      }}>
      {props.children}
    </UserContextGlobal.Provider>
  );
}
