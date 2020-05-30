import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { set_login , set_password , set_ip } from './redux/actions';
import { TheButton } from './TheButton'



export const ModalSettings = (prop) => {

    const login = useSelector(state => state.testReducer.options.login);
    const password = useSelector(state => state.testReducer.options.password);
    const ip = useSelector(state => state.testReducer.options.ip);

    const dispatch = useDispatch();

    return (
        <>
            <Text style={{...styles.marginBotm,fontWeight:'bold',}} >Settings</Text>
            <View style={[styles.container, styles.marginBotm]}>
                <Text style={styles.inputLabel}>Login</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => dispatch(set_login(text))}
                    value={login}
                >
                </TextInput>
            </View>

            <View style={[styles.container, styles.marginBotm]}>
            <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => dispatch(set_password(text))}
                    value={password}
                >

                </TextInput>
            </View>

            <View style={[styles.container, styles.marginBotm]}>
                <Text style={styles.inputLabel}>IP Adress</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => dispatch(set_ip(text))}
                    value={ip}
                >
                </TextInput>
            </View>

            <TheButton label='Close' action={prop.closeBtn} />
        </>
    )

}


const styles = StyleSheet.create({
    container: {
        width: 220,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    marginBotm: {
        marginBottom: 20
    },
    textInp: {
        height: 20,
        width: 130,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 12,
        padding: 0,
        paddingLeft: 4,
        marginLeft: 4
    },
    inputLabel: {
        marginLeft: 8
    }
})