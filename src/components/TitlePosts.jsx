import { StyleSheet, Text } from "react-native";

export const TitlePosts = ({ text }) => {
    return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: "500",
        textAlign: "center",
        color: "#212121",
        // fontSize: 30,
        // // fontFamily: "Roboto_500Medium",
        // letterSpacing: 0.3,
        // textAlign: "center",
        // paddingBottom: 32,
    },
});
