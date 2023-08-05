import React from "react";
import { StyleSheet, View } from "react-native";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";

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
            <RegistrationScreen />
        </View>
    );
};

export default App;
