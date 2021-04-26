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
    const plantAttribute = route.params
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
    let PlantScientificName = plantName => {
        switch (plantName) {
            case 'Banana':
                return 'Musa Sapientum'
                break;
            case 'Coconut':
                return 'Cocos Nucifera'
                break;
            case 'Paper Flower':
                return 'Bougainvillea'
                break;
            case 'Rice':
                return 'Oryza Sativa'
                break;
            case 'Velvet Bean':
                return 'Mucuna Pruriens'
                break;
            case 'West Indian Jasmine':
                return 'Ixora Coccinea'
                break;
            default:
                return 'No plant'
        }
    }
    let PlantThaiToScientificName = plantName => {
        switch (plantName) {
            case 'กล้วยหอม':
                return 'Musa Sapientum'
                break;
            case 'มะพร้าว':
                return 'Cocos Nucifera'
                break;
            case 'ดอกเฟื่องฟ้า':
                return 'Bougainvillea'
                break;
            case 'ข้าว':
                return 'Oryza Sativa'
                break;
            case 'หมามุ้ย':
                return 'Mucuna Pruriens'
                break;
            case 'ดอกเข็ม':
                return 'Ixora Coccinea'
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
                <Image
                    source={Images_plant_card_container[PlantThaiToScientificName(plantAttribute['Plant Name'])]}
                    style={styles.ImageDetail}
                />
                <Text style={styles.plantThainame}>{plantAttribute['Plant Name']}</Text>
                <Text style={styles.plantScientificName}>{PlantThaiToScientificName(plantAttribute['Plant Name'])}</Text>
                <ScrollView>
                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/BrocMascotMini.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ลักษณะพื้นฐานของพืช</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Plant Height'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ความสูง:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Plant Height']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Local Location'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ถิ่นกำเนิด:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Local Location']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Market Price'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ราคาตลาด:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Market Price']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Toxicity'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ความเป็นพิษ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Toxicity']}
                                    </Text>
                                </Text> : null}
                        </View>
                    </View>
                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/ราก.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ราก</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Root Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ชนิดของราก:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Root Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Root Medical Property'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สรรพคุณของราก:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Root Medical Property']}
                                    </Text>
                                </Text> : null}

                        </View>
                    </View>
                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/ลำต้น.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ลำต้น</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Stem Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ชนิดของลำต้น:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Stem Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Underground Stem Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ประเภทของลำต้นใต้ดิน:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Underground Stem Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Stem Medical Property'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สรรพคุณของลำต้น:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Stem Medical Property']}
                                    </Text>
                                </Text> : null}

                        </View>
                    </View>

                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/ใบ.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ใบ</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Leaf Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ชนิดของใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Phyllotaxy'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>การเรียงตัวของใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Phyllotaxy']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Length'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ความยาวของใบ:
                           <Text style={styles.PlantCharacterText}>

                                        {plantAttribute['Leaf Length']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Venetion'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>การเรียงเส้นใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Venetion']}

                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Shape'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>รูปร่างใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Shape']}

                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Margin'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ขอบใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Margin']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Leaf Medical Property'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สรรพคุณของใบ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Leaf Medical Property']}
                                    </Text>
                                </Text> : null}

                        </View>
                    </View>

                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/ดอก.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ดอก</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Flower Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ชนิดของดอก:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Flower Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Flower Sexuality Type'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ประเภทของดอกตามเพศ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Flower Sexuality Type']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Petal Color'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สีกลีบดอก:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Petal Color']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Flower Medical Property'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สรรพคุณของดอก:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Flower Medical Property']}
                                    </Text>
                                </Text> : null}
                        </View>
                    </View>

                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/ผล.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >ผล</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Fruit Type by Characteristic'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ชนิดของผล:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Fruit Type by Characteristic']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Fruit Type by Creation Process'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ประเภทของผลมีเนื้อสด:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Fruit Type by Creation Process']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Fruit Medical Property'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สรรพคุณของผล:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Fruit Medical Property']}
                                    </Text>
                                </Text> : null}
                        </View>
                    </View>

                    <View style={styles.PlantCharacterContainer}>
                        <View style={styles.PlantCharacterContainerTop}>
                            <Image source={require('../../asset/text_search/สภาพเเวดล้อมที่เหมาะสม.png')} />
                            <Text style={styles.PlantCharacterContainerTopHeader} >สภาพแวดล้อมที่เหมาะสม</Text>
                        </View>
                        <View style={{ padding: '3%' }}>
                            {plantAttribute['Moisture'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ความชื้น:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Moisture']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Temperature'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>อุณหภูมิ:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Temperature']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Illumination'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ปริมาณแสง:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Illumination']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Soil Nutrition'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>สารอาหารในดิน:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Soil Nutrition']}
                                    </Text>
                                </Text> : null}
                            {plantAttribute['Soil pH'] !== null ?
                                <Text style={styles.PlantCharacterHeader}>ค่าความเป็นกรดในดิน:
                           <Text style={styles.PlantCharacterText}>
                                        {plantAttribute['Soil pH']}
                                    </Text>
                                </Text> : null}
                        </View>
                    </View>
                </ScrollView>
                {/*   <Text>{plantAttribute['Plant ID']}</Text>
                {Object.keys(route.params).map(a => <Text>{a}</Text>)} */}



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
        /*   height: responsiveScreenHeight(34), */
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'column',
        marginTop: '3%',
        justifyContent: 'flex-start',
        /* flexDirection: 'column' */
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