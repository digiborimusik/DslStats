import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import palette from './modules/colorPalette';
import { useSelector } from 'react-redux';
import { last } from 'lodash';

export const ParsedStatsBar = (prop) => {
    const someshit = useSelector(state => state.testReducer.someshitList);
    const lastShit = useSelector(state => state.DataReducer.lastShit);
    // data = someshit[someshit.length - 1] ? someshit[someshit.length - 1].data : null;
    // stats = someshit[someshit.length - 1] ? someshit[someshit.length - 1].data.stats : null;

    return (
        <>

            <View style={{ padding: 4 }}>

                <Text style={{ color: palette.babyPowder }}>xDsl status: {lastShit.isSucced ? lastShit.status : '---'} </Text>
                <Text style={{ color: palette.babyPowder }}>Mode: {lastShit.isSucced ? lastShit.stats.mode : '---'}</Text>
                <Text style={{ color: palette.babyPowder }}>Sample number: {lastShit.counter ? lastShit.counter : '---'}</Text>
                <Text style={{ color: palette.babyPowder }}>Last sync: {lastShit.date ? lastShit.date.toString().substr(0, 25) : '---'}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.sides}>
                    <Text style={styles.sideHeading}>Downlink</Text>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.DwSpd : '---'}</Text>
                        <Text style={styles.statText}>SPEED</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.maxDwSpd : '---'}</Text>
                        <Text style={styles.statText}>MAX</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.snrd : '---'}</Text>
                        <Text style={styles.statText}>SNR</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.attnd : '---'}</Text>
                        <Text style={styles.statText}>ATT</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.fecd : '---'}</Text>
                        <Text style={styles.statText}>FEC</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.crcd : '---'}</Text>
                        <Text style={styles.statText}>CRC</Text>
                    </View>
                </View>
                <View style={styles.sides}>
                    <Text style={styles.sideHeading}>Uplink</Text>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.UpSpd : '---'}</Text>
                        <Text style={styles.statText}>SPEED</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.maxUpSpd : '---'}</Text>
                        <Text style={styles.statText}>MAX</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.snru : '---'}</Text>
                        <Text style={styles.statText}>SNR</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.attnu : '---'}</Text>
                        <Text style={styles.statText}>ATT</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.fecu : '---'}</Text>
                        <Text style={styles.statText}>FEC</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{lastShit.isSucced ? lastShit.stats.crcu : '---'}</Text>
                        <Text style={styles.statText}>CRC</Text>
                    </View>
                </View>
            </View>
        </>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: palette.pacificBlue,
        flexDirection: 'row'
    },
    sides: {
        height: '100%',
        width: '50%'
    },
    sideHeading: {
        textAlign: 'center',
        backgroundColor: palette.pacificBlue,
        color: palette.babyPowder,
        fontWeight: 'bold',
        fontSize: 14,
        padding: 4
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '40%'
    },
    statValue: {
        color: palette.babyPowder,
        fontWeight: '100',
        fontSize: 14
    },
    statText: {
        color: palette.babyPowder,
        fontWeight: '100',
        fontSize: 6,
        padding: 2
    }
})