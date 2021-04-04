import React, { useState, useEffect } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Camera } from 'expo-camera';
export default function ImageSearchScreen5({ navigation, route }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const { plantName, confidence, fileName } = route.params

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (

        <View style={styles.container}>
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
                    style={{ marginLeft: '2%', top: -40 }}
                    source={require('../../asset/Group_68.png')}
                />
                {/*   height: responsiveScreenHeight(5), // 50% of Screen height,
        width: responsiveScreenWidth(38),// 50% of Screen width */}
                <View style={{ borderColor: '#EEAC59', borderWidth: '7px', borderRadius: '20px', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Image
                        style={styles.thumbnail}

                        source={require('../../backend/upload/1030.png')}
                    /* source={require(`../../backend/upload/${fileName}.png`)} */
                    />
                </View>
                <Image
                    style={{ marginLeft: '2%' }}
                    source={require('../../asset/ผลลัพธ์.png')}
                />


                <View style={{ backgroundColor: "#eee", borderRadius: 20, overflow: "hidden", width: 340, height: 250 }}>
                    <View>
                        <Image
                            source={require('../../asset/12.png')}
                            style={styles.ImageDetail}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 15 }}>
                        <View style={{ paddingRight: 60 }}>
                            <Text style={styles.ThaiName}>กล้วยหอม</Text>
                            <Text style={styles.EnglishName}>{plantName}</Text>
                        </View>
                        <View style={styles.similarColumn}>
                            <Text style={styles.similarity}>ความคล้าย</Text>
                            <Text style={styles.percentage}>{confidence}</Text>
                        </View>
                    </View>
                </View>


                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Game')}
                    style={{ marginBottom: '100%' }}

                >
                    <Image
                        style={styles.startGame}
                        source={require('../../asset/หน้าหลัก.png')}
                    />
                </TouchableOpacity>
            </View>



        </View >


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
        marginTop: '8%',
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
        justifyContent: 'flex-start',

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
        marginTop: '-3%'
    },
    nextButton: {

        left: 120,
        top: 80,
    },
    thumbnail: {
        width: responsiveScreenWidth(70),
        height: responsiveScreenHeight(20),

        borderRadius: 13
    },
    image: {
        width: 300, height: 200
    },
    ThaiName: {

        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 25,
        lineHeight: 30

    },
    EnglishName: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 30,
        marginTop: '6%'
    },
    similarity: {

        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 30
    },
    similarColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 29
    },
    percentage: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 30,
        lineHeight: 45,
        color: '#87D38A'
    },
    ImageDetail: {
        // display: 'flex'

        /*         flexDirection: 'row',
                justifyContent: 'space-between' */
        /*  width: 350,
         height: 160, */
        height: responsiveScreenHeight(17),
        width: responsiveScreenWidth(85)
    },
    /*   top: {
          flexDirection: 'row',
          // justifyContent: 'center',
          justifyContent: 'space-between',
          marginBottom: '3%',
          display: 'flex',
      }, */
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
        width: 300,
        height: 75,
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
        padding: 25,
        fontSize: 27,

    },
    msg2: {

        textAlign: 'center',
        fontWeight: '700',
        padding: 15,
        fontSize: 25,
    },
    /*  cardContainer: {
         marginBottom: '400%'
     }, */
    result: {
        width: 200,
        height: 200
    },
    startGame: {

    }
});
