import React, { useState, useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import GlobalStateUserImage from '../../contexts/GlobalStateUserImage'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import axios from 'axios'
export default function GameScreen6({ navigation }) {
    const [stateImage, setStateImage] = useContext(GlobalStateUserImage)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const [data, setData] = useState(null)
    let upload = async () => {



        // obj.base64.push to array
        // then pass array


        /*       for (let i = 0; i < stateImage.length; i++) {
                  fetch('http://192.168.1.102:3100/uploads', {
                      method: 'POST',
                      headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                      },
                      // send our base64 string as POST request
                      body: JSON.stringify({
                          imgsource: [stateImage[0].base64, stateImage[1].base64]
                      })
                  })
       */
        /*  arr.push(stateImage[i].base64) */
        /* } */




        /*     } */



        // obj.base64.push to array
        // then pass array
        let imagesWithBase64 = []
        for (let i = 0; i < stateImage.length; i++) {
            imagesWithBase64.push(stateImage[i].base64)
        }

        await fetch('http://192.168.1.102:3100/uploadImageGame', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // send our base64 string as POST request
            body: JSON.stringify({
                imgsource: imagesWithBase64
            }),
        })
        alert('done')
        /* alert(data)

        navigation.navigate('Game7', {
            plantName: data[0], confidence: data[1]
        }) */
        /*  navigation.navigate('Game3') */



    }


    const fetchInfo = async () => {

        const Data = await axios.get(`http://192.168.1.102:3100/gameImageData`)
        const plantNameAndConfidence = Data.data.data


        /*  alert('fe') */
        /*         alert(Data.data.data)
                alert(typeof Data.data.data) */
        /*    alert(Data[0])
           alert(Data[1]) */
        /*   alert('bkabka')
          alert(Object.keys(data)) */
        /*  alert(Object.keys(data)) */
        setStateAnswer({ plantName: plantNameAndConfidence[0], difficulty: stateAnswer.difficulty })

        if (plantNameAndConfidence.length >= 2) {
            navigation.navigate('Game7', {
                plantName: plantNameAndConfidence[0], confidence: plantNameAndConfidence[1]
            })
        }
        //(plantNameAndConfidence === 'Attribute Error: The confidence is lower than 0.5') 
        else {
            navigation.navigate('Game7_2')
        }

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
                {/*  <Image
                    style={styles.leaf}
                    source={require('../../asset/fruitLogo.png')}
                /> */}
                <View style={styles.box}>
                    <Text style={styles.msg}>เย่! ถ่ายรูปพืชเสร็จแล้ว</Text>
                </View>
                <Text>{stateImage.length}</Text>
                {/* <Text>{JSON.stringify({ stateImage })}</Text> */}
                {/* <Text>{stateImage}</Text> */}

                <TouchableOpacity onPress={() => upload()}>
                    <Image

                        source={require('../../asset/BrocMascot.png')}
                    />
                </TouchableOpacity>
                <View style={styles.box2}>
                    <Text style={styles.msg2}>{`เข้าสู่ขั้นตอนต่อไปกันเถอะ\n`}<Text style={{
                        color: 'red', fontSize: 60
                    }}>QUIZ</Text></Text>

                </View>
                <TouchableOpacity onPress={() => fetchInfo()}>
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
        marginTop: '20%',
        // marginBottom: '9%',
        width: 333,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        top: -47

    },
    box2: {
        marginTop: '5%',
        // marginBottom: '9%',
        width: 333,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 20,
        position: 'relative',
        // top: -47
    },
    msg: {
        textAlign: 'center',
        fontWeight: '700',
        padding: 30,
        fontSize: 25,

    },
    msg2: {

        textAlign: 'center',
        fontWeight: '700',
        padding: 15,
        fontSize: 25,
    },
    mascot: {
        marginTop: '36%'
    },
    nextButton: {
        marginTop: '3%',
        left: 120,
        // position: 'absolute',
        // top: 75,
        // left: 70,

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