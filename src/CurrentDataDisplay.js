import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request } from './redux/actions';

import { RawDataDisplay } from './RawDataDisplay'
import { ParsedStatsBar } from './ParsedStatsBar'
import { Charts } from './Charts'

export const CurrentDataDisplay = () => {
    const someshit = useSelector(state => state.testReducer.someshitList);
    const status = useSelector(state => state.testReducer.status);

    const showRaw = useSelector(state => state.testReducer.viewParameters.showRaw);
    const showCharts = useSelector(state => state.testReducer.viewParameters.showCharts);

    return (

        <View>
            <View style={[styles.topBar, status.isRun ? {backgroundColor:palette.minionYellow} : null]}>
                <Text style={styles.topBarText}>{status.isRun ? 'Sampling started' : 'Sampling idle'}</Text>
                <Text style={styles.topBarText}>{status.isRun ? status.date.toTimeString() : null}</Text>
            </View>
            
            <ParsedStatsBar someshit={someshit} />
            
            {showRaw ? <RawDataDisplay someshit={someshit} /> : null }

            {showCharts ? <Charts someshit={someshit} /> : null }
            
        </View>

    )
}

const styles = StyleSheet.create({
    topBar:{
        backgroundColor:palette.babyPowder,
        height:40,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    topBarText:{
        color:palette.richBlack,
        fontWeight:'100',
        padding:6
    }
})