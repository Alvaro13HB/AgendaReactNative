import React from "react";
import { View } from "react-native";
import { ComponentHeader, ComponentFooter, ComponentContato } from "../../components";
import styles from "./style";

export function Home(){
    return (
        <>
            <ComponentHeader />
            <View style={styles.container}>
                <ComponentContato></ComponentContato>
            </View>
            <ComponentFooter />
        </>
    );
};