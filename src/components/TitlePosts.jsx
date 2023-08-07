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
    },
});
