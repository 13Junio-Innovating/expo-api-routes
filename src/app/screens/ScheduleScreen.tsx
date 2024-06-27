import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import axios from 'axios';

const ScheduleScreen = ({ route }: { route: any }) => {
  const tailwind = useTailwind();
  const { userId } = route.params;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSchedule = async () => {
    try {
      const response = await axios.post('http://localhost:3000/schedule', {
        userId,
        date,
        time,
      });
      Alert.alert('Sucesso', 'Horário agendado com sucesso');
    } catch (error) {
      Alert.alert('Erro', 'Erro ao agendar horário');
      console.error(error);
    }
  };

  return (
    <View style={tailwind('flex-1 justify-center p-4')}>
      <Text style={tailwind('text-2xl mb-4')}>Agendar Horário</Text>
      <TextInput
        style={tailwind('h-10 border-b border-gray-300 mb-4')}
        placeholder="Data (YYYY-MM-DD)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={tailwind('h-10 border-b border-gray-300 mb-4')}
        placeholder="Hora (HH:MM)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Agendar" onPress={handleSchedule} />
    </View>
  );
};

export default ScheduleScreen;