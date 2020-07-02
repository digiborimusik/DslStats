import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, processColor, LayoutAnimation } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import palette from './modules/colorPalette';

import { BarChart } from 'react-native-charts-wrapper';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

export const SnrBarCharts = (prop) => {
    const someshit = prop.someshit
    // const someshit = useSelector(state => state.testReducer.someshitList);

    let snrd_dataset = someshit.map(item => {
        if (!item.data.stats) {
            return null
        }
        return {
            y: item.data.stats ? Number(item.data.stats.snrd) : 0,
            x: item.data ? Number((Date.parse(item.data.date)).toString().slice(4,10)) : {}
        }
    })

    // console.log(snrd_dataset)
    
    let snru_dataset = someshit.map(item => {
        if (!item.data.stats) {
            return null
        }
        return {
            y: item.data.stats ? Number(item.data.stats.snru) : 0,
            x: item.data ? Number((Date.parse(item.data.date)).toString().slice(4,10)) : {}
        }
    })

    return (
        <View style={styles.container}>
            <BarChart
                style={styles.chart}
                data={{
                    dataSets: [{
                        values: snrd_dataset,
                        label: 'snrd',
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
                chartDescription={{ text: "Noise level", textColor: processColor("white") }}
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
                    textSize: 12,
                    textColor: processColor("white"),
                    valueFormatter: 'date',
                    valueFormatterPattern: "HH:mm:ss",
                    since: 0,
                    timeUnit: "SECONDS",
                }}
                yAxis={{
                    left: {
                        enabled: false
                    },
                    right: {
                        enabled: true,
                        textColor: processColor("white"),
                    }
                }}
                autoScaleMinMaxEnabled={true}
                animation={{
                    durationX: 500,
                    durationY: 250,
                    easingY: "EaseInOutQuart"
                }}
                legend={{
                    enabled: false,
                    textColor: processColor(palette.babyPowder),
                    textSize: 10,
                    form: 'SQUARE',
                    formSize: 10,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5
                }}
                gridBackgroundColor={processColor('#ffffff')}
                // visibleRange={{x: { min: 5, max: 5 }}}
                drawBarShadow={false}
                drawValueAboveBar={true}
                drawHighlightArrow={false}
                highlights={[]}
                scaleXEnabled={true}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
            />
            <BarChart
                style={styles.chart}
                data={{
                    dataSets: [{
                        values: snru_dataset,
                        label: 'snru',
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
                chartDescription={{ text: "Noise level", textColor: processColor("white") }}
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
                    textSize: 12,
                    textColor: processColor("white"),
                    valueFormatter: 'date',
                    valueFormatterPattern: "HH:mm:ss",
                    since: 0,
                    timeUnit: "SECONDS",
                }}
                yAxis={{
                    left: {
                        enabled: false
                    },
                    right: {
                        enabled: true,
                        textColor: processColor("white"),
                    }
                }}
                autoScaleMinMaxEnabled={true}
                animation={{
                    durationX: 500,
                    durationY: 250,
                    easingY: "EaseInOutQuart"
                }}
                legend={{
                    enabled: false,
                    textColor: processColor(palette.babyPowder),
                    textSize: 10,
                    form: 'SQUARE',
                    formSize: 10,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5
                }}
                gridBackgroundColor={processColor('#ffffff')}
                // visibleRange={{x: { min: 5, max: 5 }}}
                drawBarShadow={false}
                drawValueAboveBar={true}
                drawHighlightArrow={false}
                highlights={[]}
                scaleXEnabled={true}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: palette.richBlack
    },
    chart: {
        flex: 1
    }
});