import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

import image from "../../src/images/bg.png";

function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                // source={require("../../src/images/bg.png")}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>hello</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        // width: "100%",
        // height: "100%",
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
});

export { RegistrationScreen };
