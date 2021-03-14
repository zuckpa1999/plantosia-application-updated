import React from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import GameScreen5 from './GameScreen5.js'
export default function GameScreen3({ navigation }) {


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
                <Image
                    style={styles.leaf}
                    source={require('../../asset/dogLogo.png')}
                />
                <View style={styles.box}>
                    <Text style={styles.msg}>อันดับแรก, ถ่ายรูปส่วน
 <Text style={{ color: '#87D38A' }}>ดอก</Text>  ของพืช</Text>
                </View>
                <Image
                    style={styles.cameraArea}
                    source={require('../../asset/cameraArea.png')}
                />

                <Image

                    source={require('../../asset/camera_2.png')}
                />
                <View style={styles.box2}>
                    <Text style={styles.msg2}>ถ้าพืชต้นนี้  <Text style={{ color: 'red' }}>ไม่มีส่วนผล </Text>
สามารถกดถัดไปเพื่อ <Text style={{ color: 'red' }}>ข้าม</Text> ได้เลย</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Game5')}>
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
        // marginBottom: '9%',
        width: 333,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -47

    },
    box2: {
        // marginBottom: '9%',
        left: 75,
        width: 190,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'relative',
        marginTop: '4%',
    },
    msg: {
        textAlign: 'center',
        fontWeight: '700',
        padding: 20,
        fontSize: 22,

    },
    msg2: {

        textAlign: 'center',
        fontWeight: '700',
        padding: 4,
        fontSize: 14,
    },
    mascot: {
        marginTop: '36%'
    },
    nextButton: {

        marginTop: '3%',
        left: 120,

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
