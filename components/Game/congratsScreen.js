import React, { useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from './templateTop'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
export default function congratsScreen({ navigation }) {

    // let imageQuestion = questions.easy[props.index].image
    // let indexQuestion = questions.easy[props.index].id
    // let numQuestion = questions.easy.length
    // let question = questions.easy[props.index].question
    // let configQuestion = questions.easy[props.index].choices
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)

    let iQ = 1
    let nQ = 10

    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>

                <Image

                    style={{ marginTop: '13%' }}
                    source={require('../../asset/BrocMascot.png')}
                />
                <Text style={styles.congratsMessage}>ยินดีด้วย!</Text>
                <View style={styles.xpAndCoinContainer}>
                    <Text style={styles.xpAndCoinText}>  <Text style={styles.greenText}>20  </Text>XP <Image source={require('../../asset/vector.png')} /> <Text style={styles.greenText}>{stateQuestion.XP}</Text> XP</Text>

                </View>
                <View style={styles.xpAndCoinContainer}>
                    <Text style={styles.xpAndCoinText}>  <Text style={styles.greenText}>20  </Text> <Image source={require('../../asset/dollar.png')} /> <Image source={require('../../asset/vector.png')} /><Text style={styles.greenText}>{stateQuestion.COIN}</Text> <Image source={require('../../asset/dollar.png')} /></Text>

                </View>
                <TouchableOpacity
                    style={{ marginTop: '10%' }}
                    onPress={() => navigation.navigate('Home')}>
                    {/* <Text style={styles.buttonText}>หน้าหลัก</Text> */}
                    <Image source={require('../../asset/หน้าหลักbutton.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: '3%' }}
                    onPress={() => navigation.navigate('PlantGarden')}>
                    <Image source={require('../../asset/สวนพืชจำลองbutton.png')} />
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
    congratsMessage: {
        fontSize: 41,
        fontWeight: '600',
        marginTop: '7%'
    },
    xpAndCoinContainer: {
        backgroundColor: 'white',
        width: responsiveScreenWidth(80),
        height: responsiveScreenWidth(11),
        borderRadius: 30,
        borderColor: '#099846',
        borderWidth: 4,
        marginTop: '3%'
    },
    xpAndCoinText: {
        textAlign: 'center',
        marginTop: '2%',
        fontSize: 26,
        fontWeight: '700'
    },
    greenText: {
        color: '#298734'
    },
    buttonContainer:
    {
        marginTop: '2%',
        width: 200,
        height: 50,
        backgroundColor: 'orange'
    },
    buttonText: {
        textAlign: 'center',
        marginTop: '8%'
    }



});
