import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// Shared
import Colors from '../constants/colors';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});
export default NumberContainer;
