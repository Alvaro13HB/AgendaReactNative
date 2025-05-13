import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 60,
        backgroundColor: "#3c3f44",
    },
    dados: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: 35,
    },
    nome: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff",
    },
    numero: {
        fontWeight: "medium",
        fontSize: 15,
        color: "#fff",
    }
});

export default styles;