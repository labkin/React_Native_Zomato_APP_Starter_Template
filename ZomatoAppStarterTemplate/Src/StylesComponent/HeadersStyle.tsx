import { StyleSheet, ViewStyle } from "react-native";
import { Colors, margin, Sizes } from "./Constant";

const flexRowBetween:ViewStyle= {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
};

export const flexRowGap:ViewStyle= {
    flexDirection:"row",
    justifyContent:"space-between",
    gap:5
};

const flexRow:ViewStyle= {
    flexDirection:"row",
    alignItems:"center",
};

export const headerStyl = StyleSheet.create({
    flexRowBetween,
    homeContainer:{
        flex:1,
        backgroundColor:Colors.white,
    },

    homeHeader:{
        paddingHorizontal:10,
        zIndex:10
    },

    locationContainer:{
        ...flexRowBetween,
        gap:margin.xs,
    
    },
   
    userNameContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    userName:{
        fontSize:Sizes.xl,
        color:Colors.black,
        
    },
    userLocationText:{
        fontSize:Sizes.md,
        color:Colors.black,
        
    },
    menuBarContainer:{
        // marginHorizontal:margin.xs,

    },

    searchBarContainer:{
        
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderWidth:0.6,
        borderColor:"#F4F4F2",
        borderRadius:Sizes.xs,
        marginVertical:margin.xs,
        padding:5,
        backgroundColor:"#F3F4F7",
        shadowOpacity:0.3,
        elevation:5,
        shadowRadius:6,
        shadowColor:Colors.dark,
    },

    rollingTextContainer:{
        paddingLeft:10,
        width:"80%",
        height:47
    },

    
})

