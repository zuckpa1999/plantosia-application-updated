import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen'
import GameScreen from './components/Game/GameScreen.js'
import TestScreen from './components/Game/TestScreen.js'
import GameScreen2 from './components/Game/GameScreen2.js'
import GameScreen3 from './components/Game/GameScreen3.js'
import GameScreen4 from './components/Game/GameScreen4.js'
import GameScreen5 from './components/Game/GameScreen5.js'
import GameScreen5_2 from './components/Game/GameScreen5_2.js'
import GameScreen6 from './components/Game/GameScreen6.js'
import GameScreen7 from './components/Game/GameScreen7.js'
import GameScreen7_2 from './components/Game/GameScreen7_2.js'
import QuestionScreen from './components/Game/QuestionScreen.js'
import QuestionScreen2 from './components/Game/QuestionScreen2.js'
import QuestionScreen3 from './components/Game/QuestionScreen3.js'
import QuestionScreen4 from './components/Game/QuestionScreen4.js'
import QuestionScreen5 from './components/Game/QuestionScreen5.js'
import QuestionScreen6 from './components/Game/QuestionScreen6.js'
import QuestionScreen7 from './components/Game/QuestionScreen7.js'
import QuestionScreen8 from './components/Game/QuestionScreen8.js'
import QuestionScreen9 from './components/Game/QuestionScreen9.js'
import QuestionScreen10 from './components/Game/QuestionScreen10.js'
import QuestionScreen11 from './components/Game/QuestionScreen11.js'
import SolutionScreen2 from './components/Game/SolutionScreen2.js'
import SolutionScreen3 from './components/Game/SolutionScreen3.js'
import SolutionScreen4 from './components/Game/SolutionScreen4.js'
import SolutionScreen5 from './components/Game/SolutionScreen5.js'
import SolutionScreen6 from './components/Game/SolutionScreen6.js'
import SolutionScreen7 from './components/Game/SolutionScreen7.js'
import SolutionScreen8 from './components/Game/SolutionScreen8.js'
import SolutionScreen9 from './components/Game/SolutionScreen9.js'
import SolutionScreen10 from './components/Game/SolutionScreen10.js'
import SolutionScreen11 from './components/Game/SolutionScreen11.js'
import QuestionScreen12 from './components/Game/QuestionScreen12.js'
import QuestionScreen13 from './components/Game/QuestionScreen13.js'
import TextSearchScreen from './components/TextSearch/TextSearchScreen.js'
import ImageSearchScreen from './components/ImageSearch/ImageSearchScreen.js'
import ImageSearchScreen2 from './components/ImageSearch/ImageSearchScreen2.js'
import ImageSearchScreen3 from './components/ImageSearch/ImageSearchScreen3.js'
import ImageSearchScreen4 from './components/ImageSearch/ImageSearchScreen4.js'
import ImageSearchScreen5 from './components/ImageSearch/ImageSearchScreen5.js'
import PlantGardenScreen from './components/PlantGarden/PlantGardenScreen.js'
import SettingScreen from './components/Setting/SettingScreen.js'
import GlobalStateUserImage from './contexts/GlobalStateUserImage.js'
import GlobalStateUserQuestion from './contexts/GlobalStateUserQuestion.js'
import GlobalStateImageSearch from './contexts/GlobalStateImageSearch.js'
export default function App() {
  const Stack = createStackNavigator();
  const [stateImage, setStateImage] = useState([]);
  const [statePic, setPicstatePic] = useState(null);
  const [stateQuestion, setStateQuestion] = useState({ XP: 0, COIN: 0, countCorrectAnswer: 0, userAnswer: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] });
  return (

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <GlobalStateImageSearch.Provider value={[statePic, setPicstatePic]}>
      <GlobalStateUserQuestion.Provider value={[stateQuestion, setStateQuestion]}>
        <GlobalStateUserImage.Provider value={[stateImage, setStateImage]}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Game" component={GameScreen} />
              {/* <Stack.Screen name="Test" component={TestScreen} /> */}
              <Stack.Screen name="Game2" component={GameScreen2} />
              <Stack.Screen name="Game3" component={GameScreen3} />
              <Stack.Screen name="Game4" component={GameScreen4} />
              <Stack.Screen name="Game5" component={GameScreen5} />
              <Stack.Screen name="Game5_2" component={GameScreen5_2} />
              <Stack.Screen name="Game6" component={GameScreen6} />
              <Stack.Screen name="Game7" component={GameScreen7} />
              <Stack.Screen name="Game7_2" component={GameScreen7_2} />
              <Stack.Screen name="Question" component={QuestionScreen} />
              <Stack.Screen name="Question2" component={QuestionScreen2} />
              <Stack.Screen name="Question3" component={QuestionScreen3} />
              <Stack.Screen name="Question4" component={QuestionScreen4} />
              <Stack.Screen name="Question5" component={QuestionScreen5} />
              <Stack.Screen name="Question6" component={QuestionScreen6} />
              <Stack.Screen name="Question7" component={QuestionScreen7} />
              <Stack.Screen name="Question8" component={QuestionScreen8} />
              <Stack.Screen name="Question9" component={QuestionScreen9} />
              <Stack.Screen name="Question10" component={QuestionScreen10} />
              <Stack.Screen name="Question11" component={QuestionScreen11} />
              <Stack.Screen name="Solution2" component={SolutionScreen2} />
              <Stack.Screen name="Solution3" component={SolutionScreen3} />
              <Stack.Screen name="Solution4" component={SolutionScreen4} />
              <Stack.Screen name="Solution5" component={SolutionScreen5} />
              <Stack.Screen name="Solution6" component={SolutionScreen6} />
              <Stack.Screen name="Solution7" component={SolutionScreen7} />
              <Stack.Screen name="Solution8" component={SolutionScreen8} />
              <Stack.Screen name="Solution9" component={SolutionScreen9} />
              <Stack.Screen name="Solution10" component={SolutionScreen10} />
              <Stack.Screen name="Solution11" component={SolutionScreen11} />
              <Stack.Screen name="Question12" component={QuestionScreen12} />
              <Stack.Screen name="Question13" component={QuestionScreen13} />
              <Stack.Screen name="TextSearch" component={TextSearchScreen} />
              <Stack.Screen name="ImageSearch" component={ImageSearchScreen} />
              <Stack.Screen name="ImageSearch2" component={ImageSearchScreen2} />
              <Stack.Screen name="ImageSearch3" component={ImageSearchScreen3} />
              <Stack.Screen name="ImageSearch4" component={ImageSearchScreen4} />
              <Stack.Screen name="ImageSearch5" component={ImageSearchScreen5} />
              <Stack.Screen name="PlantGarden" component={PlantGardenScreen} />
              <Stack.Screen name="Setting" component={SettingScreen} />

            </Stack.Navigator>
          </NavigationContainer>
        </GlobalStateUserImage.Provider>
      </GlobalStateUserQuestion.Provider>
    </GlobalStateImageSearch.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
