import { Platform, StyleSheet } from "react-native";
import { flexRowBetween, flexRowGapCntr } from "./HeadersStyle";
import { Colors } from "./Constant";

export const checkoutStyles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        flex:1
    },
    flexRow:{
        ...flexRowBetween,
        height:60,
        padding:10,
        backgroundColor:Colors.white,
        borderBottomWidth:0.6,
        borderColor:Colors.border
    },
    titleText:{
        fontSize:12,
        fontWeight:"600",
        textAlign:"left"

    },
    locationText:{
        fontSize:10,
        fontWeight:"500",
        textAlign:"left"
    },

    scrollviewContainer:{
        padding:5,
        backgroundColor:Colors.active_light,
        // paddingBottom:20
        
    },

    orderDetailsCntr:{
        backgroundColor:Colors.white,
        borderRadius:15,
        marginBottom:15
    },
    orderDetailsContentCntr:{
        margin:10
    },

    orderDetailsImgCntr:{
        padding:10,
        borderRadius:15,
        // backgroundColor:Colors.active_light
    },

    orderImg:{
        width:30,
        height:30
    },

    orderDetailsFlexRow:{
        ...flexRowGapCntr, gap:12,
        paddingHorizontal:10,
        paddingVertical:12
    },

    deliveryTime:{
        fontSize:13,
        fontWeight:"600"
    }

})

export const billingStyles = StyleSheet.create({
    container:{
        padding:10,
        // paddingBottom:0,
        // marginBottom:40,
        borderBottomColor:Colors.border,
        borderBottomWidth:0.6,
        backgroundColor:Colors.white
        // ...flexRowBetween
    },
    // ...flexRowBetween,
    // ...flexRowGapCntr, gap:5,
    billingText:{
        fontSize:14,
        fontWeight:"600",
        marginTop:15,
        marginHorizontal:10

    },
    paymentMethod:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        paddingLeft:14,
        paddingTop:10,
        bottom:0,
        paddingBottom:Platform.OS === "android" ? 15: 8  
    }
})