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
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
export default function QuestionScreen8({ navigation }) {
    /*   const [stateQuestion, setStateQuestion] = useState({ XP: 0, COIN: 0, countCorrectAnswer: 0, userAnswer: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] }); */
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    // assumer we get props
    let index = 6
    let answerToQuestion = questions.easy[index].answers
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

    let confirm = () => {

        // if  pickedChoice  = coroect answer answer
        //  answer = true /false
        /*    alert(stateQuestion.userAnswer[0])
           alert(answerToQuestion) */
        /* answer = stateQuestion.userAnswer[0] === answerToQuestion ? true : false */
        if (stateQuestion.userAnswer[0] === answerToQuestion) {
            setAnswer(true)

            setStateQuestion({ COIN: stateQuestion.COIN + 20, XP: stateQuestion.XP + 50, countCorrectAnswer: stateQuestion.countCorrectAnswer + 1, userAnswer: stateQuestion.userAnswer })
        }
        else {
            setAnswer(false)

            setStateQuestion({ COIN: stateQuestion.COIN + 5, XP: stateQuestion.XP + 30, countCorrectAnswer: stateQuestion.countCorrectAnswer, userAnswer: stateQuestion.userAnswer })
        }

        setModalVisible(true)

    }
    return (
        <SafeAreaView style={styles.container}>


            <TemplateTop navigation={navigation} />
            {/*     QuestionScreen2 ---> 0,  */}
            <View style={styles.greenArea}>

                <TemplateQuestion index={index} />


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been clou6u6sed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image

                                style={answer ? { marginTop: '-42%', width: 375, height: 135 } : { marginTop: '-42%', width: 375, height: 115 }}
                                source={banner}


                            />

                            <Image

                                style={answer ? { width: 150, height: 90 } : { width: 130, height: 92 }}
                                source={mascot}
                            />

                            <View style={{ backgroundColor: 'white', width: responsiveScreenWidth(40), height: responsiveScreenHeight(7), borderRadius: 30, borderColor: '#099846', borderWidth: 4, marginTop: '3%', paddingTop: '6%' }}>
                                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700', marginBottom: '11%' }}> <Image style={styles.image} source={require('../../asset/dollar_2.png')} /> + 20</Text>


                            </View>

                            <View style={{ backgroundColor: 'white', width: responsiveScreenWidth(40), height: responsiveScreenHeight(7), borderRadius: 30, borderColor: '#099846', borderWidth: 4, marginTop: '3%', paddingTop: '5%' }}>

                                <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: '700', marginBottom: '11%' }}> XP + 50</Text>

                            </View>
                            <Text>XP :{stateQuestion.XP}</Text>
                            <Text>COIN:{stateQuestion.COIN}</Text>
                            <TouchableOpacity style={styles.solutionContainer} onPress={() => {
                                setModalVisible(!modalVisible)
                                navigation.navigate('Solution8')
                            }}>
                                <Text style={styles.solutionButton}>เฉลย</Text>
                            </TouchableOpacity>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >

                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={styles.confirmButtonContainer}
                    onPress={() => confirm()}
                >
                    <Text style={styles.confirmButton}>Confirm</Text>
                </Pressable>

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



});