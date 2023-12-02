import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const CounterTask = ({title, nbr}) => {
    return ( 
        <View>
            <Text style={styles.nb}> {nbr} </Text>
            <Text style={styles.title}> {title} </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    nb:{
        fontWeight: "bold",
        fontSize: 20,
    },
    title:{
        fontWeight: "bold",
        fontSize: 16, 
        color: "white",
    }
});

export default CounterTask;
