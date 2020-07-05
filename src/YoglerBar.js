import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Modal, TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { show_raw, show_snrcharts , show_attcharts , show_errorscharts} from './redux/actions';


export const YoglerBar = () => {

    const showRaw = useSelector(state => state.testReducer.viewParameters.showRaw);
    const showSnrCharts = useSelector(state => state.testReducer.viewParameters.showSnrCharts);
    const showAttCharts = useSelector(state => state.testReducer.viewParameters.showAttCharts);
    const showErrorsCharts = useSelector(state => state.testReducer.viewParameters.showErrorsCharts);

    const dispatch = useDispatch();


    const Toggler = (prop) => {


        return (
            <TouchableHighlight
                onPress={prop.action}
                underlayColor={palette.minionYellow}
            >
                <View style={styles.toggler}>
                    <Text style={[{fontSize:12},prop.active ? {color:palette.minionYellow} : {color:palette.babyPowder}]} >{prop.name}</Text>
                    <View style={[{height:5,width:5,borderRadius:5,margin:4},prop.active ? {backgroundColor:palette.minionYellow} : {backgroundColor:palette.babyPowder}]}></View>
                </View>
            </TouchableHighlight>
            
        )
    }

    return (
        <>
            
            <View style={styles.container}>
                <Toggler name={'RAW'} active={showRaw} action={() => { dispatch(show_raw()) }} />
                <Toggler name={'SNR-Bar'} active={showSnrCharts} action={() => { dispatch(show_snrcharts()) }} />
                <Toggler name={'ATT'} active={false} />
                <Toggler name={'FEC'} active={true} />
                <Toggler name={'CRC'} active={true} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor:palette.pacificBlue,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    toggler:{
        margin:8,
        alignItems:'center'
    }
})