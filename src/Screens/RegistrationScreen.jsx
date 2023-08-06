import React from "react";
import {
    Button,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
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
                    <View>
                        <Text style={styles.text}>
                            Already have an account? Log In
                            {/* <Button
                            title="Sign in"
                            style={styles.caption}
                            color="#1B4371"
                        /> */}
                        </Text>
                        {/* <TouchableOpacity
                            style={styles.button}
                            // onPress={onPress}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity> */}
                    </View>
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
        marginTop: 0,
        marginLeft: 5,
        textAlign: "center",
        color: "#1B4371",
        textAlignVertical: "top",
        // textDecorationLine: "underline",
    },
    buttonText: {
        // paddingTop: 5,
        // margin: 0,
        // padding: 0,
        marginLeft: 5,
        color: "#1B4371",
        textAlignVertical: "bottom",
        textDecorationLine: "underline",
    },
});

export { RegistrationScreen };