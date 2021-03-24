import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

import { Card, ListItem, Button, Icon } from 'react-native-elements'
import questions from '../../config/questions.json'
import TemplateQuestion from './templateQuestion.js'
import TemplateTop from './templateTop.js'
export default function QuestionScreen12({ navigation }) {
    const [stateQ, setStateImage] = useContext(GlobalStateUserQuestion)
    return (
        <SafeAreaView style={styles.container}>

            <TemplateTop navigation={navigation} />
            {/*     QuestionScreen2 ---> 0,  */}
            <View style={styles.greenArea}>

                <TemplateQuestion index={10} />
                <TouchableOpacity style={styles.confirmButtonContainer} onPress={() => navigation.navigate('Question13')}>
                    <Text style={styles.confirmButton}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

    },


    confirmButtonContainer: {
        backgroundColor: '#099846',
        borderRadius: 10,
        height: responsiveScreenHeight(4), // 50% of Screen height,
        width: responsiveScreenWidth(24),// 50% of Screen width
        alignSelf: 'flex-end',
        marginRight: '4%',
        marginTop: '15%'

    },
    confirmButton: {
        textAlign: 'center',
        marginTop: '7%',
        color: 'white',
        fontWeight: '800'

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




});