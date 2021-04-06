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
export default function QuestionScreen12({ navigation }) {

    // config file(json), globstateuseranswer, 
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    let configQuestion = questions.easy
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
                <Image source={require('../../asset/Group_284.png')}></Image>

                <Image
                    style={{ marginTop: '3%' }}
                    source={require('../../asset/solutionBanner.png')}
                />

                {/*  {configQuestion.map((id) => {
                    <Text>{id}</Text>
                })} */}
                <Text>w</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* card should be responsive depending on the content */}
                    <View style={{ borderRadius: '5%', width: responsiveScreenWidth(80), height: responsiveScreenHeight(35), backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', marginBottom: '3%' }}>
                        <Image
                            style={{ marginTop: '3%', width: responsiveScreenWidth(34), height: responsiveScreenHeight(12) }}
                            source={require('../../asset/imgQuestion1.png')}
                        />
                        <View style={{ width: responsiveScreenWidth(70), height: responsiveScreenHeight(18), backgroundColor: '#FFF8CA' }}>
                            <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                <Image source={require('../../asset/Yes.png')} />
                                <View style={{ paddingLeft: '5%' }}>
                                    <Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold' }}>นี่คือส่วนใดของพืช?</Text>
                                    <Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold' }} > เฉลย :</Text>
                                    <View style={styles.choiceContainer}>
                                        <Text style={styles.choiceOption}>ราก</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={{ borderRadius: '5%', width: responsiveScreenWidth(80), height: responsiveScreenHeight(40), backgroundColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
                        <Image
                            style={{ marginTop: '3%', width: responsiveScreenWidth(34), height: responsiveScreenHeight(12) }}
                            source={require('../../asset/imgQuestion1.png')}
                        />
                        <View style={{ width: responsiveScreenWidth(70), height: responsiveScreenHeight(18), backgroundColor: '#FFF8CA' }}>
                            <View style={{ flexDirection: 'row', paddingTop: '5%' }}>
                                <Image source={require('../../asset/No.png')} />
                                <View style={{ paddingLeft: '5%' }}>
                                    <Text style={{ fontSize: responsiveScreenFontSize(2.2), fontWeight: 'bold' }}>หน้าที่ของ ผล ของพืชคืออะไร?</Text>
                                    <Text style={{ fontSize: responsiveScreenFontSize(2.5), fontWeight: 'bold' }} > เฉลย :</Text>

                                </View>
                            </View>
                            <View style={{ width: responsiveScreenWidth(65), height: responsiveScreenHeight(3), backgroundColor: '#FFED9E', margin: '1%' }}>
                                <Text style={{ fontSize: responsiveScreenFontSize(2), fontWeight: 'bold', textAlign: 'center' }}> ดูดซับน้ำ</Text>
                            </View>
                            <View style={{ width: responsiveScreenWidth(65), height: responsiveScreenHeight(3), backgroundColor: '#FFED9E', margin: '1%' }}>
                                <Text style={{ fontSize: responsiveScreenFontSize(2), fontWeight: 'bold', textAlign: 'center' }}> ดูดซับแร่ธาตุ</Text>
                            </View>
                            <View style={{ width: responsiveScreenWidth(65), height: responsiveScreenHeight(3), backgroundColor: '#FFED9E', margin: '1%' }}>
                                <Text style={{ fontSize: responsiveScreenFontSize(2), fontWeight: 'bold', textAlign: 'center' }}> เป็นรากฐานให้กับพืช</Text>
                            </View>
                        </View>

                    </View>


                </ScrollView>
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
        width: responsiveScreenWidth(43),// 50% of Screen width

    }, choiceOption: {
        textAlign: 'center',
        // flexDirection: 'column',
        // alignItems: 'flex-end'
        marginTop: '12%',
        fontWeight: '800',
        fontSize: responsiveScreenFontSize(2.5),
        padding: 2
    },




});