/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const BodyText = ({style, children}) => (
  <Text style={{...styles.text, ...style}}>{children}</Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default BodyText;
