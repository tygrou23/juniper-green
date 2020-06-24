import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';


const RulesScreen = ({ navigation }) => {

    //const [state, dispatch ] = useContext(SchoolContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Règle du jeu Juniper Green</Text>
  
        <Button title="Revenir sur la page principale" onPress={() => navigation.navigate('Home')} />

        <Text>Le jeu possède trois règles : </Text>
        <Text>Le Joueur 1 choisit un nombre entre 1 et 100.
                A tour de rôle, chaque joueur doit choisir un nombre parmi
                les multiples ou les diviseurs du nombre choisi précédement
                par son adversaire et inférieur à 100. </Text>
        <Text>Un nombre ne peut être joué qu'une seule fois. </Text>
        <Text>Le perdant étant le joueur qui ne trouve plus de multiples
                ou de diviseurs communs au nombre précédement choisi. </Text>
      </View>
    );
  }

  export default RulesScreen;