import { StyleSheet } from "react-native";
import { Colors } from "./Constant";

export const cartStyle =StyleSheet.create({
    expCrtCntr: {
        justifyContent: 'flex-end',
        paddingVertical: 10
    },

    cartCntr: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor:Colors.white,
        alignItems: 'center',
        paddingVertical: 10
    },
})