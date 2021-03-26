import React, { useState, useEffect } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Camera } from 'expo-camera';
export default function ImageSearchScreen5({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
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
                <Text>fefe</Text>

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
        top: 80,
    }
});
