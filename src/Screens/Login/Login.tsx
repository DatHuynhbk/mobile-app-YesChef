import React from "react";
import { i18n, LocalizationKey } from "@/Localization";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { RootScreens } from "..";
import { useState } from "react";
import { useLoginMutation } from "@/Services/login";
import Logo from "../../../assets/logo.svg";
export const Login = (props: {
  onNavigate: (string: RootScreens) => void;
}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () => {
    // call api
    props.onNavigate(RootScreens.MAIN)
    
  };

  return (
    <View style={styles.container}>
      <Logo height={100} width={120} style={{marginLeft: '30%'}}></Logo>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignContent: 'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Login;