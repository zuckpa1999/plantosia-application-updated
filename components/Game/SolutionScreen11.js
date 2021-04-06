import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, Alert, Modal, Pressable } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import questions from '../../config/questions.json'
import TemplateQuestion from './templateQuestion.js'
import TemplateTop from './templateTop.js'
import TemplateAnswerScreen from './templateAnswer.js'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
//+1
export default function SolutionScreen11({ navigation }) {
    /*   const [stateQuestion, setStateQuestion] = useState({ XP: 0, COIN: 0, countCorrectAnswer: 0, userAnswer: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] }); */
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    // assumer we get props
    //+1
    let answerToQuestion = questions.easy[9].answers
    /* let answer */
    const [answer, setAnswer] = useState(false)
    // 2 version 
    //if props.answer : true ? boolean
    // need global variable to store coin and XP **
    // right answer banner1 , mascot1, coin + 5, XP + 30
    // wrong answer, banner 2, mascot 2, coin + 20, XP + 50
    const [modalVisible, setModalVisible] = useState(false);
    const bannerRight = require('../../asset/ปกถูก.png')
    const bannerWrong = require('../../asset/ปกผิด.png')
    const mascotRight = require('../../asset/ตอบถูก.png')
    const mascotWrong = require('../../asset/ตอบผิด.png')
    //
    let banner = answer ? bannerRight : bannerWrong
    let mascot = answer ? mascotRight : mascotWrong

    // GlobalStateUserQuestion
    //    store - userAnswer (string of the choice), userResult(correct, incorrect)
    //
    // f

    return (
        <SafeAreaView style={styles.container}>


            <TemplateTop navigation={navigation} />

            {/*     QuestionScreen2 ---> 0,  */}
            <View style={styles.greenArea}>



                {/*  <TouchableOpacity style={styles.confirmButtonContainer} onPress={() => navigation.navigate('Question3')}>
                    <Text style={styles.confirmButton}>Confirm</Text>
                </TouchableOpacity> */}
                {/* +1 */}
                <TemplateAnswerScreen index={9} />
                <Text>fe</Text>
                {/* +1 */}
                <TouchableOpacity onPress={() => navigation.navigate('Question12')}>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextButton.png')}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

    },
    confirmButtonContainer: {
        backgroundColor: '#099846',
        borderRadius: 10,
        height: responsiveScreenHeight(4), // 50% of Screen height,
        width: responsiveScreenWidth(24),// 50% of Screen width
        alignSelf: 'flex-end',
        marginRight: '4%',
        marginTop: '15%'

    },
    confirmButton: {
        textAlign: 'center',
        marginTop: '7%',
        color: 'white',
        fontWeight: '800'
    },
    greenArea: {

        backgroundColor: '#94F098',
        // width: 385,
        // height: 740,
        height: responsiveScreenHeight(85), // 50% of Screen height
        width: responsiveScreenWidth(91), // 50% of Screen width
        borderRadius: 20,
        // top: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        height: responsiveScreenHeight(50), // 50% of Screen height
        width: responsiveScreenWidth(73), // 50% of Screen width
        borderWidth: 8,
        borderColor: 'white',
        elevation: 5,
        backgroundColor: '#94F098'

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    solutionButton: {
        textAlign: 'center',
        // marginTop: '7%',
        color: 'white',
        fontWeight: '800',
        fontSize: 30
    },
    solutionContainer: {
        backgroundColor: '#099846',
        borderRadius: 10,
        height: responsiveScreenHeight(5), // 50% of Screen height,
        width: responsiveScreenWidth(38),// 50% of Screen width


        marginTop: '15%'
    },
    nextButton: {

        left: 120,
        top: -70
    }



});