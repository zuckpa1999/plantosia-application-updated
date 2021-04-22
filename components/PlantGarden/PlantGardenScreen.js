import React, { useContext, useState } from 'react'
import { Button, Text, View, PanResponder, Animated, StyleSheet, Image, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Draggable from './Draggable'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import TemplateTop from '../Game/templateTop.js'
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
import GlobalStateUserPlant from '../../contexts/GlobalStateUserPlant'
import { Images_plantShop } from '../../Images_plantShop.js'
export default function PlantGardenScreen({ navigation }) {
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [statePlant, setStatePlant] = useContext(GlobalStateUserPlant)
    const [state, setState] = useState([])
    let addUser = (plant) => {
        /* alert(plant) */
        setState([...state, <Draggable plantName={plant} />])
    }
    return (
        <SafeAreaView style={styles.container}>
            <TemplateTop navigation={navigation} />

            <View style={styles.upperBody}>
                <Image style={{ top: -15 }} source={require('../../asset/text_search/plantGardenBanner.png')} />
                <View style={styles.upperBodyBackground}>

                    <Image style={styles.spaceBackground} source={require('../../asset/plant_garden/Sun.gif')} />
                    <Image source={require('../../asset/plant_garden/Cloud.gif')} />
                </View>
                {/* <View >
                <Draggable />
                <Draggable />

            </View> */}

            </View>

            <View style={styles.lowerBody}>
                {state}

                <Image style={styles.ground} source={require('../../asset/text_search/ground.png')} />
                <View style={{ top: -50, left: 150 }}>
                    {/* <TouchableOpacity onPress={() => addUser()}><Text>Click me</Text></TouchableOpacity> */}
                    <TouchableOpacity onPress={() => navigation.navigate('PlantShop')}>
                        <Image style={{ width: 60, height: 60 }} source={require('../../asset/text_search/plantShop.png')} />
                    </TouchableOpacity>
                </View>
                {/*    <View style={styles.plantList}>
                    <TouchableOpacity >
                        <Image source={require('../../asset/plant_garden/มะพร้าว.png')} />
                        <Text>plant</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={require('../../asset/plant_garden/มะพร้าว.png')} />
                    </TouchableOpacity>

                    <TouchableOpacity >
                        <Image source={require('../../asset/plant_garden/มะพร้าว.png')} />
                    </TouchableOpacity>


                </View> */}
                <View style={styles.plantList}>
                    {
                        Object.keys(Images_plantShop).map(plant => (statePlant.includes(plant) ?
                            <TouchableOpacity style={{ marginTop: '5%', flexDirection: 'column', alignItems: 'center' }} onPress={() => addUser(plant)}>
                                <Image style={{ width: 80, height: 90, marginTop: '3%' }} source={Images_plantShop[plant]} />
                                <Text style={{ fontWeight: '600', marginTop: '10%', fontSize: responsiveScreenFontSize(2) }}>{plant}</Text>
                            </TouchableOpacity> : null
                        ))
                    }
                </View>
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
    },
    plantList: {
        width: responsiveScreenWidth(82),
        height: responsiveScreenHeight(14),
        backgroundColor: 'white',
        top: -37,
        borderRadius: 20,
        flexDirection: 'row',

        justifyContent: 'space-around'

    }
});