import React from 'react';
import { StyleSheet, Text, Button, View, Pressable } from 'react-native';

const FloatingButton = ({toggle, isFormVisible}) => {


    return (
        <Pressable onPress={toggle} style={styles.button}>
            <Text style={styles.txt}>{isFormVisible? "x" : "+"}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        right: 20,
        top: 500,
        padding: 20,
        backgroundColor: "mediumpurple",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
      },
      txt: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
      }
})
 
export default FloatingButton;