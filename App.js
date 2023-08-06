import React from "react";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";
import { LoginScreen } from "./src/Screens/LoginScreen";

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
            {/* <RegistrationScreen /> */}
            <LoginScreen />
        </View>
    );
};

export default App;
