import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./src/Screens/Home";

const MainStack = createStackNavigator(); // вказує на групу навігаторів

const App = () => {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <MainStack.Navigator initialRouteName="Home">
                    <MainStack.Screen
                        name="RegistrationScreen"
                        component={RegistrationScreen}
                    />
                    <MainStack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                    />
                    <MainStack.Screen name="Posts" component={PostsScreen} />
                    <MainStack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: "Start screen" }}
                    />
                </MainStack.Navigator>
            </View>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
});
export default App;
