import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request } from './redux/actions';

import { RawDataDisplay } from './RawDataDisplay'
import { ParsedStatsBar } from './ParsedStatsBar'
// import { YoglerBar } from './YoglerBar'
import { SnrBarCharts } from './SnrBarCharts'
import { SnrLineCharts } from './SnrLineCharts'
import { FecDifCharts } from './FecDifCharts'
import { CrcDifCharts } from './CrcDifCharts'
import { AttLineCharts } from './AttLineCharts'

export const CurrentDataDisplay = () => {
    // const someshit = useSelector(state => state.testReducer.someshitList);
    const status = useSelector(state => state.testReducer.status);

    const [showRaw, setShowRaw] = useState(false);
    const [showSnrBarCharts, setShowSnrBarCharts] = useState(false);
    const [showSnrLineCharts, setShowSnrLineCharts] = useState(true);

    const [showFecDifCharts, setShowFecDifCharts] = useState(true);
    const [showCrcDifCharts, setShowCrcDifCharts] = useState(false);

    const [showAttLineCharts, setShowAttLineCharts] = useState(false);

    const Yoggler = (prop) => {

        return (
            <TouchableHighlight
                onPress={prop.action}
                underlayColor={palette.minionYellow}
            >
                <View style={{
                    margin: 8,
                    alignItems: 'center'
                }}>
                    <Text style={[{ fontSize: 12 }, prop.active ? {
                        color: palette.minionYellow, textShadowColor: palette.minionYellow,
                        textShadowRadius: 4
                    } : { color: palette.babyPowder }]} >{prop.name}</Text>
                    <View style={[{ height: 5, width: 5, borderRadius: 5, margin: 4 }, prop.active ? { backgroundColor: palette.minionYellow } : { backgroundColor: palette.babyPowder }]}></View>
                </View>
            </TouchableHighlight>

        )
    }

    const YoglerBar = () => {
        return (
            // <ScrollView horizontal={true} >
                <View style={{
                    flexDirection: 'row',
                    // width:600,
                    // backgroundColor:'gray',
                    justifyContent: 'space-around'
                }}>
                    <Yoggler name={'RAW'} active={showRaw} action={() => setShowRaw(!showRaw)} />
                    <Yoggler name={'SNRM-Line'} active={showSnrLineCharts} action={() => setShowSnrLineCharts(!showSnrLineCharts)} />
                    <Yoggler name={'FEC-Dif'} active={showFecDifCharts} action={() => setShowFecDifCharts(!showFecDifCharts)} />
                    <Yoggler name={'CRC-Dif'} active={showCrcDifCharts} action={() => setShowCrcDifCharts(!showCrcDifCharts)} />
                    <Yoggler name={'ATT-Line'} active={showAttLineCharts} action={() => setShowAttLineCharts(!showAttLineCharts)} />
                </View>
            // </ScrollView>

        )
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={[styles.topBar, status.isRun ? { backgroundColor: palette.minionYellow } : null]}>
                <Text style={styles.topBarText}>{status.isRun ? 'Sampling started' : 'Sampling idle'}</Text>
                <Text style={styles.topBarText}>{status.isRun ? status.date.toTimeString() : null}</Text>
            </View>
            <ScrollView>
                <ParsedStatsBar />

                <YoglerBar />

                {showRaw ? <RawDataDisplay /> : null}

                {showSnrBarCharts ? <SnrBarCharts  /> : null}
                {showSnrLineCharts ? <SnrLineCharts  /> : null}
                {showFecDifCharts ? <FecDifCharts  /> : null}
                {showCrcDifCharts ? <CrcDifCharts  /> : null}
                {showAttLineCharts? <AttLineCharts  /> : null}

            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: palette.babyPowder,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topBarText: {
        color: palette.richBlack,
        fontWeight: 'bold',
        fontSize: 16,
        padding: 6
    }
})