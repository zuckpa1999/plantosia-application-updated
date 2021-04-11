import React, { useState } from 'react'
import { Button, Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import TemplateTop from '../Game/templateTop.js'
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import questions from '../../config/questions.json'
import { SearchBar } from 'react-native-elements'
import { Images_plant_card_container } from '../../Images_plant_card_container'
import { Images } from '../../Images'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function PlantComponentScreen({ navigation }) {
    let allPlant = questions.hard
    const [textState, setTextState] = useState(null)
    let updateSearch = (search) => {
        setTextState(search)
    };
    return (
        <SafeAreaView style={styles.container}>
            <TemplateTop navigation={navigation} />
            <View style={styles.greenArea}>
                <Image
                    style={styles.banner}
                    source={require('../../asset/text_search/การค้นหาด้วยข้อความ.png')}
                />
                <View style={{ flexDirection: 'row', backgroundColor: '#94F098' }}>
                    <SafeAreaView style={{ flex: 0.9, backgroundColor: '#94F098' }}>
                        <View style={{ backgroundColor: 'transparent', marginBottom: '2%' }}>
                            <SearchBar
                                round
                                searchIcon={{ size: 24 }}
                                /*            onChangeText={(text) => searchFilterFunction(text)} */
                                /*  onClear={(text) => searchFilterFunction('')} */
                                placeholder="Type Here..."
                                onChangeText={updateSearch}
                                containerStyle={{ backgroundColor: '#94F098' }}
                                inputContainerStyle={{ backgroundColor: 'white' }}
                                value={textState}

                            />
                        </View>
                    </SafeAreaView>
                    <Image source={require('../../asset/searchButton.png')} style={{ marginTop: '2%', width: 50, height: 50 }} />
                </View>
                <Text style={{ fontWeight: '400', fontSize: responsiveScreenFontSize(3), marginBottom: '3%' }}>ส่วนประกอบของพืช</Text>
                <ScrollView>
                    <View style={{ width: responsiveScreenWidth(85), height: responsiveScreenHeight(45), backgroundColor: '#FFED9E', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image style={{ marginTop: '5%', marginBottom: '3%', height: responsiveScreenHeight(23), width: responsiveScreenWidth(70) }} source={Images[2]} />
                        <Text style={{ fontWeight: '500', fontSize: responsiveScreenFontSize(3) }}>ราก</Text>
                        <View style={{ alignSelf: 'flex-start', marginLeft: '10%', padding: '0.5%' }}>
                            <Text style={{ fontWeight: '500', fontSize: responsiveScreenFontSize(2) }}>หน้าที่</Text>
                            <Text style={{ fontWeight: 'normal', fontSize: responsiveScreenFontSize(2) }}>• ดูดซับน้ำและแร่ธาตุจากพืชดิน หรือจากต้นไม้ต้นอื่น</Text>
                            <Text style={{ fontWeight: 'normal', fontSize: responsiveScreenFontSize(2) }}>• เป็นรากฐานเพื่อสร้างความมั่นคง ให้ต้นไม้</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

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
    banner: {
        marginTop: '-5%'
    },
    ImageDetail: {
        // display: 'flex'

        /*  flexDirection: 'row',
         justifyContent: 'space-between',
         resizeMode: 'contain', */
        height: responsiveScreenHeight(17),
        width: responsiveScreenWidth(85)

    },
    plantCharacterText: {
        textAlign: 'center',
        marginTop: '5%',
        fontWeight: 'bold',
        fontSize: responsiveScreenFontSize(3)
    },
    plantCharacterContainer: {
        backgroundColor: "#eee",
        overflow: "hidden",
        width: responsiveScreenWidth(82),
        height: responsiveScreenHeight(25),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: '2%'
    },

    recommendText: {
        marginRight: '60%',
        marginTop: '5%',
        fontSize: responsiveScreenFontSize(3),
        fontWeight: '400',
        marginBottom: '3%'
    },
    scientificName: {
        fontSize: 15,
        fontWeight: '500',



    },
    similarity: {

        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 35
    },
})