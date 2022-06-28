import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, Text, View } from "react-native";
import { useTheme, withTheme } from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';


function TransactionHistory() {

  const { colors } = useTheme();

  const upIcon = <Ionicons name="arrow-up-outline" size={30} color={colors.primary} />;


  return (
    <View style={styles.container}>

      <View style={styles.transactionHeader}>
        <Text style={{ fontSize: 22, fontWeight: "bold", color: colors.text }}>Transaction History</Text>
        <Text style={{ color: colors.primary, fontSize: 16 }}>See All</Text>
      </View>

      <View style={styles.transaction}>
        <View>
          {upIcon}
        </View>
        <View style={{ ...styles.tableMargin }}>
          <Text style={{ ...styles.transactionTitle, color: colors.text }}>Bus Vara</Text>
          <Text style={{ color: colors.text }}>Amount: 40</Text>
        </View>
        <Text style={{ ...styles.tableMargin, color: colors.text }}>20-05-2022</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,

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
