// Created by Tarin Cheewakarn

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    Button,
    KeyboardAvoidingView,

} from 'react-native';
import colors from '../utils/colors';


/*
* Home Screen show a button to transition to AddPoint screen
* Purpose: testing the navigation component
* */
const HomeScreen  = ( {navigation} ) => {

        return(
            <SafeAreaView>
                <KeyboardAvoidingView behavior = {"position"}>


                <View style = {style.container}>
                <TouchableHighlight

                    style = {style.button}
                    underlayColor = {colors.grey}
                    onPress = { () => navigation.navigate('Home')}
                >
                    <View style = {style.container}>
                        <Text style = {style.buttonText}>
                            Add Point
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>



                <View style = {style.container}>
                <TouchableHighlight
                    style = {style.container}
                    underlayColor = {colors.grey}
                    onPress = { () => navigation.navigate('AddPoint')}
                >
                    <View style = {style.container}>
                        <Text style = {style.buttonText}>
                            Add Point
                        </Text>
                    </View>
                </TouchableHighlight>
                </View>


            </KeyboardAvoidingView>
            </SafeAreaView>

    );
}

export default HomeScreen;

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        },

        button: {
            marginBottom: 40,
            width: '70%',
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#5ead97',
        },

        buttonText: {
            padding: 20,
            color: 'white',
            fontSize: 20,
        }



});




