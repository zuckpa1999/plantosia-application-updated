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
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function TextSearchScreen({ navigation }) {
    let allPlant = questions.hard
    const [textState, setTextState] = useState(null)
    const [plantInfo, setplantInfo] = useState(null)
    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(function (item) {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilteredDataSource(newData);
            setSearch(text);
            alert(newData)
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

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
            /*    alert(plantAttribute['Plant Name']) */
            /* setplantInfo(jsonData) */
            /*     let delayInMilliseconds = 1000; //1 second
    
                setTimeout(function () {
                    //your code to be executed after 1 second
                }, delayInMilliseconds); */
            navigation.navigate('PlantInfo', plantAttribute)
            /* alert('zxccz') */

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
                                /*            onChangeText={(text) => searchFilterFunction(text)} */
                                /*  onClear={(text) => searchFilterFunction('')} */
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
                        <Image source={require('../../asset/searchButton.png')} style={{ marginTop: '15%', width: 50, height: 50 }} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.plantCharacterContainer} onPress={() => navigation.navigate('PlantComponent')}>
                    <View>
                        <Image
                            source={Images_plant_card_container['All plant']}
                            style={styles.ImageDetail}
                        />
                    </View>
                    <Text style={styles.plantCharacterText}>ส่วนประกอบของพืช</Text>
                </TouchableOpacity>
                <Text>{textState}</Text>
                <Text style={styles.recommendText}>★แนะนำ★</Text>
                {/*   <Text>{allPlant.length}</Text>
                <Text>{Object.keys(allPlant)}</Text> */}
                <ScrollView>
                    {/* plantCharacterContainerNotFirst */}
                    {Object.keys(allPlant).map((key) => (

                        <TouchableOpacity style={styles.plantCharacterContainer} onPress={() => {
                            sendPlantName(key)

                        }}>
                            <View>
                                <Image
                                    source={Images_plant_card_container[key]}
                                    style={styles.ImageDetail}
                                />
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center', padding: '3%' }}>


                                <Text style={styles.similarity}>{PlantThaiName(key)}</Text>
                                <Text style={styles.scientificName}>{key}</Text>

                            </View>
                        </TouchableOpacity>
                    ))}
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
        height: responsiveScreenHeight(28),
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
        fontSize: 17,
        fontWeight: '500',



    },
    similarity: {

        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 25,
        lineHeight: 35
    },
})