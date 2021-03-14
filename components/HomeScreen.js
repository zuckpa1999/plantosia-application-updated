import React from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.plantosiaLogo}
                source={require('../asset/PlantosiaLogo.png')}
            />
            <Image

                source={require('../asset/BrocMascot.png')}
            />
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