import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import questions from '../../config/questions.json'
export default function templateQuestion(props, { parentCallback }) {
    let imageQuestion = questions.easy[props.index].image
    let indexQuestion = questions.easy[props.index].id
    let numQuestion = questions.easy.length
    let question = questions.easy[props.index].question
    let configQuestion = questions.easy[props.index].choices

    // let selectThisChoice = (value) => {
    //     setAnswer(value)
    // }
    // let sendBack = (x) => {
    //     if (props.parentCallback) {


    //         props.parentCallback(x)
    //     }
    // }
    return (
        <View style={styles.overAll}>
            <View style={styles.banner} >
                <View></View>
                <Text style={{
                    textAlign: 'center', fontSize: 23, fontWeight: '600', marginLeft: '9%'
                }}>Questions {indexQuestion} / {numQuestion}</Text>
                < TouchableOpacity >
                    <Image
                        style={{ width: 50, height: 50, marginBottom: "100%", marginLeft: '-3%' }}
                        source={require('../../asset/searchButton.png')}
                    />
                </TouchableOpacity>
            </View>

            <Image
                style={{ marginTop: '2%' }}

                source={require('../../asset/imgQuestion1.png')}
            />

            <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>{question}</Text>
            <View style={styles.questionFooter}>
                {Object.keys(configQuestion).map((key) => (
                    // onPress={() => selectThisChoice(configQuestion[key])}
                    <TouchableOpacity style={styles.choiceContainer} onPress={() => parentCallback(configQuestion[key])}>
                        <Text key={key} style={styles.choiceOption}>{configQuestion[key]}</Text>
                    </TouchableOpacity>
                ))}

            </View>
        </View>
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
    questionFooter: {
        marginTop: '6%',
        flexDirection: 'row',
        flexWrap: 'wrap',


    },
    choiceOption: {
        textAlign: 'center',
        // flexDirection: 'column',
        // alignItems: 'flex-end'
        marginTop: '17%',
        fontWeight: '600',
        fontSize: 18,
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