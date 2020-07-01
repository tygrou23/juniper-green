// import react, react-redux, redux, and redux-thunk
import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import createStacknavigation and navigationcontainer for navigation in this projet
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

//import safeareaprovider for mobile screen 
import {SafeAreaProvider} from "react-native-safe-area-context";

//import all screens
import HomeScreen from "./src/screens/Home";
import RulesScreen from "./src/screens/Rules";
import GameScreen from "./src/screens/Game";
import ScoreScreen from "./src/screens/Scores";

//import reducer (to combinereducers)
import reducer from './src/reducers/index';

//other import from script color
import Color from "./AllColor";

const store = createStore(reducer, applyMiddleware(thunk));

const Nav = () => {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home" screenOptions={
                    {
                    //set the header of projet into a light color
                    headerStyle: {backgroundColor: Color.lightgrey,}
                    }
                }>
                
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Rules" component={RulesScreen} />
                
                <Stack.Screen name="Score" component={ScoreScreen} />
                <Stack.Screen name="Game" component={GameScreen} />

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




