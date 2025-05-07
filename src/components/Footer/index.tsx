import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

export function Footer(){
    return(
        <View style={styles.footer}>
            <View>
                <TouchableOpacity style={styles.button1} onPress={() => {

                }}>
                    <Image source={require("../../../assets/profile.png")} />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button1} onPress={() => {

                }}>
                    <Image source={require("../../../assets/add.png")} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

function change(){
    return;
}

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