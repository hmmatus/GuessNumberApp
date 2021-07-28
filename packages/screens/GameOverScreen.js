/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
} from 'react-native';

// Shared
import Colors from '../constants/colors';
import TitleText from '../components/typograpy/TitleText';
import BodyText from '../components/typograpy/BodyText';

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {


  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')}/>
      </View>
      <BodyText>Number of rounds: <Text style={styles.specialText}>{roundsNumber}</Text></BodyText>
      <BodyText> User Number <Text style={styles.specialText}>{userNumber}</Text></BodyText>
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
  specialText: {
    color: Colors.accent,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
