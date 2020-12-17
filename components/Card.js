import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Card({cardItem, pressHandler, pressChanger}) {


  return (
    <View>
      <TouchableOpacity
        testID="button"
        onLongPress={() => pressHandler(cardItem.key)}
        onPress={()=>pressChanger(cardItem.key)}
        style={cardItem.isDone ? styles.buttongreen : styles.buttonred}>
        <Text style={cardItem.isDone ? styles.textcomplete : styles.textnocomplete}>
          {cardItem.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
  textnocomplete: {
    color: 'white',
    fontSize: 15,
  },
  textcomplete: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: "solid",
    textDecorationColor:"red",
  },
  buttonred: {
    backgroundColor: 'darkred',
    borderRadius: 8,
    padding: 8,
    margin: 5,
  },
  buttongreen: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 8,
    margin: 5,
  },
});
