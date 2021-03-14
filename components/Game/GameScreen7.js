import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'

// @material-ui/core




export default function GameScreen7({ navigation }) {
    // const classes = useStyles();
    // const users = [
    //     {
    //         name: 'brynn',
    //         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    //     },
    //     {
    //         name: 'brynn',
    //         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    //     }
    // ]
    // const windowWidth = useWindowDimensions().width;
    // const windowHeight = useWindowDimensions().height;

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
                    source={require('../../asset/result.png')}
                    style={styles.result}
                />
                <Text style={{ top: -58, fontWeight: '600', fontSize: 17 }}>ผลลัพธ์</Text>
                <Card style={styles.cardContainer}>

                    <Image
                        source={require('../../asset/Rectangle.png')}
                        // style={{ width: 300, height: 200 }}
                        style={styles.image}
                    />
                    <View style={styles.ImageDetail}>
                        <View>
                            <Text style={styles.ThaiName}>กล้วยหอม</Text>
                            <Text style={styles.EnglishName}>Musa Sapientum</Text>
                        </View>

                        <View style={styles.similarColumn}>
                            <Text style={styles.similarity}>ความคล้าย</Text>
                            <Text style={styles.percentage}>72%</Text>
                        </View>
                    </View>
                </Card>

                <TouchableOpacity onPress={() => navigation.navigate('Question')}>
                    <Image
                        style={styles.nextButton}
                        source={require('../../asset/nextBig.png')}
                    />
                </TouchableOpacity>

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
    // cardContainer: {
    //     marginBottom: '10%'
    // },
    // result: {
    //     width: 200,
    //     height: 200
    // },
    image: {
        width: 300, height: 200
    },
    ThaiName: {
        fontFamily: 'Bai Jamjuree',
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
        fontFamily: 'Bai Jamjuree',
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
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between'
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
        padding: 25,
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
        marginTop: '3%',
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
    }
});