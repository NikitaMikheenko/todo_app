import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.4}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.container}>
                <Text>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        marginRight: 20,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'grey'
    }
});