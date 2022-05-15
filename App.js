// Created by Tarin Cheewakarn

/*
* This is a prototype that test the functionality of react native stack navigation to transition between screens
* and the ability to write a document from the state variable to cloud data (firestore)
*
* There are two screens in this test, the first one is the Home Screen that display a button that navigate to the
* second screen, "AddPointScreen". The add point screen will get the phone number and the total cost and
* convert it into points. This three value will be written in the cloud database
* */
import React from 'react';
import HomeScreen from './src/HomeScreen';
import AddPointScreen from './src/AddPointScreen'
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {NavigationContainer} from "@react-navigation/native";


/*
* The function app defines the stack of the screen. Home screen will be showed first, and checkpoint screen respectively.
* */
const Stack = createNativeStackNavigator();

function App(){
        return(
            <NavigationContainer>
                    <Stack.Navigator>
                            <Stack.Screen name = "Home" component = {HomeScreen}/>
                            <Stack.Screen name = "AddPoint" component = {AddPointScreen}/>
                    </Stack.Navigator>
            </NavigationContainer>
        );
}


export default App;