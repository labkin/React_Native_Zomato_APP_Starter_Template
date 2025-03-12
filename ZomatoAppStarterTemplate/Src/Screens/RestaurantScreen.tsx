import { View, Platform, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { RootStackScreenProps } from '../Navigation/RootNavigator'


const RestaurantScreen = ({navigation, route}:RootStackScreenProps<"restaurantScreen">) => {

  return (
    <View style={{ paddingTop: Platform.OS=== "android" ? 40:0, flex:1}}>
      
    </View>
  );
};



    

export default RestaurantScreen