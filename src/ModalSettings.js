import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request, run, stop, set_client } from './redux/actions';
import { IntervalDispatcher } from './IntervalDispatcher'
import { TheButton } from './TheButton'



export const ModalSettings = (prop) => {
    const [login, setLogin] = React.useState('admin');
    const [password, setPassword] = React.useState('admin');
    const [ip, setIp] = React.useState('192.168.1.1');



    return (
        <>
            <Text style={[styles.marginBotm]} >Settings</Text>
            {/* <Text>Authentification</Text> */}
            <View style={[styles.container, styles.marginBotm]}>
                <Text style={styles.inputLabel}>Login</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => setLogin(text)}
                    value={login}
                >
                </TextInput>
            </View>

            <View style={[styles.container, styles.marginBotm]}>
            <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => setPassword(text)}
                    value={password}
                >

                </TextInput>
            </View>

            <View style={[styles.container, styles.marginBotm]}>
                <Text style={styles.inputLabel}>IP Adress</Text>
                <TextInput
                    style={styles.textInp}
                    onChangeText={text => setIp(text)}
                    value={ip}
                >
                </TextInput>
            </View>

            <TheButton label='Save' action={prop.closeBtn} />
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