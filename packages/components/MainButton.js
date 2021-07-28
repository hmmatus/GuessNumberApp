/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constants/colors';

const MainButton = ({children, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default MainButton;
