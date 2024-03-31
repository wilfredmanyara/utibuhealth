import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'
import MedicationOrderingScreen from './screens/MedicationOrderingScreen'
import StatementScreen from './screens/StatementScreen'
import RegistrationScreen from './screens/RegistrationScreen'
import OrderConfirmation from './screens/OrderConfirmation'


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Order" component={MedicationOrderingScreen} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
      <Stack.Screen name="Statement" component={StatementScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
