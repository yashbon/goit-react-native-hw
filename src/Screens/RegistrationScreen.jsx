import React from "react";
import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import image from "../../src/images/bg.png";
import { FormRegistation } from "../components/FormRegistration";
import { TitleForm } from "../components/TitleForm";
import { PhotoUser } from "../components/PhotoUser";

function RegistrationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.bacground}
                >
                    <View style={styles.form}>
                        <PhotoUser />
                        <TitleForm text="Registration" />
                        <FormRegistation />
                        <View>
                            <Text style={styles.text}>
                                Already have an account? Sign Up
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    );
}

export { RegistrationScreen };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    bacground: {
        flex: 1,
        justifyContent: "flex-end",
    },

    form: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingBottom: 78,
        paddingHorizontal: 16,
        backgroundColor: "white",
    },

    text: {
        marginTop: 0,
        marginLeft: 5,
        textAlign: "center",
        color: "#1B4371",
    },
    buttonText: {
        color: "#1B4371",
        textAlignVertical: "bottom",
        textDecorationLine: "underline",
    },

    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});
