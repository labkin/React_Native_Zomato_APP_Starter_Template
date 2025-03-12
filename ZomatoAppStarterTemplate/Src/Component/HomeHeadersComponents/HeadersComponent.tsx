import { View, Text } from 'react-native'
import React from 'react'
import LocationHeader from './LocationHeader'
import SearchBar from './SearchBar'

type Props = {}

const HeadersComponent = (props: Props) => {
  return (
    <View>
      <LocationHeader />
      <SearchBar />
    </View>
  )
}

export default HeadersComponent