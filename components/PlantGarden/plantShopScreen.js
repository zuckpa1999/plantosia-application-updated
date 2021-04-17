import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import TemplateTop from '../Game/templateTop.js'
export default function plantShopScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TemplateTop navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'

    }
}
)