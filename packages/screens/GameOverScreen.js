/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

// Shared
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {


  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text> User Number {userNumber}</Text>
      <Button title="New Game" onPress={onRestart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
