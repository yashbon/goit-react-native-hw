import { TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { InputForm } from "./InputForm";
import { InputPassForm } from "./InputPassForm";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {
        // console.log("click");
        console.log("email:", email);
        console.log("password:", password);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
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
                <ButtonForm caption="Sign in" onSubmit={onSignIn} />
            </View>
        </TouchableWithoutFeedback>
    );
};

export { FormLogin };
