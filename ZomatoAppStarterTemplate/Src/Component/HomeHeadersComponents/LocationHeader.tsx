import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useSharedContext } from '../../Context/SharedContext'
import { headerStyl } from '../../StylesComponent/HeadersStyle'
import {Ionicons} from '@expo/vector-icons'; 
import { Colors, Sizes } from '../../StylesComponent/Constant'

type Props = {}
// globallScrlY globallScrollY
// @2:27 customText
// @3:09 locationHeader
// @1:53 ANimated tab
const LocationHeader = () => {
    const {globallScrollY} = useSharedContext()
    // const txtCol = "#fff"
    const animOpacity = useAnimatedStyle(()=>{
        const opacity = interpolate(globallScrollY.value,
            [0, 70],
            [1, 0]
        )
        return{
            opacity
        }
    })
  return ( 
    <Animated.View style={[animOpacity]}>
        <SafeAreaView />
        <View style={headerStyl.locationContainer}>
            <View style={headerStyl.locationContainer}>
                <Ionicons name="location" size={Sizes.xxl} color={Colors.red} />
                <View>
                    <TouchableOpacity style={headerStyl.userNameContainer}>
                        <Text style={headerStyl.userName}>riyo</Text>
                        <Ionicons name="chevron-down" color={Colors.black} size={Sizes.s} />
                    </TouchableOpacity>
                    <Text style={headerStyl.userLocationText}>north Indian</Text>
                </View>
            </View>
            <View style={headerStyl.menuBarContainer}>
                <TouchableOpacity style={headerStyl.userNameContainer}>
                    <Ionicons name="menu" color={Colors.black} size={Sizes.xxl} />
                </TouchableOpacity>
            </View>
        </View>

    </Animated.View>
  )
}

export default LocationHeader