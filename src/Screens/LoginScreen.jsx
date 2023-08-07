import {
    Button,
    ImageBackground,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";

import image from "../../src/images/bg.png";
import { FormLogin } from "../components/FormLogin";
import { TitleForm } from "../components/TitleForm";
import { PhotoUser } from "../components/PhotoUser";

function LoginScreen() {
    return (
        // <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={-220}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={image}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.form}>
                        <TitleForm text="Sign in" />
                        <FormLogin />
                        <View>
                            <Text style={styles.text}>
                                Don't have an account? Sign up
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

export { LoginScreen };

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        flex: 1,
        justifyContent: "flex-end",
    },
    form: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 32,
        paddingBottom: 111,
        paddingHorizontal: 16,
        backgroundColor: "white",
    },

    text: {
        marginTop: 0,
        marginLeft: 5,
        textAlign: "center",
        color: "#1B4371",
        textAlignVertical: "top",
    },

    buttonText: {
        marginLeft: 5,
        color: "#1B4371",
        textAlignVertical: "bottom",
        textDecorationLine: "underline",
    },
});
