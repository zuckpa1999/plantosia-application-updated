
import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import GlobalStateImageSearch from '../../contexts/GlobalStateImageSearch.js'
import { MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
export default function ImageSearchScreen4({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [selectedImage, setSelectedImage] = React.useState(null)
    const ref = useRef(null)
    const [statePic, setPicstatePic] = useContext(GlobalStateImageSearch);
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    let _takePhoto = async () => {

        const photo = await ref.current.takePictureAsync({
            quality: 1,
            base64: true

        })
        setPicstatePic(photo)

        fetch('http://192.168.1.102:3100/uploadImageSearch', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            // send our base64 string as POST request
            body: JSON.stringify({
                imgsource: photo.base64,
            }),
        })

        navigation.navigate('ImageSearch2')
        alert(Object.keys(photo))

        alert(photo.uri)
        alert(photo.wdith)
        alert(photo.height)

    }




    return (
        <View style={styles.container}>
            <Camera style={{ flex: 1, }} type={type} ref={ref}>
                <View
                    style={{
                        justifyContent: 'space-evenly',
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        marginTop: '160%',
                        color: 'white',
                        fontSize: 18
                    }}>
                    <TouchableOpacity
                        /*    style={{
                               flex: 0.1,
                               alignSelf: 'flex-end',
                               alignItems: 'center',
                           }} */
                        style={{ fontSize: '18' }}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        {/* <Text style={{ color: 'white' }} > Flip </Text> */}
                        <MaterialIcons name="flip-camera-ios" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={_takePhoto}
                    >
                        <Feather name="camera" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={_takePhoto}
                    >
                        <Ionicons name="md-image-outline" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

//https://docs.expo.io/versions/latest/sdk/camera/#requestpermissionsasync
//https://github.com/Alhydra/react-native-camera-expo-exmple