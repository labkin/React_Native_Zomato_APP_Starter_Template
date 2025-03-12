import { View, Text } from 'react-native'
import React from 'react'
import { TabsStackScreenProps } from '../Navigation/TabsNavigation'

type Props = {}

const Cartscreen = ({navigation, route}:TabsStackScreenProps<"Cart">) => {
  return (
    <View>
      <Text>Cartscreen</Text>
    </View>
  )
}

export default Cartscreen