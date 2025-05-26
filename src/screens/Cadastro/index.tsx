import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import fs from "fs";
import styles from "./style";

function mascaraNumero(mascara: string, numeroStr: string){
    let i = numeroStr.length;
    let saida = "#";
    let texto = mascara.substring(i);
    let resultado = numeroStr;
    
    while (texto.substring(0, 1) !== saida && texto.length) {
        resultado += texto.substring(0, 1);
        i++;
        texto = mascara.substring(i);
    }
    
    return resultado;
}


function escreverArquivo(nome: string, numero: string) {
    fs.appendFile("data/data.txt", `${nome}:${numero}\n`, (err) => {
        if (err) {
            console.error("Erro ao escrever no arquivo:", err);
        } else {
            console.log("Contato adicionado com sucesso!");
        }
    });
}

export function Cadastro(){
    const [nome, setNome] = React.useState("");
    const [numero, setNumero] = React.useState("");

    return(
        <>
            <View style={styles.container}>
                <Text style={styles.titulo}>Cadastrar Contato</Text>
                <View style={styles.form}>
                    <View style={styles.control}>
                        <Text style={styles.texto}>Nome: </Text>
                        <TextInput style={styles.input} onChangeText={text => setNome(text)}></TextInput>
                    </View>

                    <View style={styles.control}>
                        <Text style={styles.texto}>Número: </Text>
                        <TextInput style={styles.input} keyboardType="numeric" onChangeText={text => setNumero(mascaraNumero("(##) #####-####", text))} ></TextInput>
                    </View>
                    
                    <TouchableOpacity style={styles.botao} onPress={() => {escreverArquivo(nome, numero)}}>
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};