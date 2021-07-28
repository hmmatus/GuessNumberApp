/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TitleText = ({style, children}) => {
  return <Text style={{...styles.text, ...style}}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TitleText;
