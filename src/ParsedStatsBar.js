import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import palette from './modules/colorPalette';


export const ParsedStatsBar = (prop) => {
    data = prop.someshit[prop.someshit.length - 1] ? prop.someshit[prop.someshit.length - 1].data : null;
    stats = prop.someshit[prop.someshit.length - 1] ? prop.someshit[prop.someshit.length - 1].data.stats : null;
    const [showSNR, setShowSNR] = useState(false);
    const [showLog, setShowLog] = useState(false);

    return (
        <>

            <View style={{ padding: 4 }}>

                <Text style={{ color: palette.babyPowder }}>xDsl status: {data ? data.status : '---'} </Text>
                <Text style={{ color: palette.babyPowder }}>Mode: {stats ? stats.mode : '---'}</Text>
                <Text style={{ color: palette.babyPowder }}>Sample number: {data ? data.counter : '---'}</Text>
                <Text style={{ color: palette.babyPowder }}>Last sync: {data ? data.date.toString().substr(0, 25) : '---'}</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.sides}>
                    <Text style={styles.sideHeading}>Downlink</Text>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.DwSpd : '---'}</Text>
                        <Text style={styles.statText}>SPEED</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.maxDwSpd : '---'}</Text>
                        <Text style={styles.statText}>MAX</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.snrd : '---'}</Text>
                        <Text style={styles.statText}>SNR</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.attnd : '---'}</Text>
                        <Text style={styles.statText}>ATT</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.fecd : '---'}</Text>
                        <Text style={styles.statText}>FEC</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.crcd : '---'}</Text>
                        <Text style={styles.statText}>CRC</Text>
                    </View>
                </View>
                <View style={styles.sides}>
                    <Text style={styles.sideHeading}>Uplink</Text>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.UpSpd : '---'}</Text>
                        <Text style={styles.statText}>SPEED</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.maxUpSpd : '---'}</Text>
                        <Text style={styles.statText}>MAX</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.snru : '---'}</Text>
                        <Text style={styles.statText}>SNR</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.attnu : '---'}</Text>
                        <Text style={styles.statText}>ATT</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.fecu : '---'}</Text>
                        <Text style={styles.statText}>FEC</Text>
                    </View>
                    <View style={styles.statRow}>
                        <Text style={styles.statValue}>{stats ? stats.crcu : '---'}</Text>
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