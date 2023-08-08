import React from "react";
import {
    Button,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
} from "react-native";

import image from "../../src/images/bg.png";
import { FormRegistation } from "../components/FormRegistration";
import { TitleForm } from "../components/TitleForm";
import { PhotoUser } from "../components/PhotoUser";

function RegistrationScreen({ navigation }) {
    return (
        // <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={-180}
        >
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        // </View>
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
