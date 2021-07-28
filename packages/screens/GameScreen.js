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
  ScrollView,
} from 'react-native';

// Shared
import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
import BodyText from '../components/typograpy/BodyText';

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

 const renderListItem = (value, numberOfRounds) => {
return (
  <View key={value} style={styles.listItem}>
    <BodyText>#{numberOfRounds}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);};

const GameScreen = ({userChoice, onGameOver}) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentguess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

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
      currentLow.current = currentguess + 1;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentguess);
    setCurrentGuess(nextNumber);
    setPastGuesses(previusGuess => [nextNumber,...previusGuess]);
  };

  useEffect(() => {
    if (currentguess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentguess, onGameOver, pastGuesses, userChoice]);

  return (
    <View style={styles.screen}>
      <Text>Oponents Guess</Text>
      <NumberContainer>{currentguess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>LOWER</MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>GREATER</MainButton>
      </Card>
      <View style={styles.list}>
        <ScrollView>
          {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
        </ScrollView>
      </View>
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
  list: {
    flex: 1,
    width: '80%',
  },
  listItem: {
    borderColor: '#ccc',
    padding: 15,
    borderWidth: 1,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default GameScreen;

