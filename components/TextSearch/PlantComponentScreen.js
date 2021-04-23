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

    const [textState, setTextState] = useState(null)
    let updateSearch = (search) => {
        setTextState(search)
    };
    let PlantThaiName = plantName => {
        switch (plantName) {
            case 'Musa Sapientum':
                return 'กล้วยหอม'
                break;
            case 'Cocos Nucifera':
                return 'มะพร้าว'
                break;
            case 'Bougainvillea':
                return 'ดอกเฟื่องฟ้า'
                break;
            case 'Oryza Sativa':
                return 'ข้าว'
                break;
            case 'Mucuna Pruriens':
                return 'หมามุ้ย'
                break;
            case 'Ixora Coccinea':
                return 'ดอกเข็ม'
                break;
            default:
                return 'No plant'
        }
    }
    const getPlantName = plantName => {

        if (plantName === 'Banana' || plantName === 'Musa Sapientum' || plantName === PlantThaiName('Musa Sapientum')) { sendPlantName('Musa Sapientum') }
        else if (plantName === 'Coconut' || plantName === 'Cocos Nucifera' || plantName === PlantThaiName('Cocos Nucifera')) { sendPlantName('Cocos Nucifera') }
        else if (plantName === 'Paper' || plantName === 'Bougainvillea' || plantName === PlantThaiName('Bougainvillea')) { sendPlantName('Bougainvillea') }
        else if (plantName === 'Rice' || plantName === 'Oryza Sativa' || plantName === PlantThaiName('Oryza Sativa')) { sendPlantName('Oryza Sativa') }
        else if (plantName === 'Velvet Bean' || plantName === 'Mucuna Pruriens' || plantName === PlantThaiName('Mucuna Pruriens')) { sendPlantName('Mucuna Pruriens') }
        else if (plantName === 'West Indian Jasmine' || plantName === 'Ixora Coccinea' || plantName === PlantThaiName('Ixora Coccinea')) { sendPlantName('Ixora Coccinea') }
        else { alert('Sorry we currently do not have the plant you want to search in our database') }

    }
    let sendPlantName = async (plantName) => {



        try {
            /* alert(plantName) */
            const response = await fetch(`http://192.168.1.102:3100/getPlantName/${plantName}`)
            //172.27.146.76.
            // 172.27.145.164
            //old one  const response = await fetch(`http://192.168.1.102:3100/getPlantName/${plantName}`)
            const plantAttribute = await response.json();

            /* alert(response) */
            /*            alert(Object.keys(plantAttribute))
                       alert(plantAttribute['Plant ID']) */
            alert(plantAttribute['Plant Name'])
            /* setplantInfo(jsonData) */
            /*     let delayInMilliseconds = 1000; //1 second
    
                setTimeout(function () {
                    //your code to be executed after 1 second
                }, delayInMilliseconds); */
            navigation.navigate('PlantInfo', plantAttribute)


        } catch (err) {
            alert(err.message);
        }

    }
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
                                placeholder="พิมพ์พืชที่ต้องการค้นหา..."
                                onChangeText={updateSearch}
                                containerStyle={{ backgroundColor: '#94F098' }}
                                inputContainerStyle={{ backgroundColor: 'white' }}
                                value={textState}
                                lightTheme={true}

                            />
                        </View>
                    </SafeAreaView>
                    <TouchableOpacity onPress={() => {
                        getPlantName(textState)
                    }}>
                        <Image source={require('../../asset/searchButton.png')} style={{ marginTop: '2%', width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.plantComponentText}>ส่วนประกอบของพืช</Text>
                <ScrollView>
                    <View style={styles.plantCardContainer}>
                        <Image style={styles.plantCardImage} source={Images[0]} />
                        <Text style={styles.plantCardComponentText}>ราก</Text>
                        <View style={styles.plantCardDetailContainer}>
                            <Text style={styles.plantCardDetailHeader}>หน้าที่</Text>
                            <Text style={styles.plantCardDetailText}>• ดูดซับน้ำและแร่ธาตุจากพืชดิน หรือจากต้นไม้ต้นอื่น</Text>
                            <Text style={styles.plantCardDetailText}>• เป็นรากฐานเพื่อสร้างความมั่นคง ให้ต้นไม้</Text>
                        </View>

                    </View>
                    <View style={styles.plantCardContainer}>
                        <Image style={styles.plantCardImage} source={Images[2]} />
                        <Text style={styles.plantCardComponentText}>ลำต้น</Text>
                        <View style={styles.plantCardDetailContainer}>
                            <Text style={styles.plantCardDetailHeader}>หน้าที่</Text>
                            <Text style={styles.plantCardDetailText}>• ลำเลียงน้ำและแร่ธาตุไปยัง ส่วนต่างๆ ของพืช</Text>
                            <Text style={styles.plantCardDetailText}>• ยกและยื่นกิ่งก้านและใบของพืช</Text>
                        </View>

                    </View>
                    <View style={styles.plantCardContainer}>
                        <Image style={styles.plantCardImage} source={Images[4]} />
                        <Text style={styles.plantCardComponentText}>ใบ</Text>
                        <View style={styles.plantCardDetailContainer}>
                            <Text style={styles.plantCardDetailHeader}>หน้าที่</Text>
                            <Text style={styles.plantCardDetailText}>• สร้างอาหารผ่านกระบวนการ สังเคราะห์ด้วยแสง</Text>
                            <Text style={styles.plantCardDetailText}>• หายใจและแลกเปลี่ยนแก๊ส</Text>
                        </View>

                    </View>
                    <View style={styles.plantCardContainer}>
                        <Image style={styles.plantCardImage} source={Images[6]} />
                        <Text style={styles.plantCardComponentText}>ดอก</Text>
                        <View style={styles.plantCardDetailContainer}>
                            <Text style={styles.plantCardDetailHeader}>หน้าที่</Text>
                            <Text style={styles.plantCardDetailText}>• การสืบพันธุ์และ การสร้างเมล็ด</Text>

                        </View>

                    </View>
                    <View style={styles.plantCardContainer}>
                        <Image style={styles.plantCardImage} source={Images[9]} />
                        <Text style={styles.plantCardComponentText}>ผล</Text>
                        <View style={styles.plantCardDetailContainer}>
                            <Text style={styles.plantCardDetailHeader}>หน้าที่</Text>
                            <Text style={styles.plantCardDetailText}>• ปกป้องเมล็ดจากสิ่งเร้าภายนอก </Text>
                            <Text style={styles.plantCardDetailText}>• ช่วยในการกระจายเมล็ด</Text>
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
    plantComponentText: {
        fontWeight: '400',
        fontSize: responsiveScreenFontSize(3),
        marginBottom: '3%'
    },
    plantCardContainer: {
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(45),
        backgroundColor: '#FFED9E',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '4%'
    },
    plantCardImage: {
        marginTop: '5%',
        marginBottom: '3%',
        height: responsiveScreenHeight(23),
        width: responsiveScreenWidth(70)
    },
    plantCardComponentText: {
        fontWeight: '500',
        fontSize: responsiveScreenFontSize(3)
    },
    plantCardDetailContainer: {
        alignSelf: 'flex-start',
        marginLeft: '10%', padding: '0.5%'
    },
    plantCardDetailHeader: {
        fontWeight: '700',
        fontSize: responsiveScreenFontSize(2.6),
        marginBottom: '2%'
    },
    plantCardDetailText: {
        padding: '1.5%',
        fontWeight: 'normal',
        fontSize: responsiveScreenFontSize(2)
    }
})