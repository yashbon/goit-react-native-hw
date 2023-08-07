import { View } from "react-native";
import { InputForm } from "./InputForm";
import { InputPassForm } from "./InputPassForm";
import { ButtonForm } from "./ButtonForm";
import { useState } from "react";

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

const FormLogin = () => {
    return (
        <View>
            <InputForm
                placeholder="E-mail"
                name="email"
                // onChange={setEmail}
                // value={email}
            />
            {/* <InputForm
                placeholder="Password"
                name="name"
                // onChange={ }
                value
            /> */}
            <InputPassForm
                placeholder="Password"
                name="password"
                // onChange={setPassword}
                // value={password}
            />
            <ButtonForm caption="Sign in" />
        </View>
    );
};

export { FormLogin };
