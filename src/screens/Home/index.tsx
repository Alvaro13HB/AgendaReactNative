import React from "react";
import { View, ScrollView } from "react-native";
import { ComponentContato } from "../../components";
import { useState } from "react";
import styles from "./style";
import { File, Paths } from "expo-file-system/next";

export function Home(){
    const [contatos, setContatos] = useState(['']);

    try{
        const file = new File(Paths.cache, '../../data/data.txt');
        setContatos(file.text().split("\n"));
    }
    catch(error){
        console.error(error);
    }

    return(
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} contentContainerStyle={contatos.length === 0 ? styles.emptyState : null} >
                {contatos.map((contato) => {
                    const [nome, numero] = contato.split(":");
                    return (
                        <ComponentContato nome={nome} numero={numero} />
                    );
                })}
            </ScrollView>
        </View>
    );
};