import { Image, StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export const PhotoUser = () => {
    return (
        <View style={styles.wrap}>
            <View style={styles.imageWrapper}>
                <Image source={null} style={styles.image} />
            </View>
            <Feather name="plus-circle" size={25} style={styles.icon} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        position: "absolute",
        top: -60,
        alignSelf: "center",
    },

    imageWrapper: {
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        overflow: "hidden",
    },

    image: {
        width: 120,
        height: 120,
        objectFit: "cover",
        backgroundColor: "#F6F6F6",
    },

    icon: {
        width: 25,
        height: 25,
        position: "absolute",
        right: -12.5,
        bottom: 14,
        color: "#FF6C00",
    },
});
