import * as React from 'react';
import { useTheme } from "react-native-paper";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import client from "../axiosConfig";
import * as SecureStore from "expo-secure-store";
import axios from "axios";


const MoneyInput = ({submitForm, isSubmit}) => {
  const {colors} = useTheme();
  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState("");


    let yourDate = new Date()
    yourDate.toISOString().split('T')[0]
    const offset = yourDate.getTimezoneOffset()
    yourDate = new Date(yourDate.getTime() - (offset*60*1000))
    const currentDate = yourDate.toISOString().split('T')[0]


async function getValueFor(key) {
    return await SecureStore.getItemAsync(key);
  }

    async function handleSubmit() {
        console.log(description, amount);
        const token = await getValueFor('token');
        console.log(token);
        const {data} = await axios.request({
            method: 'POST',
            url: 'https://api.shampad.live/api/expense/create-expense',
            headers: {'Authorization': 'Token ' + token},
            data: {
                description: description,
                amount: amount,
                date: currentDate
            }
        })
        submitForm(!isSubmit);
    }



  return (
    <View style={{...styles.container, backgroundColor: colors.accent}}>
      <TextInput
          style={{...styles.input, color: colors.text}}
        placeholder="Description"
        placeholderTextColor={colors.primary}
        onChangeText={text => setDescription(text)}
      />

      <TextInput
        style={{...styles.input, color: colors.text}}
        placeholder="৳ Amount"
        placeholderTextColor={colors.primary}
        keyboardType={'numeric'}
        onChangeText={text => setAmount(text)}
        underlineColorAndroid='transparent'
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={{...styles.button, backgroundColor: colors.primary}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  button: {
    padding: 16,
    borderRadius: 26,
    margin: 6,
    fontSize: 17,
    color: "#fff",
    fontWeight: "normal",
    textAlign: "center",
  },
});

export default MoneyInput;
