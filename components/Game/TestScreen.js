import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, Pressable, TouchableOpacity, Image, Modal } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from './templateTop'
export default function TestScreen({ navigation }) {
    // assumer we get props

    let answer = false
    // 2 version 
    //if props.answer : true ? boolean
    // need global variable to store coin and XP **
    // right answer banner1 , mascot1, coin + 20, XP + 50
    // wrong answer, banner 2, mascot 2, coin + 20, XP + 50
    const [modalVisible, setModalVisible] = useState(false);
    const bannerRight = require('../../asset/ปกถูก.png')
    const bannerWrong = require('../../asset/ปกผิด.png')
    const mascotRight = require('../../asset/ตอบถูก.png')
    const mascotWrong = require('../../asset/ตอบผิด.png')
    //
    let banner = answer ? bannerRight : bannerWrong
    let mascot = answer ? mascotRight : mascotWrong

    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>
                <View style={styles.centeredView}>
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
                                <TouchableOpacity style={styles.solutionContainer}>
                                    <Text style={styles.solutionButton}>เฉลย</Text>
                                </TouchableOpacity>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
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
    image: {
        flex: 1,
        // width: null,
        // height: null,
        resizeMode: 'contain',

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

        // backgroundColor: '#94F098',
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
    solutionContainer: {
        backgroundColor: '#099846',
        borderRadius: 10,
        height: responsiveScreenHeight(5), // 50% of Screen height,
        width: responsiveScreenWidth(38),// 50% of Screen width


        marginTop: '15%'
    },
    solutionButton: {
        textAlign: 'center',
        // marginTop: '7%',
        color: 'white',
        fontWeight: '800',
        fontSize: 30
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
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
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
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    // buttonClose: {
    //     backgroundColor: "#2196F3",
    // },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
