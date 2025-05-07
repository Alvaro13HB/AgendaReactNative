import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.header_text}>Agenda de Contatos</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: "black",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    header_text: {
        marginBottom: 15,
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
    }
});