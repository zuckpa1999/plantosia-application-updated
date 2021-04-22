import React, { useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
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
import { Images } from '../../Images'
import { Images_hard } from '../../Images_hard'
export default function QuestionScreen12({ navigation }) {

    // config file(json), globstateuseranswer, 

    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    let configQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName] : questions.easy
    /* let questionImage = stateAnswer.difficulty === 'hard' ? Images_hard[stateAnswer.plantName] : Images[element.id - 1] */

    let isCorrect = (element) => {
        if (stateAnswer.difficulty === 'hard') {
            if (stateQuestion.userAnswer[element.id - 1] === element.answers) {
                return require('../../asset/Yes.png')
            }
            else {
                return require('../../asset/No.png')
            }
        }
        elif(stateAnswer.difficulty === 'easy')
        {
            alert('bla')
            /* stateQuestion.userAnswer[element.id - 1] === element.answers ? require('../../asset/Yes.png') : require('../../asset/No.png') */
            if (stateQuestion.userAnswer[element.id - 1] === element.answers) {
                alert('if')
                return require('../../asset/Yes.png')

            }
            else {
                alert('else')
                return require('../../asset/No.png')
            }
        }
    }
    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            {/*     QuestionScreen2 ---> 0,  */}
            <View style={styles.greenArea}>
                <View style={styles.banner} >

                    <Text style={{
                        fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: '2%'
                    }}>ผลลัพธ์</Text>

                </View>
                {/*   <Image source={require('../../asset/คะแนนที่ได้.png')}></Image>
                <Text>{stateQuestion.countCorrectAnswer}</Text> */}


                <Image source={require('../../asset/คะแนนที่ได้.png')}></Image>
                <Text style={{ top: '-17%', left: '9%', fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold' }}>คะแนนที่ได้ {"\n"}{stateQuestion.countCorrectAnswer}/10</Text>


                {/*   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Image
                        style={{
                            flex: 1,
                            width: 100,
                            height: 100,
                        }}
                        source={require('../../asset/คะแนนที่ได้.png')}
                    />
                    <Text style={{ position: 'absolute', fontSize: 20 }}>{stateQuestion.countCorrectAnswer}</Text>
                </View> */}

                {/*  <Text>{stateQuestion.COIN}</Text>
                <TouchableOpacity onPress={() => alert(stateQuestion.userAnswer)}><Text>Click me</Text></TouchableOpacity> */}
                <Image
                    style={{ top: -50 }}
                    source={require('../../asset/solutionBanner.png')}
                />
                {/* {configQuestion.map(element => (<Text>{element.id}</Text>))} */}
                {/*    <View>
                    {Object.keys(configQuestion).map((key) => (
                        <Text key={key}>{configQuestion.map(element => (element.id))}</Text>))}
                </View> */}
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: '%' }}>
                    <View>
                        {configQuestion.map(element => (
                            <View style={{ borderRadius: '5%', width: responsiveScreenWidth(80), height: responsiveScreenHeight(35), backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', marginBottom: '3%', justifyContent: 'flex-start', }}>
                                <Image
                                    style={{ marginTop: '3%', width: responsiveScreenWidth(34), height: responsiveScreenHeight(12) }}
                                    source={stateAnswer.difficulty === 'hard' ? Images_hard[stateAnswer.plantName] : Images[element.id - 1]}
                                />
                                <View style={{ width: responsiveScreenWidth(70), height: responsiveScreenHeight(18), backgroundColor: '#FFF8CA' }}>
                                    <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                        <Image source={stateQuestion.userAnswer[element.id - 1] === element.answers ? require('../../asset/Yes.png') : require('../../asset/No.png')} />
                                        <View style={{ paddingLeft: '5%' }}>
                                            <Text style={{ fontSize: responsiveScreenFontSize(2), fontWeight: 'bold' }}>{element.question}</Text>
                                            <Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold', marginBottom: '2%' }} > เฉลย :</Text>

                                            {/* Object.keys(element.choices).map((id) => (<Text>{element[id]}</Text>)) */}
                                            {/*  < View style={styles.choiceContainer}>
                                                <Text style={styles.choiceOption}>{element.answers}</Text>
                                            </View> */}

                                        </View>

                                    </View>
                                    {element.answers === "ถูกทุกข้อข้างต้น" ? Object.keys(element.choices).map((id) => (element.choices[id] !== "ถูกทุกข้อข้างต้น" && element.choices[id] !== "ผิดทุกข้อข้างต้น" ?
                                        <View style={{
                                            width: responsiveScreenWidth(65), height: responsiveScreenHeight(3), backgroundColor: '#FFED9E',
                                            margin: '1%'
                                        }}>
                                            <Text style={{ fontSize: responsiveScreenFontSize(2), fontWeight: 'bold', textAlign: 'center' }}>{element.choices[id]}</Text>
                                        </View> : null)) : < View style={styles.choiceContainer}>
                                        <Text style={styles.choiceOption}>{element.answers}</Text>
                                    </View>}
                                </View>

                            </View>
                        ))}
                    </View>
                </ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('congrats')}>

                    <Image source={require('../../asset/goNext.png')} />
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

    }, banner: {
        height: responsiveScreenHeight(6), // 50% of Screen height,
        width: responsiveScreenWidth(90), // 50% of Screen width
        backgroundColor: '#FCB65F',
        marginTop: '-2%',


    }, choiceContainer: {
        backgroundColor: '#FCB65F',
        borderRadius: 13,
        borderWidth: 3,
        borderColor: 'white',
        height: responsiveScreenHeight(9), // 50% of Screen height,
        width: responsiveScreenWidth(43),// 50% of Screen width,
        marginLeft: '21%'


    }, choiceOption: {
        textAlign: 'center',
        // flexDirection: 'column',
        // alignItems: 'flex-end'
        marginTop: '12%',
        fontWeight: '800',
        fontSize: responsiveScreenFontSize(2.5),
        padding: 3
    },
    questionFooter: {
        marginTop: '6%',
        flexDirection: 'row',
        flexWrap: 'wrap',


    },




});