import React, {useEffect} from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from "react-native";

import { useTheme } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import  Greeting  from "../components/greeting";
import MoneyInput from "../components/moneyInput";
import { TotalCard } from "../components/totalCard";
import TransactionHistory from "../components/transactionHistory";
import {getValueFor} from "../utils";
import client from "../axiosConfig";


const HomeScreen = () =>  {

  const [expenses, setExpenses] = React.useState([]);
  const [isSubmitForm, setIsSubmitForm] = React.useState(false);

  const { colors } = useTheme();
  const isDarkMode = useColorScheme() === "dark";
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: "100%",
  };
console.log(expenses["expenses"]);
  useEffect( () => {
    async function fetchExpenseData() {
        const token = await getValueFor('token');
        const {data} = await client.get(
            '/expenses',
            {headers: {'Authorization': 'Token ' + token}}
        )
        return data
    }
    fetchExpenseData().then(data => {
        setExpenses(data);
    });
  }, [isSubmitForm]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={colors.primary} />
      <View style={styles.greetingBar}>
        <View style={styles.greeting}>
          <Greeting />
        </View>
      </View>
      <TotalCard totalData={expenses}/>
      <MoneyInput submitForm={setIsSubmitForm} isSubmit={isSubmitForm}/>

      <TransactionHistory  expenses={expenses['expenses']}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greetingBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  greeting: {
    paddingLeft: 10,
  },
});

export default HomeScreen;
