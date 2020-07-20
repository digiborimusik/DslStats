import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, processColor, LayoutAnimation } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import palette from './modules/colorPalette';

import { LineChart } from 'react-native-charts-wrapper';

import ExpandSvg from "./svg/expand.svg";

export const SnrLineCharts = (prop) => {
    const someshit = prop.someshit
    // const someshit = useSelector(state => state.testReducer.someshitList);
    const [yRange, setYrange] = useState(0.5);
    const [expandHeight, setExpandHeight] = useState(false);


    let snrd_dataset = someshit.map(item => {

        if (!item.data.stats) {
            return null
        }

        let numA = Number(someshit[someshit.length - 1].data.dateNumberic.toString().slice(4, 10)) - yRange * 60;
        let numB = Number(item.data.dateNumberic.toString().slice(4, 10))

        if (numA > numB) {
            return
        }

        return {
            y: item.data.stats ? Number(item.data.stats.snrd) : 0,
            x: item.data ? Number(item.data.dateNumberic.toString().slice(4, 10)) : {}
        }
    })

    let snru_dataset = someshit.map(item => {
        if (!item.data.stats) {
            return null
        }

        let numA = Number(someshit[someshit.length - 1].data.dateNumberic.toString().slice(4, 10)) - yRange * 60;
        let numB = Number(item.data.dateNumberic.toString().slice(4, 10))

        if (numA > numB) {
            return
        }

        return {
            y: item.data.stats ? Number(item.data.stats.snru) : 0,
            x: item.data ? Number(item.data.dateNumberic.toString().slice(4, 10)) : {}
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
                    }}>SINGAL TO NOISE MARGIN</Text>
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
            <LineChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: snrd_dataset,
                        label: 'Download',
                        config: {
                            color: processColor(palette.minionYellow),
                            valueTextColor: processColor(palette.minionYellow),
                            drawValues: true,
                            drawCircleHole: false,
                            circleRadius: 1,
                        }
                    },
                    {
                        values: snru_dataset,
                        label: 'UPLOAD',
                        config: {
                            color: processColor(palette.pacificBlue),
                            valueTextColor: processColor(palette.babyPowder),
                            drawValues: true,
                            drawCircleHole: false,
                            circleRadius: 1,
                        }
                    }],
                    config: {
                        barWidth: 1,
                    }
                }}

                marker={{
                    enabled: false,
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
                    maxSizePercent: 0.5,
                    verticalAlignment: "BOTTOM",
                    horizontalAlignment: "RIGHT",
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
                maxVisibleValueCount={100}
                noDataText={'NO DATA'}

            />

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 8 }}>
                    <View style={{height:10,width:10,marginLeft:8,backgroundColor:palette.minionYellow}} ></View>
                    <Text style={{fontSize: 10, textShadowRadius: 4,color:palette.babyPowder,padding: 8}} >download</Text>
                    <View style={{height:10,width:10,marginLeft:8,backgroundColor:palette.pacificBlue}} ></View>
                    <Text style={{fontSize: 10, textShadowRadius: 4,color:palette.babyPowder,padding: 8}} >upload</Text>
                </View>
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

        </View>
    )
}

