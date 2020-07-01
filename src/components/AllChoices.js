//import react, react-native
import React from 'react';
import {View,FlatList, Text} from "react-native";

//other import Mystyles from Myjunipertextstyles
import Mystyles from "./MyJuniperTextStyles";

const AllChoices = ({IAChoices, userChoices}) => {

    return(

        <View style={Mystyles.ArrayChoices}>

            <View style={Mystyles.ColumnAllChoices}>
                <Text>Vos choix:</Text>
                {userChoices.length > 0 && <FlatList
                    data = {[...userChoices]} renderItem = {({item}) =>
                    <Text>{item}</Text> }
                    keyExtractor={index => index.toString()}
                />}
            </View>

            <View style={Mystyles.ColumnAllChoices}>

                <Text>Choix du computer :</Text>
                {IAChoices.length > 0 && <FlatList
                    data={[...IAChoices]} renderItem={({item}) =>
                    <Text>{item}</Text> }
                    keyExtractor={index => index.toString()}
                />}
            </View>
        </View>
    )};

export default AllChoices;