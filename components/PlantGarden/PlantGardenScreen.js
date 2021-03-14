import React from 'react'
import { Button, Text, View } from 'react-native';
export default function PlantGardenScreen({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home feffefefef</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.goBack()}
            />
        </View>

    )
}
