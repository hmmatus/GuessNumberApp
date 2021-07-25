/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

const Card = ({children, style}) => {
  return <View style={{...styles.card, ...style}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
});

export default Card;
