import { Platform, StyleSheet, ViewStyle } from "react-native";
import { Colors, screenHeight, Sizes } from "./Constant";


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
    },

    modCntner: {
        flex:1,
        backgroundColor:"rgba(0,0,0,0.5)",
        justifyContent:"flex-end"
    },
    modContentCntr :{
        width:"100%",
        minHeight:150,
        maxHeight:screenHeight*0.7,
        borderRadius:10
    },
    modCloseIcon:{
        position:"absolute",
        top:-60,
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"rgba(0,0,0,0.5)",
        borderRadius:200,
        padding:10,
        zIndex:1
    },
    placeHolderTxt:{
        textAlign:"center",
        color:"#666",
        fontWeight:"500"
    },

    modContent:{
        width:"100%",
        minHeight:150,
        maxHeight:screenHeight*0.7,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:Colors.white,
        overflow:"hidden"

    }


})


export const additiveStyle = StyleSheet.create({
    headerCntr:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.white,
        shadowOffset: { width: 1, height: 3 },
        shadowOpacity: 0.1,
        elevation: 5,
        shadowRadius: 2,
        zIndex: 1,
        shadowColor: Colors.blackOut,
        padding: 10
    },
    foodImage: {
        width: 50,
        height: 55,
        resizeMode: 'cover',
        borderRadius: 12
    },

    iconContnr: {
        width: 30,
        height: 30,
        justifyContent: "center",
        alignItems: 'center',
        ...shadowStyle,
        borderRadius: 100,
    },

    additiveItemsCntnr: {
        backgroundColor: Colors.lightBg,
        padding: 5,
        
    },

    additiveContent: {
        backgroundColor:Colors.white,
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
    },

    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
        
    },

    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...shadowStyle, shadowRadius:2,
        shadowOffset: {
            ...shadowStyle.shadowOffset,
            height:-1
        },
        zIndex:2,
    
        padding: 10,
        // paddingBottom: Platform.OS === 'ios' ? 15 : 10,
        position:"absolute",
        // left:0, right:0,
        bottom:150,
        
    },

    selectdOptionCntnr: {
        height: 45,
        width: '30%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: Colors.active,
        borderRadius: 12,
        backgroundColor:Colors.active_light,
        
    },

    animatedCount: {
        fontSize:16,
        color:Colors.blackOut,
        fontWeight:"600",
        margin: 0,
    },

    addItemContainer: {
        backgroundColor:Colors.green,
        borderRadius: 10,
        flex:1,
        marginLeft:10,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45
    },

})

export const updateItemStyle = StyleSheet.create({
    headerCntr:{
        borderBottomWidth: 1,
        borderColor: Colors.border,
        backgroundColor: Colors.white,
        zIndex: 1,
        padding: 15
        /*flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...shadowStyle,
        zIndex: 1,
        shadowColor: Colors.blackOut,
        shadowRadius:2,
        shadowOffset: {
            ...shadowStyle.shadowOffset,
            height:3
        },
        padding: 10*/
    }, 
    footerContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.white,
        padding: 15,
        paddingBottom: Platform.OS === 'ios' ? 30 : 10
    },

    scrollViewContainer: {
        backgroundColor:Colors.white,
        padding: 10,
    },

    updateCardContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor:Colors.border
    },

    updateCardContent: {
        flexDirection: 'row',
        width: "70%",
        alignItems: 'flex-start',
        gap: 10,
    },

    priceContainer:{
        paddingVertical:5
    },

    editButton:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },

    updateBtnSection: {
        width: '25%',
        alignItems: "flex-end",
        justifyContent: 'flex-end'
    },
    
    addBtnContainer: {
        backgroundColor:Colors.active_light,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: "row",
        borderColor:Colors.border,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 30
    },

    animatedCount: {
        fontSize:12,
        color:Colors.blackOut,
        fontWeight: '600',
        marginHorizontal: 12,
        marginLeft: 14,
    },
})