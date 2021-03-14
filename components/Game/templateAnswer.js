import React from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from './templateTop'
export default function TemplateAnswerScreen({ navigation }) {

    // let imageQuestion = questions.easy[props.index].image
    // let indexQuestion = questions.easy[props.index].id
    // let numQuestion = questions.easy.length
    // let question = questions.easy[props.index].question
    // let configQuestion = questions.easy[props.index].choices


    let iQ = 1
    let nQ = 10

    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>
                <View style={styles.banner} >
                    <View></View>
                    <Text style={{
                        textAlign: 'center', fontSize: 23, fontWeight: '600', marginLeft: '9%'
                    }}>Questions {iQ} / {nQ}</Text>
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

                    style={{ marginTop: '5%' }}
                    source={require('../../asset/imgQuestion1.png')}
                />
                {/* <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>{question}</Text> */}
                <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>นี่คือส่วนใดของพืช?</Text>
                <Text style={{ fontWeight: '700', marginTop: '6%', fontSize: 19 }}>คำตอบ:</Text>
                <TouchableOpacity style={styles.choiceContainer} >
                    {/* <Text style={styles.choiceOption}>{configQuestion[key]}</Text> */}
                    <Text style={styles.choiceOption}>ราก</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Test')}>
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
