import React, { useState, useEffect } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import axios from 'axios'
import * as ImagePicker from 'expo-image-picker'
export default function ImageSearchScreen3({ navigation }) {
    const [selectedImage, setSelectedImage] = React.useState(null)
    const [data, setData] = useState(null)
    let fileName = 'blabla'
    const selectAndUploadImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!')
            return
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1,
            base64: true,
        })

        if (pickerResult.cancelled === true) {
            alert('fe')
            return
        }
        setSelectedImage(pickerResult)
        // make sure a image was taken: .
        if (!pickerResult.cancelled) {
            fetch('http://192.168.1.102:3100/uploadImageSearch', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                // send our base64 string as POST request
                body: JSON.stringify({
                    imgsource: pickerResult.base64,
                }),
            })
        }

    }
    const fetchInfo = async () => {

        await axios.get(`http://192.168.1.102:3100/info`).then(res => {
            /* alert(typeof res.data.title) */
            /* alert(Object.leys(res.data.title)) */
            /* alert(res.data.title) */
            /* alert(res.data.title[0])
            alert(res.data.title[1]) */
            /* alert(res.data.title[1] === undefined) */
            navigation.navigate('ImageSearch5', { plantName: res.data.title[0], confidence: res.data.title[1] === undefined ? null : res.data.title[1] })
        })
        /* const Data = res.data.title */

        /*   await axios.get(`http://192.168.1.102:3100/uploadedImage`)
              .then(res => {
  
                  fileName = res.data.uploadImageName
              }) */
        /*   alert(data) */
        /* alert(fileName) */
        /*   alert('bkabka')
          alert(Object.keys(data)) */
        /*  alert(Object.keys(data)) */
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

                <Image
                    style={styles.banner}
                    source={require('../../asset/banner.png')}
                />
                <View style={styles.bannerDetail}>
                    <Image

                        source={require('../../asset/cameraGreen.png')}
                    />
                    <Image
                        style={{ marginLeft: '2%' }}
                        source={require('../../asset/การค้นหาด้วยรูป.png')}
                    />
                </View>
                <Image
                    source={selectedImage ? selectedImage : require('../../asset/cameraArea.png')}
                    style={selectedImage ? styles.thumbnail : styles.cameraArea}
                />

                <TouchableOpacity onPress={() => selectAndUploadImage()} >
                    <Image

                        style={{ marginTop: '10%' }}
                        source={require('../../asset/upload.png')}

                    />
                </TouchableOpacity>


                <TouchableOpacity onPress={() => fetchInfo()
                }>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextButton.png')}
                    />
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Game2')}>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextButton.png')}
                    />
                </TouchableOpacity> */}
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
    bannerDetail: {
        flexDirection: 'row',
        top: -96,
        justifyContent: 'space-between'
    },
    imageDetail: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
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
    banner: {
        marginTop: '-5%'
    },
    nextButton: {

        left: 120,
        top: 150,
    },
    cameraArea: {
        marginTop: '10%',
        marginBottom: '10%'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});
