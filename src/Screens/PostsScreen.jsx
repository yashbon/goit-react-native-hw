import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TitlePosts } from "../components/TitlePosts";
import { Feather } from "@expo/vector-icons";
import { UserCard } from "../components/UserCard";

function PostsScreen(params) {
    return (
        <View style={styles.posts}>
            <TitlePosts text="Posts" style={styles.title} />
            <Feather name="log-out" size={24} style={styles.icon} />
            <UserCard style={styles.crad} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    posts: {
        justifyContent: "space-between",
        position: "relative",
        width: "100%",
        height: 88,
        marginBottom: 32,
        paddingTop: 54,
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 1,
    },
    title: {},
    icon: {
        position: "absolute",
        top: 54,
        right: 10,
        color: "#BDBDBD",
    },
    card: {
        width: 171,
        height: 60,
        marginTop: 32,
    },
});

export { PostsScreen };
