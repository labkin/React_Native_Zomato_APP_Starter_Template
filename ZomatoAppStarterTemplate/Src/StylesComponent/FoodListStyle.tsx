import { StyleSheet } from "react-native";
import { Colors } from "./Constant";

/*addButtonContainer: (isAdded: boolean) => {
    return {
    width: 120,
    borderWidth: 0.7,
    borderRadius: 10,
    bottom: -12,
    position: "absolute",
    justifyContent: 'center',
    alignSelf: 'center',
    height: 40,
    borderColor: Colors.primary,
    backgroundColor: isAdded ? Colors.primary : '#FFF5F6',
    }
};*/
  
  export const addFoodBtnContnrStyl = (itemAdded:boolean) => [
    foodListStyle.addFoodBtnContnr,
    {
        borderColor: Colors.isAddedCol,
        backgroundColor: itemAdded ? Colors.isAddedCol : Colors.isNotAddedCol,
    },
  ];
  

export const foodListStyle = StyleSheet.create({

    foodCardCntnr:{
        marginBottom:70,
        paddingVertical: 10,
        marginHorizontal: 10,
        // marginVertical: 5
    },

    
    foodContainer:{
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "space-between",
        // paddingVertical: 10,
        // marginHorizontal: 10,
        marginVertical: 20
    },
    infoContainer: {
        width: '57%',
        overflow: 'hidden'
    },
    menuName:{
        fontSize:18,
        fontWeight:'bold',

    },
    foodName:{
        fontSize:15,
    },
    description:{
        fontSize:12,
        opacity: 0.5,
        marginTop: 2,
        marginBottom: 10
    },
    foodPrice:{
        fontSize:13
    },
    bookmarkContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.dark,
        padding: 5,
        alignSelf: 'flex-start',
        marginTop: 20
    },

    bookmark:{
        fontSize:10,
        color:"#888"
    },

    imageContainer: {
        width: "40%"
    },

    image: {
        width: "100%",
        height: 130,
        borderRadius: 15
    },
    menuItemImage: {
        width: "100%",
        height: '100%',
        resizeMode: "cover",
        borderRadius: 15
    },

    

    addFoodBtnContnr:{
        width: 120,
        borderWidth: 0.7,
        borderRadius: 10,
        bottom: -12,
        position: "absolute",
        justifyContent: 'center',
        alignSelf: 'center',
        height: 40,
    },

    addToCartBtnCntnr: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addText:{
        color:Colors.red,
        fontSize:15,
        fontWeight:"600"
    },

    plusIcon: {
        position: "absolute",
        top: -1,
        right: 8
    },

    customizeTxt: {
        textAlign: 'center',
        opacity: 0.6,
        marginTop: 5,
        bottom: -5,
        fontWeight:"500"
    },

    addedToCartCntnr: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },

    animatedCount: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Okra-Bold',
        margin: 0,
    },
 
}) 