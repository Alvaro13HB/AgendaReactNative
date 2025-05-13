import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ComponentHeader, ComponentFooter } from "../../components";
import styles from "./style";

export function Cadastro(){
    return(
        <>
        <ComponentHeader />
            <View style={styles.container}>
                <Text style={styles.titulo}>Cadastrar Contato</Text>
                <View style={styles.form}>
                    <View style={styles.control}>
                        <Text style={styles.texto}>Nome: </Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>

                    <View style={styles.control}>
                        <Text style={styles.texto}>Número: </Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        <ComponentFooter />
        </>
    );
};