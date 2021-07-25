import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

//Shared
import Header from './packages/components/Header';
import StartGameScreen from './packages/screens/StartGameScreen';
import GameScreen from './packages/screens/GameScreen';
import GameOverScreen from './packages/screens/GameOverScreen';

const App = ({}) => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
