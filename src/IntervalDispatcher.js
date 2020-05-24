import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request, run, stop, set_client, telnet_request_succed, telnet_request_failed } from './redux/actions';


const LineStatsLoader = require('./modules/LineStatsLoader')
const Dlink2640Client = require('./modules/Dlink2640Client')
const MiNanoClient = require('./modules/MiNanoClient')


export const IntervalDispatcher = (prop) => {
    const dispatch = useDispatch();
    console.log('RERENDER DESU')
    let client;
    switch (prop.client) {
        case 'Dlink2640u':
            client = new LineStatsLoader(Dlink2640Client)
            break;
        case 'MiNano':
            client = new LineStatsLoader(MiNanoClient)
            break;
        default:
            client = 'asd'
            break;
    }

    let interval;

    const [counterValue, setCounterValue] = useState(0);

    tickHandler = () => {
        setCounterValue(counterValue + 1)
        client.getStats()
        .then(a => {
            // console.log(a)
            dispatch(telnet_request_succed({ ...a, ...{ counter: counterValue, date: new Date() } }))
        })
        .catch(e => {
            dispatch(telnet_request_failed({ raw: e, ...{ counter: counterValue, date: new Date() } }))
        })
    }

    useEffect(() => {
        interval = setInterval(() => {
            console.log('tick')
            tickHandler()
        }, prop.ms);

        return function clear() {
            clearInterval(interval)
        }
    })

    return (
        <Text>{counterValue}</Text>
    )
}