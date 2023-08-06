import { Image, StyleSheet, Text, View } from "react-native";

import photo from "../images/photo-user.png";

export const UserCard = () => {
    return (
        <View style={styles.user}>
            <Image source={photo} style={styles.userPhoto} />
            <View>
                <Text style={styles.name}>Natali Romanova</Text>
                <Text style={styles.email}>email@example.com</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    user: {
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginBottom: "auto",
        marginTop: 32,
    },

    userPhoto: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },

    name: {
        fontSize: 13,
        fontWeight: "700",
    },

    email: {
        fontSize: 11,
    },
});
