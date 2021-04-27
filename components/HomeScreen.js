import React, { useContext } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import GlobalStateUserImage from '../contexts/GlobalStateUserImage'
import GlobalStateUserAnswer from '../contexts/GlobalStateUserAnswer'
import GlobalStateImageSearch from '../contexts/GlobalStateImageSearch'
import GlobalStateUserPlant from '../contexts/GlobalStateUserPlant'
import GlobalStateUserQuestion from '../contexts/GlobalStateUserQuestion'
export default function HomeScreen({ navigation }) {
    /* setStateQuestion({ COIN: 800, XP: stateQuestion.XP, countCorrectAnswer: stateQuestion.countCorrectAnswer, userAnswer: stateQuestion.userAnswer }) */
    const [stateImage, setStateImage] = useContext(GlobalStateUserImage)
    const [stateAnswer, setStateAnswer] = useContext(GlobalStateUserAnswer)
    const [statePic, setPicstatePic] = useContext(GlobalStateImageSearch);
    const [statePlant, setStatePlant] = useContext(GlobalStateUserPlant)
    const [stateQuestion, setStateQuestion] = useContext(GlobalStateUserQuestion)

    return (
        <SafeAreaView style={styles.container}>
            {/*    <View style={{ width: responsiveScreenWidth(35), height: responsiveScreenHeight(5), borderRadius: 30, backgroundColor: 'white', marginBottom: '5%', flexDirection: 'row', justifyContent: 'center', marginBottom: '3%', paddingTop: '1%', borderColor: '#87D38A', borderWidth: '3%' }}>
                <Text style={{ fontWeight: '600', fontSize: responsiveScreenFontSize(2.4) }}>Reset</Text>
            </View> */}


            <Image
                style={styles.plantosiaLogo}
                source={require('../asset/PlantosiaLogo.png')}
            />

            <TouchableOpacity onPress={() => {
                setStateImage([])
                setStateAnswer({ plantName: null, difficulty: null })
                setPicstatePic(null)
                setStatePlant([null])
                setStateQuestion({ XP: 0, COIN: 0, countCorrectAnswer: 0, userAnswer: [null] })
            }}>
                <Image

                    source={require('../asset/BrocMascot.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Game')}
            >
                <Image
                    style={styles.startGame}
                    source={require('../asset/startGame.png')}
                />
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('TextSearch')}
                >
                    <Image
                        source={require('../asset/textSearch.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('ImageSearch')}
                >
                    <Image
                        source={require('../asset/imageSearch.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('PlantGarden')}
                >
                    <Image
                        source={require('../asset/plantGarden.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Setting')}
                >
                    <Image
                        source={require('../asset/setting.png')}
                    />
                </TouchableOpacity>
            </View>

            {/* <Text>Home Screen</Text>
            <Button
                title="button"
               
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('TextSearch')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('ImageSearch')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('PlantGarden')}
            />
            <Button
                title="button"
                onPress={() => navigation.navigate('Setting')}
            /> */}

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#94F098',
        display: 'flex',
    },
    plantosiaLogo: {
        marginTop: '30%',
        height: responsiveScreenHeight(6.5), // 50% of Screen height
        width: responsiveScreenWidth(58), // 50% of Screen width
        marginBottom: '5%'
    },
    startGame: {
        marginTop: '17%',

    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 'auto'

    }

})