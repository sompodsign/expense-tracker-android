import React, { useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from "react-native";
import * as SecureStore from "expo-secure-store";


import { Colors } from "react-native/Libraries/NewAppScreen";
import { Checkbox, useTheme } from "react-native-paper";
import client from "../axiosConfig";

export default function LoginScreen({ navigation }) {
  const { colors } = useTheme();

  const isDarkMode = useColorScheme() === "dark";

  const [checked, setChecked] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
  }

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%"
  };

  async function login() {
    console.log(email, password);
    const {data} = await client.post(
      'login/',
      {'email': email, 'password': password},
    )
    console.log(data);
    if (data.token) {
      await save('token', data.token);
      // navigation.navigate('Home');
    }
  }

  useEffect(() => {
    const token = getValueFor('token');
    if (token) {
      navigation.navigate('Home');
    }
  },[]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <Text style={{ ...style.header, color: colors.text }}>
          Login to your account
        </Text>
      </View>
      {/* Input fields */}
      <View style={style.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{ ...style.input, color: colors.text }}
          placeholder="Email"
          placeholderTextColor={colors.primary}
        />
        <TextInput
          style={{ ...style.input, color: colors.text }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          placeholderTextColor={colors.primary}
          underlineColorAndroid="transparent"
        />
      </View>

      {/* Remember Me checkbox */}
      <View style={style.checkboxContainer}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          color={colors.primary}
          uncheckedColor={colors.primary}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{ ...style.checkboxText, color: colors.text }}>
          Remember Me
        </Text>
      </View>

      {/* Login button */}
      <TouchableOpacity onPress={login}>
        <Text style={{ ...style.button, backgroundColor: colors.primary }}>
          Sign in
        </Text>
      </TouchableOpacity>
      {/*Forget password*/}
      <View style={style.forgetPasswordContainer}>
        <Text style={{ ...style.forgetPasswordText, color: colors.primary }}>
          Forgot the password?
        </Text>
      </View>
      <View style={style.signUpContainer}>
        <Text style={{ color: colors.text, ...style.signUp }}>
          Don't have an account?
          <Text style={{ color: colors.primary }}> Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    paddingTop: "20%",
    paddingLeft: "5%",
    fontSize: 50,
    fontWeight: "bold"
  },
  inputContainer: {
    padding: "0%",
    marginTop: "10%"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 14,
    fontWeight: "bold"
  },
  button: {
    padding: 16,
    borderRadius: 26,
    margin: 10,
    marginTop: "6%",
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  checkboxContainer: {
    alignSelf: "center",
    flexDirection: "row",
    marginTop: "2%"
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "1%",
    marginTop: "2%"
  },
  signUpContainer: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: "10%"
  },
  signUp: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: "2%",
    alignSelf: "center"
  },
  forgetPasswordContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  forgetPasswordText: {
    fontSize: 17,
    fontWeight: "bold"
  }
});
