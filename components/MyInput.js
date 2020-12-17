import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

function MyInput({submitHandler}) {
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
  };
  const setHandler = () => {
    submitHandler(text);
    setText('');
  };
  return (
    <View style={styles.textint}>
      <TextInput
        testID="input"
        style={styles.input}
        placeholder="What is it your desire? "
        onChangeText={changeHandler}
        value={text}
      />
      <Button title="ADD" testID="button" onPress={setHandler} color="silver" />
        
      
    </View>
  );
}
export default MyInput;
const styles = StyleSheet.create({
  textint: {
    padding: 8,
    justifyContent: 'flex-end',
    backgroundColor: 'grey',
    borderRadius: 8,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
  },
});
