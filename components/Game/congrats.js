import React from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from './templateTop'
export default function congrats({ navigation }) {

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

                <Image

                    style={{ marginTop: '5%' }}
                    source={require('../../asset/BrocMascot.png')}
                />
                <Text style={{ fontSize: 41, fontWeight: '600' }}>ยินดีด้วย!</Text>
                <View style={{ backgroundColor: 'white', width: responsiveScreenWidth(80), height: responsiveScreenWidth(11), borderRadius: 30, borderColor: '#099846', borderWidth: 4 }}>
                    <Text style={{ textAlign: 'center', marginTop: '2%', fontSize: 26, fontWeight: '700' }}>  <Text style={{ color: '#298734' }}>20  </Text>XP <Image source={require('../../asset/vector.png')} /> <Text style={{ color: '#298734' }}> 1234 </Text> XP</Text>

                </View>
                <View style={{ backgroundColor: 'white', width: responsiveScreenWidth(80), height: responsiveScreenWidth(11), borderRadius: 30, borderColor: '#099846', borderWidth: 4, marginTop: '3%' }}>
                    <Text style={{ textAlign: 'center', marginTop: '2%', fontSize: 26, fontWeight: '700' }}>  <Text style={{ color: '#298734' }}>20  </Text> <Image source={require('../../asset/dollar.png')} /> <Image source={require('../../asset/vector.png')} /><Text style={{ color: '#298734' }}> 1234 </Text> <Image source={require('../../asset/dollar.png')} /></Text>

                </View>
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
