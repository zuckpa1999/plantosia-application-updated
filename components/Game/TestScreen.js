import React, { useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import GlobalStateImageSearch from '../../contexts/GlobalStateImageSearch'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import GlobalStateUserImage from '../../contexts/GlobalStateUserImage'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
export default function TestScreen({ navigation }) {
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const [statePic, setPicstatePic] = useContext(GlobalStateUserImage)
    const [stateImage, setStateImage] = useContext(GlobalStateImageSearch);
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
                    source={require('../../asset/leafLogo.png')}
                />
                <View style={styles.box}>
                    <Text style={styles.msg}>อันดับแรก, ถ่ากกกหยรูปส่ssวน
 <Text style={{ color: '#87D38A' }}>ใบ</Text>  ของพืช</Text>
                </View>
                <Image
                    style={styles.cameraArea}
                    source={require('../../asset/cameraArea.png')}
                />
                <Text>{stateQuestion.XP}</Text>
                <Text>{stateQuestion.COIN}</Text>
                <Text>{stateQuestion.userAnswer}</Text>
                <Text>{stateAnswer}</Text>
                <Text>{stateImage}</Text>


                <TouchableOpacity onPress={() => navigation.navigate('Game3')}>
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
    msg: {
        textAlign: 'center',
        fontWeight: '700',
        paddingTop: 20,
        fontSize: 25,

    },
    mascot: {
        marginTop: '36%'
    },
    nextButton: {

        position: 'absolute',
        top: 75,
        left: 70,

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
