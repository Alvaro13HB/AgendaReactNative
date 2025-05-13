import React from "react";
import styles from "./style";
import { Text, View } from "react-native";

export function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.header_text}>Agenda de Contatos</Text>
        </View>
    );
};

