import React from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";
import { NavigationProps } from "../../types";

export function Footer() {
    const navigation = useNavigation<NavigationProps>();
    
    return(
        <View style={styles.footer}>
            <View>
                <TouchableOpacity 
                    style={styles.button1} 
                    onPress={() => navigation.navigate("Home")}
                >
                    <Image 
                        source={require("../../../assets/profile.png")} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity 
                    style={styles.button1} 
                    onPress={() => navigation.navigate("Cadastro")}
                >
                    <Image 
                        source={require("../../../assets/add.png")} 
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};