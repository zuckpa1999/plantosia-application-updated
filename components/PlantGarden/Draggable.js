
import React, { useRef, useState } from 'react'
import { Button, Text, View, PanResponder, Animated, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Draggable({ plantName }) {
    const plantURI = plantName === 'ต้นกล้วย' ? require('../../asset/text_search/ต้นกล้วย.png') : require('../../asset/text_search/ต้นมะพร้าว.png')
    const pan = useRef(new Animated.ValueXY()).current;
    const pan2 = useRef(new Animated.ValueXY()).current;
    const [state, setState] = useState([])


    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y },

                ]

            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;
    /*    const panResponder2 = useRef(
           PanResponder.create({
               onMoveShouldSetPanResponder: () => true,
               onPanResponderGrant: () => {
                   pan2.setOffset({
                       x: pan2.x._value,
                       y: pan2.y._value
                   });
               },
               onPanResponderMove: Animated.event(
                   [
                       null,
                       { dx: pan2.x, dy: pan2.y },
                   ]
               ),
               onPanResponderRelease: () => {
                   pan2.flattenOffset();
               },
     
           })
       ).current; */
    /* let User = () => {
        return <View><Animated.View
            style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }, { translateX: pan2.x }, { translateY: pan2.y }],
                position: "absolute"
            }}

        >
            <Image source={require('../../asset/ต้นกล้วย.png')} />
        </Animated.View></View>
    } */
    /* let addUser = () => {
        setState([...state, <User />])
    } */
    return (
        <View style={{ width: "20%", alignItems: "center" }}>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]

                }}
                {...panResponder.panHandlers}
            >
                <Image style={{ position: 'absolute', zIndex: 3 }} source={plantURI} />
            </Animated.View>

        </View>


    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
});


/*
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Home feffefefefeff</Text>
<Button
    title="Go to Details"
    onPress={() => navigation.goBack()}
/>

<View style={styles.container}>

    <Animated.View
        style={{
            transform: [{ translateX: pan.x }, { translateY: pan.y }]

        }}
        {...panResponder.panHandlers}
    >
        <Image source={require('../../asset/ต้นกล้วย.png')} />
    </Animated.View>

    <TouchableOpacity onPress={() => addUser()}><Text>Click me</Text></TouchableOpacity>
    {state}
    <Text>{Object.keys(panResponder)}</Text>
    <Text>{Object.keys(panResponder)}</Text>
    <Text>{Object.keys(panResponder.panHandlers)}</Text>

</View>
</View > */