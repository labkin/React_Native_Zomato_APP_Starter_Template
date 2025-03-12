import { StyleSheet } from "react-native";
import { Colors } from "./Constant";



export const foodListStyle = StyleSheet.create({
    foodContainer:{
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: "space-between",
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 5
    },
    infoContainer: {
        width: '57%',
        overflow: 'hidden'
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
}) 