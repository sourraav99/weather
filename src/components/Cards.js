import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { height, width } from '../constants/Constants'
import Details from '../screens/Details'

export default function Cards({ name, image, navigation }) {
    return (
        <TouchableOpacity 
        onPress={()=>navigation.navigate('Detail',{name})}
        activeOpacity={0.8} 
        style={{ marginHorizontal: 10 }}>
            <ImageBackground source={image}
                style={{ height: height / 5, width: width / 2 - 50 }}
                imageStyle={{ borderRadius: 16 }} />
            <View style={{ position: "absolute", height: '100%', width: '100%' }}>
                <Text style={{ color:'black',fontSize: 28, height: '100%', width: '100%', textAlign: 'center', textAlignVertical: 'center', fontWeight: '500' }}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}