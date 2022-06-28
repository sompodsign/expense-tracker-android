import * as React from 'react';
import { useTheme } from "react-native-paper";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";



const MoneyInput = () => {
  const {colors} = useTheme();
  const [text, setText] = React.useState("");



  return (
    <View style={{...styles.container, backgroundColor: colors.accent}}>
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor={colors.primary}
        value={text}
      />

      <TextInput
        style={styles.input}
        placeholder="৳ Amount"
        placeholderTextColor={colors.primary}
        keyboardType={'numeric'}
        value={text}
        underlineColorAndroid='transparent'
      />
      <TouchableOpacity>
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
