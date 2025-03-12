import { StyleSheet, ViewStyle } from "react-native";
import { Colors } from "./Constant";


export const secStyl = StyleSheet.create({
    sectionListContainer:{
        paddingBottom:180
    },
    sickyHeaderBg:{
        backgroundColor:Colors.white
    },
    filterBarContainer:{
        paddingHorizontal:10,
        paddingBottom:10,
        alignItems:"center"

    },
    filterContent:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:5,
        padding:5,
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.1,
        elevation:5,
        borderRadius:8,
        shadowRadius:1.5,
        shadowColor:Colors.white,
        borderColor:Colors.border,
        backgroundColor:Colors.white,
        borderWidth:1,
        marginRight:10
    },

    filterLabel:{
        fontSize:12,
        fontWeight:"500",
    }

})