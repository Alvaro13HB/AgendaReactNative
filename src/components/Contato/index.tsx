import React from "react";
import styles from "./styles";
import { Text, View, TouchableOpacity, Image } from "react-native";

interface ContatoProps {
    nome: string;
    numero: string;
}

export function Contato(ContatoProps: ContatoProps) {
    return(
        <View style={styles.container}>
            <View style={styles.dados}>
                <Text style={styles.nome}>{ContatoProps.nome}</Text>
                <Text style={styles.numero}>{ContatoProps.numero}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image source={require("../../../assets/trash-can.png")}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};