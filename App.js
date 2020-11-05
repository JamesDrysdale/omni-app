import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import Header from './Header';
import Footer from './Footer';
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}
        ref={navigationRef}
      >
        <Stack.Navigator 
          initialRouteName="OMNI Galactic"
          headerMode="screen"
          >

          <Stack.Screen
            name="OMNI Galactic"
            component={Home}
            options={{
              header: () => <Header headerDisplay="OMNI Galactic" />
            }}
          />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    );
  }
}


