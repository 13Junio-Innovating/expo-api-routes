import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import axios from 'axios';

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  const tailwind = useTailwind();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email,
        password,
      });
      const userId = response.data.userId;
      Alert.alert('Sucesso', 'Usuário registrado com sucesso');
      navigation.navigate('Schedule', { userId });
    } catch (error) {
      Alert.alert('Erro', 'Erro ao registrar usuário');
      console.error(error);
    }
  };

  return (
    <View style={tailwind('flex-1 justify-center p-4')}>
      <Text style={tailwind('text-2xl mb-4')}>Cadastro</Text>
      <TextInput
        style={tailwind('h-10 border-b border-gray-300 mb-4')}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={tailwind('h-10 border-b border-gray-300 mb-4')}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={tailwind('h-10 border-b border-gray-300 mb-4')}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;