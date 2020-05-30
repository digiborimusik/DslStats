import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, FlatList } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request } from './redux/actions';

import { TheButton } from './TheButton'

export const RawDataDisplay = (prop) => {

    const someshit = prop.someshit

    const [showModal, setShowModal] = useState(false);

    const onPressHandler = () => {
        setShowModal(true)
    }

    const ItemRender = (prop) => {
        return (
            <Text style={styles.resultAreaText}>
                {
                    prop.item.data.counter + '\n' +
                    prop.item.data.date + '\n' +
                    prop.item.data.status + '\n' +
                    prop.item.data.raw + '\n' +
                    JSON.stringify(prop.item.data.stats) + '\n'
                }
            </Text>
        )
    }

    return (
        <>
            

            
            <Modal animationType="slide" transparent={true} visible={showModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{color:palette.babyPowder , fontWeight: 'bold', marginBottom: 12 }}>Log</Text>
                        <FlatList
                            data={someshit}
                            renderItem={({ item }) => <ItemRender item={item} />}
                            ItemSeparatorComponent={() => {
                               return <View style={{width:'100%',height:1,margin:12,backgroundColor:palette.richBlack}}></View>
                            }}
                            keyExtractor={item => item.key.toString()}
                        />

                        <View style={{ marginBottom: 12 }}></View>
                        
                        <TheButton label='Close' inverted={true} action={() => { setShowModal(false) }} />
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={onPressHandler}
                    underlayColor={palette.minionYellow} >
                    {someshit.length ? <ItemRender item={someshit[0]} /> : <Text>Nothin</Text>}
                </TouchableOpacity>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.richBlack,
        padding:12

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        marginBottom: 20,
        backgroundColor: palette.pacificBlue,
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
    resultAreaText:{
        color:palette.babyPowder
    }
})