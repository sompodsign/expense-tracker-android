import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
// import { Provider } from 'react-redux';
// import { store } from './src/store';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";


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
  return <NavigationContainer>
    {
    <PaperProvider theme={theme}>

      {/*<Provider store={store}>*/}
        {/* <PersistGate persistor={persistor} loading={null}> */}

        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen component={LoginScreen}  name="Login"/>
          <Stack.Screen component={HomeScreen}  name="Home"/>
        </Stack.Navigator>

        {/* </PersistGate> */}
        {/*</Provider>*/}

    </PaperProvider>
  }
  </NavigationContainer>;
}
