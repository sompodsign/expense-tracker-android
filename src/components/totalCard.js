
import * as React from 'react';
import { Text, View } from "react-native";
import { useTheme, withTheme } from "react-native-paper";
import {StyleSheet} from "react-native";

export const TotalCard = () => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.container, backgroundColor: colors.primary}}>
      <View>
        <Text style={styles.todayStyle}>Today</Text>
        <Text style={styles.currentMonthStyle}>This Month</Text>
        <Text style={styles.thisYear}>This Year</Text>
      </View>
      <View>
        <Text style={styles.todayStyle}>৳125</Text>
        <Text style={styles.currentMonthStyle}>৳125</Text>
        <Text style={styles.thisYear}>৳125</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  todayStyle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  currentMonthStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    margin: 5,
    marginLeft: 0,
  },
  thisYear: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default withTheme(TotalCard);
