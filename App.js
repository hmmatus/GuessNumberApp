import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

//Shared
import Header from './packages/components/Header';
import StartGameScreen from './packages/screens/StartGameScreen';
import GameScreen from './packages/screens/GameScreen';
import GameOverScreen from './packages/screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./packages/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./packages/assets/fonts/OpenSans-Bold.ttf'),
  });
};

const App = ({}) => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={err => console.log(err)}
  //     />
  //   );
  // }

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
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
