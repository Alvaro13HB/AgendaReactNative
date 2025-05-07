import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { ComponentHeader, ComponentFooter, ComponentContato } from "./components";

const windowsHeight = Dimensions.get('window').height;

export default function App (){
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

const styles = StyleSheet.create({

    container: {
        margin: 0,
        padding: 0,
        backgroundColor: "#2c2f33",
        display: "flex",
        height: windowsHeight - 140,
    }
});