import React from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native'
import TemplateTop from '../Game/templateTop.js'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
export default function plantShopScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>
                <Image source={require('../../asset/plant_garden/plantShopBanner.png')} />
                <View style={styles.cardContainer}>
                    <View style={styles.cardContainerLeft}>
                        <Image style={{ marginTop: '45%', marginLeft: '10%' }} source={require('../../asset/plant_garden/Group162.png')} />

                    </View>
                    <View style={styles.cardContainerRight}>
                        <Text style={styles.text1}>แอปเปิล</Text>
                        <Text style={styles.text2}><Image source={require('../../asset/plant_garden/coin.png')} /> 50</Text>
                        <Text style={styles.text3}>ผลสีแดงบนต้นไม้แสนโสภา</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

    }, greenArea: {

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
    cardContainer: {
        width: responsiveScreenWidth(82),
        height: responsiveScreenHeight(20),
        /* backgroundColor: 'white', */
        /* borderRadius: 20, */
        flexDirection: 'row'
    },
    cardContainerLeft: {
        backgroundColor: '#FFED9E',
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
    },
    cardContainerRight: {
        backgroundColor: 'white',
        flex: 2,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: '5%'

    },
    text1: {
        fontWeight: '700',
        fontSize: responsiveScreenFontSize(5),
        marginBottom: '3%'
    },
    text2: {
        fontWeight: '700',
        fontSize: responsiveScreenFontSize(4.4),
        marginBottom: '3%'
    },
    text3: {
        fontWeight: '700',
        fontSize: responsiveScreenFontSize(2)
    }
}
)