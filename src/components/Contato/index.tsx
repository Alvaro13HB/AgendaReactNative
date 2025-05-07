import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function Contato(){
    return(
        <View style={styles.container}>
            <View style={styles.dados}>
                <Text style={styles.nome}>Álvaro</Text>
                <Text style={styles.numero}>(35) 98871-9675</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require("../../../assets/trash-can.png")}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        height: 50,
        backgroundColor: "#000",
    },
    dados: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: 35,
    },
    nome: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff",
    },
    numero: {
        fontWeight: "medium",
        fontSize: 10,
        color: "#fff",
    }
});