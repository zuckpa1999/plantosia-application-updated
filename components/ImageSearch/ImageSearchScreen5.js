import React, { useState, useEffect } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Card } from 'react-native-elements'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Camera } from 'expo-camera';
import { Images_plant_card_container } from '../../Images_plant_card_container'

export default function ImageSearchScreen5({ navigation, route }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back);
    const { plantName, confidence, fileName } = route.params

    /*  useEffect(() => {
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
     } */

    let uploadImage_path = ''
    try {
        uploadImage_path = require('../../backend/upload/upload_img.png')
    } catch (err) {
        uploadImage_path = require('../../asset/Plant_Image_card_container/allPlant.png')
    }


    let PlantThaiName = (plantName) => {
        switch (plantName) {
            case 'Musa Sapientum':
                return 'กล้วยหอม'
                break;
            case 'Cocos Nucifera':
                return 'มะพร้าว'
                break;
            case 'Bougainvillea':
                return 'ดอกเฟื่องฟ้า'
                break;
            case 'Oryza Sativa':
                return 'ข้าว'
                break;
            case 'Mucuna Pruriens':
                return 'หมามุ้ย'
                break;
            case 'Ixora Coccinea':
                return 'ดอกเข็ม'
                break;
            default:
                return 'No plant'
        }
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

                {/*  <Image
                    style={styles.banner}
                    source={require('../../asset/banner.png')}
                /> */}
                {/* <View style={styles.bannerDetail}>
                    <Image

                        source={require('../../asset/cameraGreen.png')}
                    />
                    <Image
                        style={{ marginLeft: '2%' }}
                        source={require('../../asset/การค้นหาด้วยรูป.png')}
                    />
                </View> */}
                <Image
                    style={{ marginLeft: '2%' }}
                    source={require('../../asset/imageSearchBanner.png')}
                />

                {/*   <Image
                    style={{ marginLeft: '2%', top: -60 }}
                    source={require('../../asset/Group_68.png')}
                /> */}
                {/*   height: responsiveScreenHeight(5), // 50% of Screen height,
        width: responsiveScreenWidth(38),// 50% of Screen width */}
                {/*  source={require(`../../backend/upload/${fileName}.png`)}  */}
                <View style={{ borderColor: '#EEAC59', borderWidth: '7px', borderRadius: '20px', flexWrap: 'wrap', top: -50 }}>
                    <Image style={styles.thumbnail} source={uploadImage_path} />




                </View>

                <Image
                    style={{ marginLeft: '2%', top: -46 }}
                    source={require('../../asset/ผลลัพธ์.png')}
                />


                <View style={{ backgroundColor: "#eee", borderRadius: 20, overflow: "hidden", width: 340, height: 250, top: -48 }}>
                    <View>
                        <Image
                            source={Images_plant_card_container[plantName]}
                            style={styles.ImageDetail}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 15 }}>
                        <View style={{ paddingRight: 60 }}>
                            <Text style={styles.ThaiName}>{PlantThaiName(plantName)}</Text>
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
                    onPress={() => navigation.navigate('Home')}
                    style={{ top: -35 }}

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
        justifyContent: 'space-between'

    },




});
