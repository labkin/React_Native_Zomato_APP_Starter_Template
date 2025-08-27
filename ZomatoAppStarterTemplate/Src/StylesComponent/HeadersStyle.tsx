import { StyleSheet, ViewStyle } from "react-native";
import { Colors, margin, Sizes } from "./Constant";

export const flexRowBetween:ViewStyle= {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
};

export const flexRowGap:ViewStyle= {
    flexDirection:"row",
    justifyContent:"space-between",
    gap:5
};

export const flexRowGapCntr:ViewStyle= {
    flexDirection:"row",
    alignItems:"center",
    gap:10
};

export const headerStyl = StyleSheet.create({
    flexRowBetween,
    homeContainer:{
        flex:1,
        backgroundColor:Colors.white,
        // marginTop:20
    },

    homeHeader:{
        paddingHorizontal:10,
        alignSelf:"center",
        zIndex:10
    },

    locationContainer:{
        ...flexRowBetween,
        gap:margin.xs,
        // marginHorizontal:margin.xs,
    
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
        // width:"88%",
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

{/*<Animated.View 
style={[{flexDirection:"row", alignItems:"center", 
backgroundColor: 'white', 
    borderRadius: 10, height: 38, marginHorizontal:10, marginVertical:12
}, ]}
>
<Pressable style={{position:"absolute", padding:10, flexDirection:"row", alignItems:"center",}}>
    <AntDesign style={{}} name="search1" size={22} color="black" />
    <TextInput
      style={[{ flex: 1, fontSize: 16, color: '#333', paddingHorizontal: 10 }]}
      value={text}
      onChangeText={setText}
      // placeholder={rollingTexts[currentIndex]}
    />
    <Animated.Text style={[rollingTextStyle, { fontSize: 16, color: '#ccc', marginLeft: 10 }]}>
      {rollingTexts[currentIndex]}
    </Animated.Text>
    
</Pressable>  
</Animated.View>*/}