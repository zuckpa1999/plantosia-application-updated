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
import { Images_plant_card_container } from '../../Images_plant_card_container'
export default function TestScreen({ navigation }) {
    /*   const [stateQuestion, setStateQuestion] = useState({ XP: 0, COIN: 0, countCorrectAnswer: 0, userAnswer: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] }); */
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    // assumer we get props

    let index = 1
    /* let indexQuestion = questions.easy[index].answers */
    /* let plant = "Banana" */
    /* let indexQuestion = questions.hard[plant][index].question */
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
    /* 
        const RADIUS = 20;
        const x = this.props.position[0] - RADIUS / 2;
        const y = this.props.position[1] - RADIUS / 2; */
    return (
        <SafeAreaView style={styles.container}>


            <TemplateTop navigation={navigation} />
            {/*     QuestionScreen2 ---> 0,  */}
            <View style={styles.greenArea}>
                {/* borderRadius: 20, */}
                {/*   <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#eee", overflow: "hidden", marginBottom: 20, width: 340, height: 250, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                        <View>
                            <Image
                                source={Images_plant_card_container['Bougainvillea']}
                                style={styles.ImageDetail}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', padding: '7%' }}>


                            <Text style={styles.similarity}>เฟื่องxxฟ้า</Text>
                            <Text style={styles.scientificName}>Bougainvivcvcllea</Text>

                        </View>

                    </View>
                </View> */}
                <Text>fs</Text>
                <Text>fs</Text>
                <View style={[styles.finger, { left: x, top: y }]} />
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
    finger: {
        borderColor: "#CCC",
        borderWidth: 4,
        borderRadius: RADIUS * 2,
        width: RADIUS * 2,
        height: RADIUS * 2,
        backgroundColor: "pink",
        position: "absolute"
    }


});