import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {FlatList, Text, View} from "react-native";
import {useTheme, withTheme} from "react-native-paper";
import Ionicons from '@expo/vector-icons/Ionicons';
import {stripString} from "../utils";


function TransactionHistory({expenses}) {

    const {colors} = useTheme();

    const upIcon = <Ionicons name="arrow-up-outline" size={30} color={colors.primary}/>;

    return (
        <View style={styles.container}>

            <View style={styles.transactionHeader}>
                <Text style={{fontSize: 22, fontWeight: "bold", color: colors.text}}>Transaction History</Text>
                {/*<Text style={{color: colors.primary, fontSize: 16}}>See All</Text>*/}
            </View>

          {/*<View style={{...styles.items, marginLeft: 12, marginRight: 12}} >*/}
          {/*  <Text style={{color: colors.primary}}>Reason</Text>*/}
          {/*  <Text style={{color: colors.primary}}>Amount</Text>*/}
          {/*  <Text style={{color: colors.primary}}>Date</Text>*/}
          {/*</View>*/}

            <ScrollView style={styles.historyContainer}>
              {expenses && expenses.map((expense) => (
                    <View style={styles.items} key={expense.id}>
                        <Text style={{...styles.transactionTitle, color: colors.text}}>{stripString(expense.description)}</Text>
                        <Text style={{color: colors.text}}> ৳ {expense.amount}</Text>
                        <Text style={{color: colors.text}}>{expense.date}</Text>

                    </View>
                ))}
            </ScrollView>
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
        paddingLeft: 12,
        paddingRight: 12,
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    transactionHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
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
