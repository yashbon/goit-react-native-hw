import React from "react";
import {
    Button,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    View,
} from "react-native";

import image from "../../src/images/bg.png";
import { FormRegistation } from "../components/FormRegistration";
import { TitleForm } from "../components/TitleForm";
import { PhotoUser } from "../components/PhotoUser";

function RegistrationScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                // source={require("../../src/images/bg.png")}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.reg}>
                    <PhotoUser />
                    <TitleForm text="Registration" />
                    <FormRegistation />
                    <Text style={styles.text}>
                        Already have an account?
                        <Button title="Sign in" style={styles.textLink} />
                    </Text>
                </View>
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
    reg: {
        width: "100%",
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        backgroundColor: "white",
        bottom: 0,
        position: "absolute",
        // right: 16,
        // top: "100%",
        // transform: [{ translateY: -50 }],
        // color: "#1B4371",
    },
    // text: {
    //     color: "white",
    //     fontSize: 42,
    //     lineHeight: 84,
    //     fontWeight: "bold",
    //     textAlign: "center",
    //     backgroundColor: "#000000c0",
    // },
    text: {
        textAlign: "center",
        color: "#1B4371",
    },
    textLink: {
        color: "#000",
    },
});

export { RegistrationScreen };
