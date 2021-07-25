/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
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

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({userChoice, onGameOver}) => {
  const [currentguess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentguess < userChoice) || (direction === 'greater' && currentguess > userChoice)) {
      Alert.alert('Don\'t lie!', 'You know  that this is wrong...', [{text: 'Sorry', style: 'cancel'}]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentguess;
    } else {
      currentLow.current = currentguess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentguess);
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);
  };

  useEffect(() => {
    if (currentguess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentguess, onGameOver, rounds, userChoice]);

  return (
    <View style={styles.screen}>
      <Text>Oponents Guess</Text>
      <NumberContainer>{currentguess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')}/>
        <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;

