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
import { AttBarCharts } from './AttBarCharts'
import { FecBarCharts } from './FecBarCharts'
import { CrcBarCharts } from './CrcBarCharts'

export const CurrentDataDisplay = () => {
    const someshit = useSelector(state => state.testReducer.someshitList);
    const status = useSelector(state => state.testReducer.status);

    const [showRaw, setShowRaw] = useState(false);
    const [showSnrBarCharts, setShowSnrBarCharts] = useState(false);
    const [showSnrLineCharts, setShowSnrLineCharts] = useState(true);
    const [showAttCharts, setShowAttCharts] = useState(false);
    const [showFecCharts, setShowFecCharts] = useState(true);
    const [showCrcCharts, setShowCrcCharts] = useState(false);

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
            <ScrollView horizontal={true} >
                <View style={{
                    flexDirection: 'row',
                    width:600,
                    // backgroundColor:'gray',
                    justifyContent: 'space-around'
                }}>
                    <Yoggler name={'RAW'} active={showRaw} action={() => setShowRaw(!showRaw)} />
                    <Yoggler name={'S-Bar'} active={showSnrBarCharts} action={() => setShowSnrBarCharts(!showSnrBarCharts)} />
                    <Yoggler name={'S-Line'} active={showSnrLineCharts} action={() => setShowSnrLineCharts(!showSnrLineCharts)} />
                    <Yoggler name={'A-Bar'} active={showAttCharts} action={() => setShowAttCharts(!showAttCharts)} />
                    <Yoggler name={'F-Bar'} active={showFecCharts} action={() => setShowFecCharts(!showFecCharts)} />
                    <Yoggler name={'C-Bar'} active={showCrcCharts} action={() => setShowCrcCharts(!showCrcCharts)} />
                    <Yoggler name={'A-Line'} active={showAttCharts} action={() => setShowAttCharts(!showAttCharts)} />
                    <Yoggler name={'F-Line'} active={showFecCharts} action={() => setShowFecCharts(!showFecCharts)} />
                    <Yoggler name={'C-Line'} active={showCrcCharts} action={() => setShowCrcCharts(!showCrcCharts)} />
                </View>
            </ScrollView>

        )
    }

    return (

        <View style={{ flex: 1 }}>
            <View style={[styles.topBar, status.isRun ? { backgroundColor: palette.minionYellow } : null]}>
                <Text style={styles.topBarText}>{status.isRun ? 'Sampling started' : 'Sampling idle'}</Text>
                <Text style={styles.topBarText}>{status.isRun ? status.date.toTimeString() : null}</Text>
            </View>
            <ScrollView>
                <ParsedStatsBar someshit={someshit} />

                <YoglerBar />




                {showRaw ? <RawDataDisplay someshit={someshit} /> : null}

                {showSnrBarCharts ? <SnrBarCharts someshit={someshit} /> : null}
                {showSnrLineCharts ? <SnrLineCharts someshit={someshit} /> : null}
                {showAttCharts ? <AttBarCharts someshit={someshit} /> : null}
                {showFecCharts ? <FecBarCharts someshit={someshit} /> : null}
                {showCrcCharts ? <CrcBarCharts someshit={someshit} /> : null}

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