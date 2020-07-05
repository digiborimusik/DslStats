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
    const [yRange, setYrange] = useState(5);


    let snrd_dataset = someshit.map(item => {
        
        if (!item.data.stats) {
            return null
        }

        let numA = Number(someshit[someshit.length - 1].data.dateNumberic.toString().slice(4, 10)) - yRange * 60;
        let numB = Number(item.data.dateNumberic.toString().slice(4, 10))

        if(numA > numB){
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

        if(numA > numB){
            return
        }

        return {
            y: item.data.stats ? Number(item.data.stats.snru) : 0,
            x: item.data ? Number(item.data.dateNumberic.toString().slice(4, 10)) : {}
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>SNR Signal to noise margin</Text>
            <BarChart
                style={styles.chart}
                data={{
                    dataSets: [{
                        values: snrd_dataset,
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
                chartDescription={{ text: "DOWNLOAD SINGAL TO NOISE MARGIN", textColor: processColor("black") }}
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
                maxVisibleValueCount={200}

            />
            <BarChart
                style={styles.chart}
                data={{
                    dataSets: [{
                        values: snru_dataset,
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
                chartDescription={{ text: "UPLOAD SINGAL TO NOISE MARGIN", textColor: processColor("black") }}
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
                maxVisibleValueCount={200}

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
    },
    heading:{
        color:palette.babyPowder
    }

});