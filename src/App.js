import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import MyInput from '../components/MyInput';
import Card from '../components/Card';
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

function App() {
  const [todo, setTodo] = useState([]);
  const pressChanger=(key)=>{
    setTodo(todo.map(item=>item.key===key?{...item, isDone: !item.isDone}:item))
  }
  const pressHandler = (key) => {
    setTodo((prev) => {
      return prev.filter((todos) => todos.key !== key);
    });
  };
  const submitHandler = (text) => {
    if (text === '') {
      return;
    } else {
      setTodo((prev) => {
        return [{text: text, key: Math.random().toString(),isDone:false }, ...prev];
      });
    }
  };
  const renderCard = ({item}) => (
    <Card pressHandler={pressHandler} cardItem={item} pressChanger={pressChanger}/>
  );

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.title}>TODO</Text>
        <Text style={styles.title2}> {todo.filter(i=>i.isDone===false).length} </Text>
      </View>

      <FlatList testID="list" keyExtractor={(item, index) => index} data={todo} renderItem={renderCard} />

      <MyInput submitHandler={submitHandler} />
    </View>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    flex: 1,
    color: 'darkred',
    fontSize: 25,
  },
  title2: {
    color: 'darkred',
    fontSize: 25,
  },
});
