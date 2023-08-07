import { Alert, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";
import { InputPassForm } from "./InputPassForm";

const FormRegistation = () => {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignup = () => {
        // console.log("click");
        console.log("login:", login);
        console.log("email:", email);
        console.log("password:", password);

        Alert.alert(`${login}, ${email}, ${password}`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <InputForm
                    placeholder="Login"
                    name="login"
                    onChange={setLogin}
                    value={login}
                />
                <InputForm
                    placeholder="E-mail"
                    name="email"
                    onChange={setEmail}
                    value={email}
                />
                <InputPassForm
                    placeholder="Password"
                    name="password"
                    onChange={setPassword}
                    value={password}
                />
                <ButtonForm caption="To register" onSignup={onSignup} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export { FormRegistation };
