import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        height: 80,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
    },
    button1: {
        flex: 0.5,
        flexDirection: "column",
        backgroundColor: "#000",
    },
    button2: {
        flex: 0.5,
        flexDirection: "column",
        backgroundColor: "#000",
    }
});

export default styles;