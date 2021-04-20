import React, { useState, useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, Pressable } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
// @material-ui/core




export default function QuestionScreen({ navigation }) {
    const [currentChoice, setCurrentChoice] = useState(null)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image
                        style={styles.backButton}
                        source={require('../../asset/backButton.png')}
                    />
                </TouchableOpacity>

                <Image
                    style={styles.plantosiaLogo}
                    source={require('../../asset/PlantosiaLogo2.png')}
                />

            </View>
            <View style={styles.greenArea}>

                <Text style={styles.text} >เลือกระดับความยากของเกม</Text>
                <View style={styles.choice}>
                    <Pressable style={currentChoice == 'easy' ? styles.easyContainerPicked : styles.easyContainer} onPress={() => {
                        setCurrentChoice('easy')
                        setStateAnswer({ plantName: stateAnswer.plantName, difficulty: 'easy' })

                    }}  >
                        <Text style={styles.easyText}>ง่าย</Text>

                    </Pressable>

                    <Pressable style={currentChoice == 'hard' ? styles.hardContainerPicked : styles.hardContainer} onPress={() => {
                        setCurrentChoice('hard')
                        setStateAnswer({ plantName: stateAnswer.plantName, difficulty: 'hard' })
                    }} >
                        <Text style={styles.hardText} >ยาก</Text>

                    </Pressable>

                    <Text>{currentChoice}</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    setStateQuestion({ COIN: 0, XP: 0, countCorrectAnswer: 0, userAnswer: [null] })
                    navigation.navigate('Question2')
                }}>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextBig.png')}
                    />
                </TouchableOpacity>
            </View>

        </SafeAreaView >
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
    ThaiName: {
        fontFamily: 'Bai Jamjuree',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 25,
        lineHeight: 30

    },
    choice: {
        marginTop: '10%',
    },
    easyContainer: {
        backgroundColor: '#446CCD',
        borderRadius: 5,
        height: responsiveScreenHeight(8), // 50% of Screen height,
        width: responsiveScreenWidth(65) // 50% of Screen width
    },
    easyContainerPicked: {
        opacity: 0.4,
        backgroundColor: '#446CCD',
        borderRadius: 5,
        height: responsiveScreenHeight(8), // 50% of Screen height,
        width: responsiveScreenWidth(65) // 50% of Screen width
    },
    easyText: {
        textAlign: 'center',
        marginTop: '7%',
        color: 'white',
        fontSize: responsiveScreenFontSize(2.5)
    },

    hardContainer: {
        backgroundColor: '#EB5757',
        borderRadius: 5,
        height: responsiveScreenHeight(8), // 50% of Screen height,
        width: responsiveScreenWidth(65), // 50% of Screen width
        marginTop: '3%'
    },
    hardContainerPicked: {
        opacity: 0.4,
        backgroundColor: '#EB5757',
        borderRadius: 5,
        height: responsiveScreenHeight(8), // 50% of Screen height,
        width: responsiveScreenWidth(65), // 50% of Screen width
        marginTop: '3%'
    },
    hardText: {
        textAlign: 'center',
        marginTop: '7%',
        color: 'white',
        fontSize: responsiveScreenFontSize(2.5)
    },
    EnglishName: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 30,
        marginTop: '6%'
    },
    text: {
        // marginTop: '45%',
        fontWeight: '700',
        fontSize: 27
    },
    button: {
        marginTop: '4%',
        height: responsiveScreenHeight(10), // 50% of Screen height,
        width: responsiveScreenWidth(60), // 50% of Screen width

        // width: 280,
        // height: 80
    },
    similarity: {
        fontFamily: 'Bai Jamjuree',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 30
    },
    similarColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 29
    },
    percentage: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: 45,
        color: '#87D38A'
    },
    ImageDetail: {
        // display: 'flex'
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    top: {
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        marginBottom: '3%',
        display: 'flex',
    },
    plantosiaLogo: {
        marginTop: '1%',

        marginRight: '5%'
        // height: responsiveScreenHeight(6.5), // 50% of Screen height
        // width: responsiveScreenWidth(58), // 50% of Screen width

    },
    backButton: {
        right: 90,
        marginRight: '-4%'
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
        justifyContent: 'center'

    },
    box: {
        marginTop: '20%',
        // marginBottom: '9%',
        width: 300,
        height: 75,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -47

    },
    box2: {
        marginTop: '5%',
        // marginBottom: '9%',
        width: 333,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        // top: -47
    },
    msg: {
        textAlign: 'center',
        fontWeight: '700',
        padding: 25,
        fontSize: 27,

    },
    msg2: {

        textAlign: 'center',
        fontWeight: '700',
        padding: 15,
        fontSize: 25,
    },
    mascot: {
        marginTop: '36%'
    },
    nextButton: {
        marginTop: '3%',
        // left: 120,
        // position: 'absolute',
        // top: 75,
        // left: 70,

    },
    leaf: {
        top: -20,
        zIndex: 10,
        width: 50,
        height: 50,
    },
    cameraArea: {
        marginTop: '10%',
        marginBottom: '10%'
    }
});