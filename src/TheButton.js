import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request, run, stop, set_client } from './redux/actions';



import Logo from "./svg/play.svg";

export const TheButton = (prop) => {

    return (
        <TouchableHighlight 
            style={[
                styles.button, 
                prop.active ? styles.activeButton : null,
                prop.inverted ? styles.invertedColors : null,
                prop.disabled ? {backgroundColor: palette.pacificBlue} : null
            ]}
            disabled={prop.disabled}
            onPress={prop.action}
            underlayColor={palette.minionYellow} >

            <Text 
                style={[
                    styles.buttonText,
                    prop.inverted ? styles.invertedTextColors : null
                ]}>
                    {prop.label}
            </Text>
            
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: palette.richBlack,
        padding: 8,
        height: 30,
        marginLeft: 4,
        marginRight: 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'blue',
        shadowOpacity: 0.5,
        elevation: 10,
    },
    activeButton: {
        backgroundColor: palette.minionYellow
    },
    buttonText: {
        fontSize: 12,
        fontWeight: '100',
        color: palette.babyPowder
    },
    invertedColors:{
        backgroundColor: palette.babyPowder
    },
    invertedTextColors:{
        color: palette.richBlack
    }
})