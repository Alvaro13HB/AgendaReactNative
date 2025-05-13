import React from "react";
import styles from "./style";
import { View, Image, TouchableOpacity } from "react-native";

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
