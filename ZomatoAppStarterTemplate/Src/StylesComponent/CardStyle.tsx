import { StyleSheet, ViewStyle } from "react-native";
import { Colors, screenHeight, Sizes } from "./Constant";


export const cardStyle = StyleSheet.create({
    categoryContentContainer:{
        alignItems:"center",
        padding:5,
        margin:3
    },
    imageContainer:{
        borderRadius:20,
        padding:3,
    },

    catName:{
        fontSize:9,
        fontWeight:"bold",
    },

    

})

export const lineBreakerStyle = StyleSheet.create({
    lineBreakerContainer:{
      alignItems:"center",
      justifyContent:"center",
      gap:10,
      width:"100%",
      overflow:"hidden",
      marginTop:20,
      marginBottom:10  
    },

    lineX:{
        width:"100%",
        height:2,
        position:"absolute",
        zIndex:-1,
        backgroundColor:Colors.border
    },
    lineBreakerTxt :{
        fontSize:13,
        fontWeight:"700",
        paddingHorizontal:15,
        backgroundColor:Colors.white,
        opacity:0.5
    }
}) 


export const restaurantStyle = StyleSheet.create({
   restaurantAddress:{
    fontSize:12,
    fontWeight:"500",
    textAlign:"center",
    marginVertical:10,
    opacity:0.5
   }
    
}) 


export const restCardStyle = StyleSheet.create({
    cardContainer:{
        borderRadius:Sizes.s,
        marginBottom:25,
        margin:10,
        backgroundColor:Colors.white,
        shadowOffset:{width:1, height:1},
        shadowOpacity:0.2,
        elevation:5,
        shadowRadius:10,
        shadowColor:Colors.dark
    },
    image:{
        width:"100%",
        height:screenHeight * 0.30,
        resizeMode:"cover",
        borderTopLeftRadius:Sizes.s,
        borderTopRightRadius:Sizes.s
    },
    details:{
        padding:10
    },
    textContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    nameTimeContainer:{
        flex:1
    },

    restName:{
        fontSize:18,
        fontWeight:"700",
        marginBottom:5

    },
    ZigZag:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:50,
        backgroundColor:Colors.black,
        transform:[
            {skewX:"-10deg"},
            {translateY:0}
        ],
    }
     
 }) 

 export const starRatingStyle = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        borderRadius:10,
        paddingVertical:8,
        paddingHorizontal:10,
    
    },
    rating:{
        fontSize:12,
        fontWeight:"600",
        color:"#fff"
    }
 }) 


export const gotoTopStyles = StyleSheet.create({
    gotoTopButtonContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"center",
        position:"absolute",
        top:screenHeight * 0.055,
        backgroundColor:Colors.black,
        zIndex:1000,
        gap:4,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:20

    },
    container:{
        flexDirection:"row",
        alignItems:"center",
        gap:6
    },
    backToTop:{
        fontSize:12,
        color:"#fff",
        fontWeight:"600"
    }
})