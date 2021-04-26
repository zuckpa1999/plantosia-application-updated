import React, { useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import questions from '../../config/questions.json'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import { Images } from '../../Images.js'
import { Images_hard } from '../../Images_hard.js'
export default function TemplateAnswerScreen(props) {

    // let imageQuestion = questions.easy[props.index].image
    // let indexQuestion = questions.easy[props.index].id
    // let numQuestion = questions.easy.length
    // let question = questions.easy[props.index].question
    // let configQuestion = questions.easy[props.index].choices
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    let index = props.index
    let configChoices = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].choices : questions.easy[index].choices
    const img = stateAnswer.difficulty === 'hard' ? Images_hard[stateAnswer.plantName] : Images[index];
    let question = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].question : questions.easy[props.index].question
    let answer = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].answers : questions.easy[props.index].answers
    let indexQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName][index].id : questions.easy[props.index].id
    let numQuestion = stateAnswer.difficulty === 'hard' ? questions.hard[stateAnswer.plantName].length : questions.easy.length
    let nQ = 10
    return (
        <SafeAreaView style={styles.container}>

            {/* <TemplateTop navigation={navigation} /> */}
            <View style={styles.greenArea}>
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

                    style={{ marginTop: '5%' }}
                    source={require('../../asset/solutionBanner.png')}
                />

                <Image

                    style={{ marginTop: '5%', height: responsiveScreenHeight(25), width: responsiveScreenWidth(80) }}
                    source={img}
                />
                <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>{question}</Text>
                {/* <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>นี่คือส่วนใดของพืช?</Text> */}
                <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>คำตอบ:</Text>
                <TouchableOpacity style={styles.choiceContainer} >
                    {/* <Text style={styles.choiceOption}>{configQuestion[key]}</Text> */}
                    <Text style={styles.choiceOption}>{answer}</Text>
                </TouchableOpacity>
                {answer === 'ถูกทุกข้อข้างต้น' ?
                    Object.keys(configChoices).map((key) => (configChoices[key] !== 'ถูกทุกข้อข้างต้น' && configChoices[key] !== 'ผิดทุกข้อข้างต้น' ?
                        <TouchableOpacity style={styles.answerContainer}>
                            <Text key={key} style={{ marginLeft: '10%', fontSize: responsiveScreenFontSize(2), fontWeight: 'normal' }}>{configChoices[key]}</Text>

                        </TouchableOpacity> : null)) : null}
                {/*   <TouchableOpacity onPress={() => navigation.navigate('Test')}>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextButton.png')}
                    />
                </TouchableOpacity> */}
            </View>
            {/*   <Text>{answer}xxxxxx</Text> */}


        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#94F098',
        // display: 'flex',
    },
    choiceContainer: {
        backgroundColor: '#FCB65F',
        borderRadius: 13,
        borderWidth: 3,
        borderColor: 'white',
        height: responsiveScreenHeight(9), // 50% of Screen height,
        width: responsiveScreenWidth(43),// 50% of Screen width
        margin: '1%',
        marginTop: '5%'
    },
    answerContainer: {
        width: responsiveScreenWidth(42),

        backgroundColor: '#FFED9E',
        marginBottom: '1%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 10

    },
    choiceOption: {
        textAlign: 'center',
        // flexDirection: 'column',
        // alignItems: 'flex-end'
        marginTop: '17%',
        fontWeight: '600',
        fontSize: 18,
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

    banner: {
        height: responsiveScreenHeight(6), // 50% of Screen height,
        width: responsiveScreenWidth(90), // 50% of Screen width
        backgroundColor: '#FCB65F',
        marginTop: '-2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    nextButton: {

        left: 120,
        top: 150,
    }
});
