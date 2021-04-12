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
export default function PlantInfoScreen({ navigation, route }) {
    const { plantName, plantNameThai } = route.params
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
                                placeholder="Type Here..."
                                onChangeText={updateSearch}
                                containerStyle={{ backgroundColor: '#94F098' }}
                                inputContainerStyle={{ backgroundColor: 'white' }}
                                value={textState}
                                lightTheme={true}
                            />
                        </View>
                    </SafeAreaView>
                    <Image source={require('../../asset/searchButton.png')} style={{ marginTop: '2%', width: 50, height: 50 }} />
                </View>
                <Image
                    source={Images_plant_card_container[plantName]}
                    style={styles.ImageDetail}
                />
                <Text style={styles.plantThainame}>{plantNameThai}</Text>
                <Text style={styles.plantScientificName}>{plantName}</Text>
                <View style={styles.PlantCharacterContainer}>
                    <View style={styles.PlantCharacterContainerTop}>
                        <Image source={require('../../asset/text_search/BrocMascotMini.png')} />
                        <Text style={styles.PlantCharacterContainerTopHeader} >ลักษณะพื้นฐานของพืช</Text>
                    </View>
                    <View style={{ padding: '3%' }}>
                        <Text style={styles.PlantCharacterHeader}>ความสูง:
                           <Text style={styles.PlantCharacterText}>
                                5 - 9 เมตร:
                         </Text>
                        </Text>
                        <Text style={styles.PlantCharacterHeader}>ถิ่นกำเนิด:
                           <Text style={styles.PlantCharacterText}>
                                อินโดมาลายัน
                         </Text>
                        </Text>
                        <Text style={styles.PlantCharacterHeader}>ราคาตลาด:
                           <Text style={styles.PlantCharacterText}>
                                80.00 - 90.00 บาท/หวี
                         </Text>
                        </Text>
                    </View>
                </View>
                <Text>{plantName}</Text>


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
        justifyContent: 'flex-start',


    },
    banner: {
        marginTop: '-5%'
    },
    ImageDetail: {
        // display: 'flex'

        /*  flexDirection: 'row',
         justifyContent: 'space-between',
         resizeMode: 'contain', */
        marginTop: '3%',
        height: responsiveScreenHeight(17),
        width: responsiveScreenWidth(85),
        borderRadius: 20

    },
    plantThainame: {
        marginTop: '3%',
        fontWeight: '400',
        fontSize: responsiveScreenFontSize(2.25)
    },
    plantScientificName: {
        fontWeight: '300',
        fontSize: responsiveScreenFontSize(2),
        marginBottom: '3%'
    },
    PlantCharacterContainer: {
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(20),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'column'
    },
    PlantCharacterContainerTop: {
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(6),
        backgroundColor: '#FFED9E',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: '1%',
        paddingLeft: '3%'
    },
    PlantCharacterHeader: {
        fontWeight: '600',
        fontSize: responsiveScreenFontSize(2.5)
    },
    PlantCharacterText: {
        fontWeight: '400'
    },
    PlantCharacterContainerTopHeader: {
        fontSize: responsiveScreenFontSize(3),
        marginLeft: '2%', marginTop: '2%'
    }
})