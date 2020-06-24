import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import RulesScreen from './screens/Rules.js';
import StartScreen from './screens/Start';

import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>home page</Text>
        <Text>Bienvenue voici le Jeu Juniper Green </Text>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Rules')}>
          <Text style={styles.btnNav}>Les règles du jeu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Start')}>
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
        <Stack.Screen name="Start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => (
  <SchoolProvider>
    <Nav />
  </SchoolProvider>
);

export default App;
