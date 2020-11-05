import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OMNI Galactic">
        <Stack.Screen
          name="OMNI Galactic"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

