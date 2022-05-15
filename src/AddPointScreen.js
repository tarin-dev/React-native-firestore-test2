// Created by Tarin Cheewakarn


import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableHighlight,
    KeyboardAvoidingView,
    TextInput,
    Button, Alert,
} from 'react-native';

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    addDoc,
} from 'firebase/firestore';



/*
* Add Point Screen show the input boxes to get the information and store into states
* Purpose: Add new document to the cloud database
* */
const AddPointScreen  = ( {navigation}) => {


    //cloud database configuration
    const firebaseConfig = initializeApp({
        apiKey: "AIzaSyDmlRIm7z_F_ZXxlh2JV0bukYa-_cBJnBk",
        authDomain: "mclerks-beta.firebaseapp.com",
        projectId: "mclerks-beta",
        storageBucket: "mclerks-beta.appspot.com",
        messagingSenderId: "530710846605",
        appId: "1:530710846605:web:66c420bec4de5f302296c4",
        measurementId: "G-KF53B2F8VR"
    });

    const firestore = getFirestore();


    //useState to hold the values
    const [phoneNumber, setPhoneNumber] = useState("");
    const [cost, setCost] = useState(0);
    const [point, setPoint] = useState(0);


    //convert the total cost to point
    //assume every $100 = 1 point
    function costToPoint()  {
        const temp = Math.floor(cost/100);
        setPoint(temp);
    }


    //Add new document to the cloud database
    //after added the data, reset the state
    async function addData(){
        costToPoint();

        const newDoc = await addDoc( collection(firestore, 'users'),{
            phoneNumber: {phoneNumber},
            cost: {cost},
            point: {point},
        });


        //reset value of the state
        setPhoneNumber("");
        setPoint(0)
        setCost(0);
    }



    return(
        <SafeAreaView style = {styles.container}>
            <KeyboardAvoidingView behavior = {"position"}>


            <View>
                <Text> Phone Number </Text>
                <TextInput
                    style = {styles.input}
                    placeHolder = "Phone Number"
                    onChangeText = { setPhoneNumber}
                    value = {phoneNumber}
                 />
            </View>



            <View>
                <Text> Total cost</Text>
                <TextInput
                    style = {styles.input}
                    placeHolder = "Total cost"
                    onChangeText = {setCost}
                    value = {cost}
                />
            </View>



            <Button
                onPress = { () => addData()}
                title = "Submit"

            />

            </KeyboardAvoidingView>
        </SafeAreaView>

    );
}

export default AddPointScreen;



const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },


        button: {
            marginBottom: 40,
            width: '100%',
            height: 75,
            alignItems: 'center',
            backgroundColor: '#5ead97',
        },

        buttonText: {
            padding: 20,
            color: 'white',
            fontSize: 20,
        },

        input: {
            height: 40,
            width: 300,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }



    });

