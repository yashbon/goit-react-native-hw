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

function LoginScreen(params) {
    // console.log("login");
    return (
        // <View style={styles.container}>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={-280}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground
                    source={image}
                    // source={require("../../src/images/bg.png")}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <View style={styles.reg}>
                        {/* <PhotoUser /> */}
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
        paddingTop: 32,
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

export { LoginScreen };
