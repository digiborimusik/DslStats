import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request , run , stop , set_client} from './redux/actions';
import {IntervalDispatcher} from './IntervalDispatcher'




export const ControlBar = (a) => {

    const [intervalValue, setIntervalValue] = useState(1000);
    const status = useSelector(state => state.testReducer.status.isRun);
    const client = useSelector(state => state.testReducer.options.client);

    const dispatch = useDispatch();

    const startBtnHandler = () => {
        dispatch(run())
    }

    const stopBtnHandler = () => {
        dispatch(stop())
    }

    console.log(a)
    return (
        <View style={styles.controlBar}>
            <TheButton label='START' active={status} action={startBtnHandler} />
            <TheButton label='STOP' active={!status} action={stopBtnHandler} />
            {status ? <IntervalDispatcher client={client} ms={intervalValue} /> : null}

            <Picker
                selectedValue={client}
                style={styles.picker}
                
                mode={('dropdown')}
                enabled={!status}
                onValueChange={(itemValue) => dispatch(set_client(itemValue))}
            >   

                <Picker.Item label="MiNano" value={'MiNano'} />
                <Picker.Item label="Dlink2640u" value={'Dlink2640u'} />
                
            </Picker>
        </View>
    )
}



const TheButton = (prop) => {
    return (
        <TouchableOpacity style={[styles.button, prop.active ? styles.activeButton : null]}
            onPress={prop.action} >
            <Text style={styles.buttonText}>{prop.label}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    controlBar: {
        height: '100%',
        backgroundColor: palette.richBlack,
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center"
    },
    picker: {
        width: 150,
        height: 40,
        color: palette.babyPowder
    },
    button: {
        backgroundColor: palette.babyPowder,

        width: 100,
        height: 36,
        marginLeft: 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8
    },
    activeButton : {
        backgroundColor: palette.minionYellow
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: palette.richBlack
    }
});