import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../Navigation/TabsNavigation'

type Props = {}

const Profilescreen = ({navigation, route}:TabsStackScreenProps<"Profile">) => {
  return (
    <View>
      <Text>Profilescreen</Text>
    </View>
  )
}

export default Profilescreen