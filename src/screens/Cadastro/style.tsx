import { Dimensions, StyleSheet } from "react-native";

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: "#2c2f33",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: windowsHeight - 140,
    },
    titulo : {
        color: "#fff",
        fontSize: 35,
        fontWeight: "bold",
    },
    texto: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    control: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        margin: 10,
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: 350,
        padding: 10,
        borderRadius: 10,
        margin: 25,
        backgroundColor: "#3c3f44",
    },
    botao: {
        borderRadius: 5,
        padding: 10,
        display: "flex",
        margin: 10,
        backgroundColor: "#2c2f33"
    },
    input: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        height: 45,
        borderColor: "#3c3f44",
        borderWidth: 1,
        borderRadius: 5,
        width: 310,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
    }
});

export default styles;