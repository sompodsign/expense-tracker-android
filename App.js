import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#22bb9c',
    accent: '#1f222a',
    text: '#fafafa',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>{
    <PaperProvider theme={theme}>
      <PersistGate>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen component={LoginScreen}  name="Login"/>
          <Stack.Screen component={HomeScreen}  name="Home"/>
        </Stack.Navigator>
        </PersistGate>
    </PaperProvider>
  }
  </NavigationContainer>;
}
