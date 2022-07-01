import React, {useEffect} from "react";
import {
    Button,
    RefreshControl,
    SafeAreaView, ScrollView,
    StatusBar,
    StyleSheet, Text, TouchableOpacity,
    useColorScheme,
    View,
} from "react-native";

import {useTheme, withTheme} from "react-native-paper";
import {Colors} from "react-native/Libraries/NewAppScreen";
import Greeting from "../components/greeting";
import MoneyInput from "../components/moneyInput";
import {TotalCard} from "../components/totalCard";
import TransactionHistory from "../components/transactionHistory";
import {deleteValueFor, getValueFor} from "../utils";
import client from "../axiosConfig";
import Ionicons from "@expo/vector-icons/Ionicons";


const HomeScreen = ({navigation}) => {

    const [expenses, setExpenses] = React.useState([]);
    const [isSubmitForm, setIsSubmitForm] = React.useState(false);


    const {colors} = useTheme();

    const logoutIcon = <Ionicons name="log-out-outline" size={30} color={colors.primary}/>;

    const isDarkMode = useColorScheme() === "dark";
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: "100%",
    };


    useEffect(() => {
        async function fetchExpenseData() {
            const token = await getValueFor('token');
            console.log(token);
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


    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setIsSubmitForm(!isSubmitForm);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const logout = async () => {
        await deleteValueFor('token');
        navigation.navigate('Login');
        navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
        })
    }

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar backgroundColor={colors.primary}/>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                    <View style={styles.greetingBar}>
                     <View style={styles.greeting}>
                         <Greeting/>
                        <TouchableOpacity onPress={logout} style={styles.logoutIcon}>
                            <Ionicons name="log-out-outline" size={30} color={colors.primary}/>
                        </TouchableOpacity>
                     </View>
                    </View>


                <TotalCard totalData={expenses}/>
                <MoneyInput submitForm={setIsSubmitForm} isSubmit={isSubmitForm}/>
                <TransactionHistory expenses={expenses['expenses']}/>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    greetingBar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 20,

    },
    logoutIcon: {
    marginLeft: "48%",
    },
    greeting: {
        paddingLeft: 10,
        flexDirection: "row",
    },
    topContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    }
});

export default withTheme(HomeScreen);
