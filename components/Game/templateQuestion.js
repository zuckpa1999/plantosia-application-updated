import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import questions from '../../config/questions.json'
import { Images } from '../../Images'
import { Images_hard } from '../../Images_hard'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import { Navigation } from '@material-ui/icons';
export default function templateQuestion({ navigation, index, sendDataToParent }) {
    /* let imageQuestion = questions.easy[props.index].image */
    /*     let index = index */

    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const img = stateAnswer.difficulty === 'hard' ? Images_hard[stateAnswer.plantName] : Images[index];
    /*   let indexQuestion = questions.easy[props.index].id
      let numQuestion = questions.easy.length
      let question = questions.easy[props.index].question
      let configQuestion = questions.easy[props.index].choices */
    let plant = "Banana"
    let indexQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].id : questions.easy[index].id
    let numQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName].length : questions.easy.length
    let question = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].question : questions.easy[index].question
    let configQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].choices : questions.easy[index].choices


    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [currentChoice, setCurrentChoice] = useState(null)



    return (
        <View style={styles.overAll}>
            <View style={styles.banner} >
                <View></View>
                <Text style={{
                    textAlign: 'center', fontSize: 23, fontWeight: '600', marginLeft: '9%'
                }}>Questions {indexQuestion} / {numQuestion}</Text>
                < TouchableOpacity onPress={() => navigation.navigate('TextSearch')}>
                    <Image
                        style={{ width: 70, height: 70, marginBottom: "5%", marginLeft: '-5%' }}
                        source={require('../../asset/searchButton.png')}
                    />
                </TouchableOpacity>
            </View>

            <Image
                style={{ marginTop: '2%', height: responsiveScreenHeight(25), width: responsiveScreenWidth(80) }}

                /* source={require('../../asset/imgQuestion1.png')} */

                source={img}
            />

            <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>{question}</Text>
            <View style={styles.questionFooter}>
                {Object.keys(configQuestion).map((key) => (
                    // onPress={() => selectThisChoice(configQuestion[key])}
                    <TouchableOpacity style={currentChoice === configQuestion[key] ? styles.choiceContainer2 : styles.choiceContainer} onPress={() => {
                        setStateQuestion({ COIN: stateQuestion.COIN, XP: stateQuestion.XP, countCorrectAnswer: stateQuestion.countCorrectAnswer, userAnswer: stateQuestion.userAnswer[0] === null ? [configQuestion[key]] : [...stateQuestion.userAnswer, configQuestion[key]] })
                        sendDataToParent(configQuestion[key])
                        setCurrentChoice(configQuestion[key])
                    }}>
                        <Text key={key} style={styles.choiceOption}>{configQuestion[key]}</Text>
                    </TouchableOpacity>
                ))}

            </View>
            {/* <Text>{stateQuestion.userAnswer[index]}</Text> */}
        </View >
    )
}


const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#94F098',
        // display: 'flex',
    },
    image: {
        width: 300, height: 200
    },


    choiceContainer: {
        backgroundColor: '#FCB65F',
        borderRadius: 13,
        borderWidth: 3,
        borderColor: 'white',
        height: responsiveScreenHeight(9), // 50% of Screen height,
        width: responsiveScreenWidth(43),// 50% of Screen width
        margin: '1%'
    },
    choiceContainer2: {
        backgroundColor: 'white',
        borderRadius: 13,
        borderWidth: 3,
        borderColor: '#FCB65F',
        height: responsiveScreenHeight(9), // 50% of Screen height,
        width: responsiveScreenWidth(43),// 50% of Screen width
        margin: '1%'
    },
    questionFooter: {
        marginTop: '6%',
        flexDirection: 'row',
        flexWrap: 'wrap',


    },
    choiceOption: {
        textAlign: 'center',
        // flexDirection: 'column',
        // alignItems: 'flex-end'
        marginTop: '12%',
        fontWeight: '400',
        fontSize: 17,
        padding: 2
    },

    banner: {
        height: responsiveScreenHeight(6), // 50% of Screen height,
        width: responsiveScreenWidth(90), // 50% of Screen width
        backgroundColor: '#FCB65F',
        marginTop: '-2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    overAll: {
        flexDirection: 'column',
        alignItems: 'center',
    }




});