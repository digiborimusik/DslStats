import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request, run, stop, set_client } from './redux/actions';
import { IntervalDispatcher } from './IntervalDispatcher';
import { ModalSettings } from './ModalSettings';
import { TheButton } from './TheButton';

import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from 'react-native-shapes';



export const ControlBar = (a) => {

    const [intervalValue, setIntervalValue] = useState(1000);
    const [showDialog, setShowDialog] = useState(false);
    const status = useSelector(state => state.testReducer.status.isRun);
    const client = useSelector(state => state.testReducer.options.client);

    const dispatch = useDispatch();

    console.log(a)
    return (
        <View style={styles.controlBar}>

            <TheButton label='START' active={status} action={() => { dispatch(run()) }} />
            <TheButton label='STOP' active={!status} action={() => { dispatch(stop()) }} />
            {status ? <IntervalDispatcher client={client} ms={intervalValue} /> : null}

            {/* <Picker
                selectedValue={client}
                style={styles.picker}
                textStyle={{fontSize: 12,color:'yellow'}}
                mode={('dropdown')}
                enabled={!status}
                onValueChange={(itemValue) => dispatch(set_client(itemValue))}
            >

                <Picker.Item label="MiNano" value={'MiNano'} />
                <Picker.Item label="Dlink2640u" value={'Dlink2640u'} />

            </Picker>

            <Picker style={styles.picker}>
                <Picker.Item label="1sec" value={'MiNano'} />
                <Picker.Item label="2sec" value={'Dlink2640u'} />
            </Picker> */}


            <View style={{ marginLeft: 'auto' }}></View>

            <RNPickerSelect
            Icon={() => {
                return <Chevron size={1.5} color="gray" />;
              }}
                disabled={status}
                placeholder={{}}
                InputAccessoryView={() => null}
                style={{
                    inputAndroid: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        width: 120
                    },
                    iconContainer: {
                        top: 5,
                        right: 15,

                    }
                }}
                onValueChange={(itemValue) => dispatch(set_client(itemValue))}
                value={client}
                useNativeAndroidPickerStyle={false}
                items={[
                    { label: 'MiNano', value: 'MiNano' },
                    { label: 'Dlink2640u', value: 'Dlink2640u' }
                ]}
            />

            <TheButton label='SETTINGS' disabled={status} action={() => { setShowDialog(true) }} />
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
                        <ModalSettings closeBtn={() => { setShowDialog(false) }} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
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
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    controlBar: {
        height: '100%',
        backgroundColor: palette.babyPowder,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center"
    },
    picker: {
        width: 200,
        height: 40,
        color: palette.richBlack,
        marginLeft: 'auto',
        fontSize: 12
    }
});