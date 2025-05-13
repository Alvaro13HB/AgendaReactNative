import { Dimensions, StyleSheet } from "react-native";

const windowsHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        backgroundColor: "#2c2f33",
        display: "flex",
        height: windowsHeight - 140,
    }
});

export default styles;