import React from "react";
import { View } from "react-native";
import { ComponentContato } from "../../components";
import styles from "./style";
import fs from "fs";
const contatos = fs.readFileSync("../../data/data.txt", "utf-8");

export function Home(){
    return(
        <View style={styles.container}>
            {contatos.split("\n").map((contato) => {
                const [nome, numero] = contato.split(":");
                return (
                    <ComponentContato nome={nome} numero={numero} />
                );
            })}
        </View>
    );
};