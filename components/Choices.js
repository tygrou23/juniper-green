import React from 'react';
import styles from "./JuniperTextStyles";
import {View,FlatList, Text} from "react-native";

const Choices = ({computerChoices, playerChoices}) => {

    return(
        <View style={styles.choicesArray}>
            <View style={styles.choicesColumn}>
                <Text>Vos choix:</Text>
                {playerChoices.length > 0 &&
                <FlatList
                    data = {[...playerChoices]}
                    renderItem = {({item}) =>
                        <Text>{item}</Text>
                    }
                    keyExtractor={index => index.toString()}
                />}
            </View>
            <View style={styles.choicesColumn}>
                <Text>Choix du computer :</Text>
                {computerChoices.length > 0 &&
                <FlatList
                    data={[...computerChoices]}
                    renderItem={({item}) =>
                        <Text>{item}</Text>
                    }
                    keyExtractor={index => index.toString()}
                />
                }
            </View>
        </View>
    )

};

export default Choices