import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import thunk from 'redux-thunk';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./src/screens/Home";
import RulesScreen from "./src/screens/Rules";
import GameScreen from "./src/screens/Game";
import ScoreScreen from "./src/screens/Scores";
import Colors from "./Colors";
import {SafeAreaProvider} from "react-native-safe-area-context";

const store = createStore(reducer, applyMiddleware(thunk));

const Nav = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={
                    {
                    headerStyle: {
                            backgroundColor: Colors.light,
                        }
                    }
                }
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Rules" component={RulesScreen} />
                <Stack.Screen name="Game" component={GameScreen} />
                <Stack.Screen name="Score" component={ScoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default function App() {
  return (
      <SafeAreaProvider>
      <Provider store={store}>

          <Nav/>

      </Provider>
      </SafeAreaProvider>
  );
}




