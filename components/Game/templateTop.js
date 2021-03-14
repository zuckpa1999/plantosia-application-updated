import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native';
export default function templateTop(props) {
    return (
        <View style={styles.top}>
            <TouchableOpacity onPress={props.navigation.goBack}>
                <Image
                    style={styles.backButton}
                    source={require('../../asset/backButton.png')}
                />
            </TouchableOpacity>

            <Image
                style={styles.plantosiaLogo}

                source={require('../../asset/PlantosiaLogo2.png')}
            />

        </View>
    )
}


const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        marginBottom: '3%',
        display: 'flex',
    },
    plantosiaLogo: {
        marginTop: '1%',

        marginRight: '5%'

    },
    backButton: {
        right: 90,
        marginRight: '-4%'
    },



});