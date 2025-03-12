import { StyleSheet, ViewStyle } from "react-native";
import { Colors, Sizes } from "./Constant";


export const shadowStyle = {
    backgroundColor:Colors.white,
    shadowOffset:{width:1, height:1},
    shadowOpacity:0.3,
    elevation:5,
    shadowRadius:6,
    shadowColor:Colors.dark,
}

export const restScreenStyle = StyleSheet.create({
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:5,
        paddingVertical:10,
        ...shadowStyle
    },
    headerTitle:{
        fontSize:Sizes.s,
        opacity:0.5
    },

    headerRecommended:{
        fontSize:Sizes.sm,
    },

    sortingContainer:{
        ...shadowStyle,
        paddingVertical:2,
        zIndex:200
    }

})