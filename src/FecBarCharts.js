import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, processColor, LayoutAnimation } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import palette from './modules/colorPalette';

import { BarChart } from 'react-native-charts-wrapper';

import ExpandSvg from "./svg/expand.svg";

export const FecBarCharts = (prop) => {
    const someshit = prop.someshit
    // const someshit = useSelector(state => state.testReducer.someshitList);
    const [yRange, setYrange] = useState(0.5);
    const [expandHeight, setExpandHeight] = useState(false);


    let fecd_dataset = someshit.map(item => {

        if (!item.data.stats) {
            return null
        }

        let numA = Number(someshit[someshit.length - 1].data.dateNumberic.toString().slice(4, 10)) - yRange * 60;
        let numB = Number(item.data.dateNumberic.toString().slice(4, 10))

        if (numA > numB) {
            return
        }

        return {
            y: item.data.stats ? Number(item.data.stats.fecd) : 0,
            x: item.data ? Number(item.data.dateNumberic.toString().slice(3,10)) - 19200  : {}
        }
    })

    // let fecd_dif_dataset = [];

    // for (let index = 0; index < fecd_dataset.length - 1; index++) {
    //     if (fecd_dataset[index + 1] && fecd_dataset[index] && fecd_dataset[index].y && fecd_dataset[index + 1].y) {
    //         fecd_dif_dataset.push({
    //             x:fecd_dataset[index].x,
    //             y:fecd_dataset[index + 1].y - fecd_dataset[index].y,
    //         })
    //     } else {
    //        console.log(fecd_dataset[index], fecd_dataset[index + 1])
    //     }
        
    // }
    // console.log(fecd_dif_dataset)
    

    let fecu_dataset = someshit.map(item => {
        if (!item.data.stats) {
            return null
        }

        let numA = Number(someshit[someshit.length - 1].data.dateNumberic.toString().slice(4, 10)) - yRange * 60;
        let numB = Number(item.data.dateNumberic.toString().slice(4, 10))

        if (numA > numB) {
            return
        }

        return {
            y: item.data.stats ? Number(item.data.stats.fecu) : 0,
            x: item.data ? Number(item.data.dateNumberic.toString().slice(3,10)) - 19200  : {}
        }
    })

    return (
        <View style={[
            { backgroundColor: palette.richBlack },
            expandHeight ? { height: 300 } : { height: 200 }
        ]}>
            <View style={{ flexDirection: 'row', padding: 16 }}>
                <View style={{ flexDirection: 'row', flex: 1 }} >
                    <Text style={{
                        color: palette.babyPowder,
                        fontWeight: 'bold'
                    }}>RS CORRECTABLE / FEC</Text>
                </View>
                <TouchableOpacity 
                
                onPress={() => setExpandHeight(!expandHeight)} 
                style={{
                    flexDirection: 'row',
                     justifyContent: 'flex-end',
                      alignItems: 'center' 
                    }} 
                
                >
                    <ExpandSvg fill={palette.fluorescentBlue} style={{ height: 12, width: 12 }} />
                </TouchableOpacity>
            </View>
            <BarChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: fecd_dataset,
                        label: 'Download',
                        config: {
                            color: processColor(palette.fluorescentBlue),
                            valueTextColor: processColor(palette.babyPowder),
                            drawValues: true
                        }
                    }],
                    config: {
                        barWidth: 1,
                    }
                }}
                chartDescription={{ text: "DOWNLOAD FEC", textColor: processColor("black") }}
                marker={{
                    enabled: true,
                    markerColor: processColor("white"),
                    textColor: processColor("black")
                }}
                xAxis={{
                    enabled: true,
                    granularity: 0,
                    drawLabels: true,
                    position: "BOTTOM",
                    drawAxisLine: true,
                    drawGridLines: true,
                    fontFamily: "HelveticaNeue-Medium",
                    fontWeight: "normal",
                    textSize: 10,
                    textColor: processColor("white"),
                    valueFormatter: 'date',
                    valueFormatterPattern: "HH:mm:ss",
                    since: 0,
                    timeUnit: "SECONDS",
                    // axisMinimum: snrd_dataset[300].x

                }}
                yAxis={{

                    left: {
                        enabled: false,
                        axisMinimum: 0

                    },
                    right: {
                        enabled: true,
                        textColor: processColor("white"),
                        axisMinimum: 0
                    }
                }}
                autoScaleMinMaxEnabled={false}
                animation={{
                    durationX: 500,
                    durationY: 250,
                    easingY: "EaseInOutQuart"
                }}
                legend={{
                    enabled: false,
                    textColor: processColor(palette.babyPowder),
                    textSize: 12,
                    form: 'SQUARE',
                    formSize: 10,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5
                }}
                gridBackgroundColor={processColor('#ffffff')}
                drawBarShadow={false}
                drawValueAboveBar={true}
                drawHighlightArrow={false}
                highlights={[]}
                scaleXEnabled={true}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
                maxVisibleValueCount={50}

            />
            <BarChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: fecu_dataset,
                        label: 'Upload',
                        config: {
                            color: processColor(palette.fluorescentBlue),
                            valueTextColor: processColor(palette.babyPowder),
                            drawValues: true
                        }
                    }],
                    config: {
                        barWidth: 1,
                    }
                }}
                chartDescription={{ text: "UPLOAD FEC", textColor: processColor("black") }}
                marker={{
                    enabled: true,
                    markerColor: processColor("white"),
                    textColor: processColor("black")
                }}
                xAxis={{
                    enabled: true,
                    granularity: 0,
                    drawLabels: true,
                    position: "BOTTOM",
                    drawAxisLine: true,
                    drawGridLines: true,
                    fontFamily: "HelveticaNeue-Medium",
                    fontWeight: "normal",
                    textSize: 10,
                    textColor: processColor("white"),
                    valueFormatter: 'date',
                    valueFormatterPattern: "HH:mm:ss",
                    since: 0,
                    timeUnit: "SECONDS"

                }}
                yAxis={{

                    left: {
                        enabled: false,
                        axisMinimum: 0,

                    },
                    right: {
                        enabled: true,
                        textColor: processColor("white"),
                        axisMinimum: 0,
                        
                    }
                }}
                autoScaleMinMaxEnabled={false}
                animation={{
                    durationX: 500,
                    durationY: 250,
                    easingY: "EaseInOutQuart"
                }}
                legend={{
                    enabled: false,
                    textColor: processColor(palette.babyPowder),
                    textSize: 12,
                    form: 'SQUARE',
                    formSize: 10,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5
                }}
                gridBackgroundColor={processColor('#ffffff')}
                drawBarShadow={false}
                drawValueAboveBar={true}
                drawHighlightArrow={false}
                highlights={[]}
                scaleXEnabled={true}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
                maxVisibleValueCount={50}

            />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', padding: 8 }} >
                <TouchableOpacity onPress={() => setYrange(0.5)}>
                    <Text style={[
                        { fontSize: 10, textShadowRadius: 4, paddingRight: 8 },
                        yRange == 0.5 ? { color: palette.minionYellow, textShadowColor: palette.minionYellow } : { color: palette.pacificBlue }
                    ]
                    } >30S</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setYrange(5)}>
                    <Text style={[
                        { fontSize: 10, textShadowRadius: 4, paddingRight: 8 },
                        yRange == 5 ? { color: palette.minionYellow, textShadowColor: palette.minionYellow } : { color: palette.pacificBlue }
                    ]
                    } >5MIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setYrange(30)}>
                    <Text style={[
                        { fontSize: 10, textShadowRadius: 4, paddingRight: 8 },
                        yRange == 30 ? { color: palette.minionYellow, textShadowColor: palette.minionYellow } : { color: palette.pacificBlue }
                    ]
                    } >30MIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setYrange(60)}>
                    <Text style={[
                        { fontSize: 10, textShadowRadius: 4, paddingRight: 8 },
                        yRange == 60 ? { color: palette.minionYellow, textShadowColor: palette.minionYellow } : { color: palette.pacificBlue }
                    ]
                    } >1H</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

