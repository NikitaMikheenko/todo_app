import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const TodoForm = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                autoCapitalize={'none'}
                autoCorrect={false}
                onChangeText={setValue}
                value={value}
                placeholder={'Your todo'}
            />
            <Button
                style={styles.button}
                onPress={pressHandler}
                title={'Add'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
        width: '80%'
    },
    button: {
        width: '20%'
    }
});