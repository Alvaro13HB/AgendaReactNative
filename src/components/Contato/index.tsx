import React from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, Image } from "react-native";

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