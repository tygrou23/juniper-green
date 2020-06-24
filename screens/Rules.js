import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';


const RulesScreen = ({ navigation }) => {

    //const [state, dispatch ] = useContext(SchoolContext);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>RULES Screen</Text>
  
        <Button title="Go back..." onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  export default RulesScreen;