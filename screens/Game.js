import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';


const GameScreen = ({ navigation }) => {

    //const [state, dispatch ] = useContext(SchoolContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Game Juniper Green</Text>
  
        <Button title="Revenir sur la page principale" onPress={() => navigation.navigate('Home')} />
        <Button title="Les règles du jeu" onPress={() => navigation.navigate('Rules')} />
        <Button title="Reset" onPress={() => navigation.navigate('')} />
        <Text>C'est à vous !</Text>
        <Text>Computer : 97</Text>
        <Text>Votre choix : [  ]</Text>
        <Button title="Valider" onPress={() => navigation.navigate('')} />

        <ul> Vos choix :
          <p>22</p>
          <p>2</p>
          <p>1</p>
        </ul>
        <ul> Choix du computer :
          <p>11</p>
          <p>10</p>
          <p>17</p>
        </ul>
      </View>
    );
  }

  export default GameScreen;