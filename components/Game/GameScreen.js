import React, { useState, useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import GlobalStateUserImage from '../../contexts/GlobalStateUserImage'
export default function GameScreen({ navigation }) {

    const [stateImage, setStateImage] = useContext(GlobalStateUserImage)
    //setStateImage([...stateImage, 'vdvs'])

    const resetGlobalStateUserImage = () => {
        setStateImage([])
    }

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
                <TouchableOpacity onPress={() => resetGlobalStateUserImage()} >

                    <Image
                        style={styles.mascot}
                        source={require('../../asset/cameraBroc.png')}
                    />
                </TouchableOpacity>
                <View style={styles.box}>
                    <Text style={styles.msg}>เลือกพืชมา 1 ต้น
                    แล้วมาถ่ายรูปพืช
                    เพื่อ
                    เริ่มเล่นเกมกันเถอะ!
!</Text>
                </View>

                {/* <Text>{state.a}</Text> */}

                <TouchableOpacity onPress={() => {
                    resetGlobalStateUserImage()
                    navigation.navigate('Game2')
                }

                }>
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
        justifyContent: 'flex-start'

    },
    box: {
        marginTop: '5%',
        width: 333,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    msg: {
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 20,
        fontSize: 22,

    },
    mascot: {
        marginTop: '36%'
    },
    nextButton: {

        left: 120,
        top: 95,
    }
});
