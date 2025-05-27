import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MaskInput from "react-native-mask-input";
import { File, Paths } from "expo-file-system/next";
import styles from "./style";

function escreverArquivo(nome: string, numero: string){
    const file = new File(Paths.cache, "../../data/data.txt");
    file.write(`${nome}:${numero}\n`);
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
                        <TextInput style={styles.input} value={nome} onChangeText={text => setNome(text)}></TextInput>
                    </View>

                    <View style={styles.control}>
                        <Text style={styles.texto}>Número: </Text>
                        <MaskInput value={numero} style={styles.input} keyboardType="numeric" onChangeText={text => setNumero(text)} 
                                   mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} >
                        </MaskInput>
                    </View>
                    
                    <TouchableOpacity style={styles.botao} onPress={() => {escreverArquivo(nome, numero)}}>
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};