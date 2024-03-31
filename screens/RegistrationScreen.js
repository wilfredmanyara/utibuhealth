import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Implement logic to send user registration data (username, password) to your backend API for user creation in the database.
    // Upon successful registration, navigate to the login screen or medication ordering screen.
    navigation.navigate('Login'); // Or 'MedOrder' depending on your app flow
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={{ marginBottom: 10 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;