import React from "react";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";
import { PostsScreen } from "./src/Screens/PostsScreen";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Screens/Home";

const App = () => {
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
    return (
        <View style={styles.container}>
            {/* <Home /> */}
            {/* <RegistrationScreen /> */}
            <LoginScreen />
            {/* <PostsScreen /> */}
        </View>
    );
};

export default App;
