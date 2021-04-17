import React, { useRef, useState } from 'react'
import { Button, Text, View, PanResponder, Animated, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Draggable from './Draggable'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from '../Game/templateTop.js'
export default function PlantGardenScreen({ navigation }) {

    const [state, setState] = useState([])
    let addUser = () => {
        setState([...state, <Draggable plantName='ต้นกล้วย' />])
    }
    return (
        <SafeAreaView style={styles.container}>
            <TemplateTop navigation={navigation} />

            <View style={styles.upperBody}>
                <Image style={{ top: -15 }} source={require('../../asset/text_search/plantGardenBanner.png')} />
                <View style={styles.upperBodyBackground}>

                    <Image style={styles.spaceBackground} source={require('../../asset/text_search/sun.png')} />
                    <Image source={require('../../asset/text_search/cloud.png')} />
                </View>
                {/* <View >
                <Draggable />
                <Draggable />

            </View> */}

            </View>

            <View style={styles.lowerBody}>
                {state}
                <Image style={styles.ground} source={require('../../asset/text_search/ground.png')} />
                <TouchableOpacity onPress={() => addUser()}><Text>Click me</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PlantShop')}>
                    <Image source={require('../../asset/text_search/plantShopp.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}

let CIRCLE_RADIUS = 30;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

    },
    row: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '50%'
    },
    dropZone: {
        height: 200,
        backgroundColor: "#00334d"
    },
    upperBody: {
        flex: 1,
        backgroundColor: '#94F0F0',
        // width: 385,
        // height: 740,
        /* height: responsiveScreenHeight(1), // 50% of Screen height */
        width: responsiveScreenWidth(91), // 50% of Screen width
        /*  borderRadius: 20, */
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // top: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'

    },
    lowerBody: {

        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        backgroundColor: '#74D295',
        /* backgroundColor: 'white', */
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: responsiveScreenWidth(91), // 50% of Screen width


    },
    upperBodyBackground: {
        flexDirection: 'row',

    },
    spaceBackground: {
        marginRight: '45%'
    },
    ground: {
        zIndex: -12,
        position: 'relative',
        marginTop: '3%',
        width: responsiveScreenWidth(75),
        height: responsiveScreenHeight(20)
    }
});