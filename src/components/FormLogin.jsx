import { View } from "react-native";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";

const FormLogin = () => {
    return (
        <View>
            <InputForm
                placeholder="E-mail"
                name="name"
                // onChange={ }
                value
            />
            <InputForm
                placeholder="Password"
                name="name"
                // onChange={ }
                value
            />
            <ButtonForm caption="To register" />
        </View>
    );
};

export { FormLogin };
