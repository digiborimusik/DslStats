import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request } from './redux/actions';

import { RawDataDisplay } from './RawDataDisplay'

export const CurrentDataDisplay = () => {
    const someshit = useSelector(state => state.testReducer.someshitList);

    return (
        <View>
            <ScrollView style={styles.container}>
                <RawDataDisplay someshit={someshit} />
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        // backgroundColor:palette.babyPowder,
        borderColor: palette.babyPowder,
        borderWidth: 1,
        borderRadius: 4,
    }
})