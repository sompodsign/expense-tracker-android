import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Text, View } from "react-native";
import { useTheme, withTheme } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';


function TransactionHistory({expenses}) {

  const { colors } = useTheme();

  const upIcon = <Ionicons name="arrow-up-outline" size={30} color={colors.primary} />;


  return (
    <View style={styles.container}>

      <View style={styles.transactionHeader}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: colors.text }}>Transaction History</Text>
        <Text style={{ color: colors.primary, fontSize: 16 }}>See All</Text>
      </View>

      <View style={styles.transaction}>

        {expenses && expenses.map((expense) => (
            <View key={expense.id} style={styles.historyContainer}>
            <Text style={{ ...styles.transactionTitle, color: colors.text }}>{expense.description}</Text>
            <Text style={{ color: colors.text }}>Amount: {expense.amount}</Text>
            </View>
        ))}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    direction: "column",
  },
  historyContainer: {
    flexDirection: "column",
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  transaction: {
    flexDirection: "row",
    marginBottom: 17,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 7
  },
  transactionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  description: {
    flex: 1,
    paddingLeft: 20,
  },

  tableMargin: {
    marginLeft: "28%",
  }

});

export default withTheme(TransactionHistory);
