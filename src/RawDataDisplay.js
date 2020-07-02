import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList, ScrollView } from 'react-native';
import palette from './modules/colorPalette';

import { TheButton } from './TheButton'

export const RawDataDisplay = (prop) => {

    const someshit = prop.someshit

    const getData = () => {
        const data = [...prop.someshit]
        console.log(data)
        return data.reverse()
    }

    const [showModal, setShowModal] = useState(false);

    const onPressHandler = () => {
        setShowModal(true)
    }

    const ItemRender = (prop) => {
        return (
            <Text style={styles.resultAreaText}>
                {
                    prop.item.data.status + ' ' + prop.item.data.date.toString().substr(0, 25) + '\n' +
                    prop.item.data.raw + '\n'
                }
            </Text>
        )
    }

    return (
        <>
            <View 
            // style={{maxHeight:400}}
            >
                <Modal animationType="slide" transparent={true} visible={showModal}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ color: palette.babyPowder, fontWeight: 'bold', marginBottom: 12 }}>Raw data Log</Text>
                            <FlatList
                                data={getData()}
                                renderItem={({ item }) => <ItemRender item={item} />}
                                ItemSeparatorComponent={() => {
                                    return <View style={{ width: '100%', height: 1, margin: 12, backgroundColor: palette.babyPowder }}></View>
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
                        {someshit.length ? <ItemRender item={someshit[someshit.length - 1]} /> : <Text style={styles.resultAreaText} >No data</Text>}
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.richBlack,
        padding: 12

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
    resultAreaText: {
        color: palette.babyPowder
    }
})