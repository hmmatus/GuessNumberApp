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

const GameOverScreen = ({}) => {


  return (
    <View>
      <Text>Game Over</Text>
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
