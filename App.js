import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import RulesScreen from './screens/Rules.js';
import GameScreen from './screens/Game.js';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Bienvenue voici le Jeu Juniper Green </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Rules')}>
          <Text style={styles.btnNav}>Les règles du jeu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Game')}>
          <Text style={styles.btnNav}>Commencer une partie</Text>
        </TouchableOpacity>
      </View>
    </>
  )
    ;
}

const Stack = createStackNavigator();

const Nav = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rules" component={RulesScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <>
    
    <Nav />
  </>
);

export default App;
