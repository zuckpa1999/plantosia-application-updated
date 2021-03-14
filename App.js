import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
import GameScreen6 from './components/Game/GameScreen6.js'
import GameScreen7 from './components/Game/GameScreen7.js'
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

export default function App() {
  const Stack = createStackNavigator();
  return (

    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Game2" component={GameScreen2} />
        <Stack.Screen name="Game3" component={GameScreen3} />
        <Stack.Screen name="Game4" component={GameScreen4} />
        <Stack.Screen name="Game5" component={GameScreen5} />
        <Stack.Screen name="Game6" component={GameScreen6} />
        <Stack.Screen name="Game7" component={GameScreen7} />
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
