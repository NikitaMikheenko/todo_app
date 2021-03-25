import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        
        height: 70,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 17,
        color: '#fff',
        fontSize: 17
    }
});