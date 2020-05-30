import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request, run, stop, set_client } from './redux/actions';
import { IntervalDispatcher } from './IntervalDispatcher';
import { ModalSettings } from './ModalSettings';
import { TheButton } from './TheButton';

const clients = ['Dlink2640u', 'MiNano']

export const ClientPicker = () => {

    const client = useSelector(state => state.testReducer.options.client);
    const status = useSelector(state => state.testReducer.status.isRun);

    const [showDialog, setShowDialog] = useState(false);

    const dispatch = useDispatch();

    return (
        <>
            <TouchableHighlight
                disabled={status}
                onPress={() => { setShowDialog(true) }}
                underlayColor={palette.fluorescentBlue}
            >
                <View style={[styles.container,status ? {opacity:0.25} : null]} >
                    <Text>
                        {client}
                    </Text>
                    <Text>  :</Text>
                </View>
            </TouchableHighlight>


            <Modal
                animationType="slide"
                transparent={true}
                visible={showDialog}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.header}>Select client</Text>
                        {
                            clients.map((item, index) => {
                                return (
                                    <TouchableHighlight
                                        key={index}
                                        style={styles.item}
                                        underlayColor={palette.minionYellow}
                                        onPress={() => {
                                            dispatch(set_client(item))
                                            setShowDialog(false)
                                        }}
                                    >
                                        <Text>{item}</Text>
                                    </TouchableHighlight>
                                )
                            })
                        }
                        <View style={{marginTop:10}}></View>
                        <TheButton label='Close' action={() => setShowDialog(false)} />
                    </View>
                </View>
            </Modal>

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 30,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4,
        marginRight: 4,
        borderRadius: 10
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 20

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 4,
        padding: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    item: {
        minWidth: 200,
        padding: 8,
        borderRadius:4
    }
})