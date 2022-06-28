import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Avatar, useTheme, withTheme } from "react-native-paper";


export function Greeting() {
  const { colors } = useTheme();
  return (
    <View style={style.container}>
      <Avatar.Image size={40} source={require('../../assets/person.jpg')} />
      <View style={{ ...style.messages, }}>
      <Text style={{fontSize: 15, color: colors.text }}>Good Afternoon! 👏</Text>
      <Text style={{fontWeight: 'bold', fontSize: 17, color: colors.text}}>Shampad Sharkar</Text>
      </View>
  </View>
);

}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  messages: {
    marginLeft: 10,
  }
})

export default withTheme(Greeting);
