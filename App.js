import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';
import { TodoForm } from './src/TodoForm';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (title) => {
    setTodoList(prevTodoList => [
      ...prevTodoList, {
        id: Date.now().toString(),
        title
      }
    ]);
  };

  const removeTodo = (id) => {
    setTodoList(prevTodoList =>
      prevTodoList.filter(todo => todo.id != id)
    )
  };

  return (
    <View style={styles.container}>
      <Navbar title={'My Todo App'} />
      <TodoForm onSubmit={addTodo} />
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} />
        )}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
});
