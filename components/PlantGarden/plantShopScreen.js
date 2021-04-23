import React, { useContext } from 'react'
import { View, SafeAreaView, StyleSheet, Image, Text, TouchableOpacity } from 'react-native'
import TemplateTop from '../Game/templateTop.js'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import { Images_plantShop } from '../../Images_plantShop.js'
import PlantShop from '../../config/plantShop.json'
import { ScrollView } from 'react-native-gesture-handler';
import GlobalStateUserQuestion from '../../contexts/GlobalStateUserQuestion'
import GlobalStateUserPlant from '../../contexts/GlobalStateUserPlant'
export default function plantShopScreen({ navigation }) {
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)
    const [statePlant, setStatePlant] = useContext(GlobalStateUserPlant)
    const clickCard = (plant) => {
        if (stateQuestion.COIN >= PlantShop[plant].cost) {
            setStateQuestion({ COIN: stateQuestion.COIN - PlantShop[plant].cost, XP: stateQuestion.XP, countCorrectAnswer: stateQuestion.countCorrectAnswer, userAnswer: stateQuestion.userAnswer })
            //       setStatePlant(...statePlant, plant) vs .push
            if (statePlant[0] === null) setStatePlant([plant])
            else setStatePlant([...statePlant, plant])
        }
        else {
            alert('You broke bitches')
        }

    }
    return (
        <SafeAreaView style={styles.container}>
            {/* Group160 */}
            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>
                <Image source={require('../../asset/plant_garden/plantShopBanner.png')} />
                <Text>Your Coin : {stateQuestion.COIN}</Text>
                <Text>statePlant 0: {statePlant[0]}</Text>
                <Text>statePlant 1: {statePlant[1]}</Text>
                <Text>statePlant 2: {statePlant[2]}</Text>
                <Text onPress={() => {
                    setStateQuestion({ COIN: 800, XP: stateQuestion.XP, countCorrectAnswer: stateQuestion.countCorrectAnswer, userAnswer: stateQuestion.userAnswer })
                    setStatePlant([null])
                }}>Click me to change COIN</Text>
                <Text>statePlant length : {statePlant.length}</Text>
                <Text>Object.keys(PlantShop)  : {Object.keys(PlantShop).length}</Text>
                <Text>{statePlant.length == Object.keys(PlantShop)}</Text>
                <View style={{ width: responsiveScreenWidth(35), height: responsiveScreenHeight(5), borderRadius: 30, backgroundColor: 'white', marginBottom: '5%', flexDirection: 'row', justifyContent: 'center', marginBottom: '3%', paddingTop: '1%', borderColor: '#87D38A', borderWidth: '3%' }}>
                    <Text style={{ fontWeight: '600', fontSize: responsiveScreenFontSize(2.4), }}><Image style={{ width: 25, height: 25 }} source={require('../../asset/dollar_tiny.png')} />  {stateQuestion.COIN}</Text></View>
                <ScrollView>
                    {statePlant.length === 3 ?
                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginLeft: '10%' }}>
                            <Image style={{ width: responsiveScreenWidth(51), height: responsiveScreenHeight(23) }} source={require('../../asset/plant_garden/noPlant.png')} />
                            <Text style={{ fontWeight: '500', color: '#566368', fontSize: responsiveScreenFontSize(3), marginTop: '6%' }}>ไม่มีพืชที่ซื้อได้ในขณะนี้</Text>
                        </View> :
                        Object.keys(PlantShop).map((plant) => (
                            !statePlant.includes(plant) ?
                                <TouchableOpacity onPress={() => clickCard(plant)}>
                                    <View style={styles.cardContainer}>
                                        <View style={styles.cardContainerLeft}>
                                            <Image style={{ marginTop: '45%', marginLeft: '10%' }} source={Images_plantShop[plant]} />
                                        </View>
                                        <View style={styles.cardContainerRight}>

                                            <Text style={styles.text1}>{plant}</Text>
                                            <Text style={styles.text2}><Image source={require('../../asset/plant_garden/coin.png')} />{PlantShop[plant].cost}</Text>
                                            <Text style={styles.text3}>{PlantShop[plant].description}</Text>
                                        </View>

                                    </View>
                                </TouchableOpacity> : null
                        )
                        )
                    }
                </ScrollView>
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
        height: responsiveScreenHeight(21),
        /* backgroundColor: 'white', */
        /* borderRadius: 20, */
        flexDirection: 'row',
        marginBottom: '3%'
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
        fontSize: responsiveScreenFontSize(2),

    }
}
)

// create config json file for buyable plants -- key : plantName , value : cost, description
//iter ate config file with the card component
    // if json length = statePlant.length ==> show no mascot
    // else
        // dont render if the name exist in statePlant already
    /// make it touchable next

// done



//render hut
    //iter ate config file with the box component
        //only redner the box if the plant exist in statePLant already
    /// make it touchable next 
//set up json image file with key (plantName) : value (URO) 
