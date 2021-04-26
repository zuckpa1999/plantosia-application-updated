import React, { useContext } from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import GlobalStateUserAnswer from '../../contexts/GlobalStateUserAnswer'
import GlobalStateUserImage from '../../contexts/GlobalStateUserImage'
import { Images_plant_card_container } from '../../Images_plant_card_container'
// @material-ui/core




export default function GameScreen7({ navigation, route }) {
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const { plantName, confidence } = route.params
    const [stateImage, setStateImage] = useContext(GlobalStateUserImage)
    let PlantThaiName = () => {
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

                <View style={styles.box}>
                    <Text style={styles.msg}>พืชที่ถ่ายรูปมาคือ:</Text>
                </View>


                <Image
                    source={require('../../asset/ผลลัพธ์.png')}
                    style={styles.result}
                />
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: "#eee", borderRadius: 20, overflow: "hidden", marginBottom: 20, width: 340, height: 250 }}>
                        <View>
                            <Image
                                source={Images_plant_card_container[stateAnswer.plantName]}
                                style={styles.ImageDetail}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', padding: 15 }}>
                            <View style={{ paddingRight: 60 }}>
                                <Text style={styles.ThaiName}>{PlantThaiName()}</Text>
                                <Text style={styles.EnglishName}>{plantName}</Text>
                            </View>
                            <View style={styles.similarColumn}>
                                <Text style={styles.similarity}>ความคล้าย</Text>
                                <Text style={styles.percentage}>{confidence}</Text>
                            </View>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <TouchableOpacity onPress={() => {
                        setStateImage([])
                        navigation.navigate('Game')
                    }}>
                        <Image
                            style={styles.LeftButton}
                            source={require('../../asset/ถ่ายรูปอีกครั้ง.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setStateAnswer({ plantName: plantName, difficulty: stateAnswer.difficulty })

                        navigation.navigate('Question')

                    }} style={{ marginBottom: '20l%' }}>
                        <Image
                            style={styles.RightButton}
                            source={require('../../asset/ถัดไป.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView >
    )
}

const dimensions = Dimensions.get('window');
const imageHeight = Math.round(dimensions.width * 9 / 16);
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: '#94F098',
        // display: 'flex',
    },

    // result: {
    //     width: 200,
    //     height: 200
    // },
    image: {



    },
    result: {
        /*   width: 100,
          height: 100 */
    },
    ThaiName: {

        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 30,
        lineHeight: 40

    },
    EnglishName: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 20,
        lineHeight: 30,
        marginTop: '6%'
    },
    similarity: {

        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 35
    },



    similarColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 29
    },
    percentage: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 45,
        color: '#87D38A'
    },
    ImageDetail: {
        // display: 'flex'

        /*  flexDirection: 'row',
         justifyContent: 'space-between',
         resizeMode: 'contain', */
        height: responsiveScreenHeight(17),
        width: responsiveScreenWidth(85)

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
        padding: 21,
        fontSize: 27,

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

        // left: 120,
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
    },
    parent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    child: {
        width: '48%',
        margin: '1%',
        aspectRatio: 1,
    },
    LeftButton: {
        marginRight: '10%',
        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(10)
    },
    RightButton: {

        width: responsiveScreenWidth(40),
        height: responsiveScreenHeight(10)
    }
});