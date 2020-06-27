import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, processColor, LayoutAnimation } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import palette from './modules/colorPalette';

import { LineChart } from 'react-native-charts-wrapper';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

export const NewCharts = (prop) => {

    const someshit = useSelector(state => state.testReducer.someshitList);

    let dataset = someshit.map(item => {
        if(!item.data.stats){
            return null
        }
        return {
            y: item.data.stats ? Number(item.data.stats.snrd) : 0, 
            x: item.data ? Number((Date.parse(item.data.date)).toString().slice(4)) : {}
        }
    }).reverse()

    console.log(dataset)


    return (
        <View style={styles.container}>
            <LineChart style={styles.chart}
                data={{
                    dataSets: [
                        // {
                        //     values: [
                        //         {
                        //             y: 65,
                        //             x: 0,
                        //             marker: "65 kg"
                        //         },
                        //         {
                        //             y: 77,
                        //             x: 1,
                        //             marker: "77 kg"
                        //         },
                        //         {
                        //             y: 76,
                        //             x: 2,
                        //             marker: "76 kg"
                        //         },
                        //         {
                        //             y: 74,
                        //             x: 3,
                        //             marker: "74 kg"
                        //         },
                        //         {
                        //             y: 76,
                        //             x: 4,
                        //             marker: "76 kg"
                        //         },
                        //         {
                        //             y: 65,
                        //             x: 5,
                        //             marker: "Today: 65 kg"
                        //         }
                        //     ],
                        //     label: "",
                        //     config: {
                        //         mode: "CUBIC_BEZIER",
                        //         drawValues: false,
                        //         lineWidth: 2,
                        //         drawCircles: true,
                        //         circleColor: processColor(petrel),
                        //         drawCircleHole: false,
                        //         circleRadius: 5,
                        //         highlightColor: processColor("transparent"),
                        //         color: processColor(petrel),
                        //         drawFilled: true,
                        //         fillGradient: {
                        //             colors: [processColor(petrel), processColor(greenBlue)],
                        //             positions: [0, 0.5],
                        //             angle: 90,
                        //             orientation: "TOP_BOTTOM"
                        //         },
                        //         fillAlpha: 1000,
                        //         valueTextSize: 15
                        //     }
                        // },

                        {
                            values: dataset,
                            label: "",
                            config: {
                                mode: "CUBIC_BEZIER",
                                drawValues: false,
                                lineWidth: 1,
                                drawCircles: true,
                                circleColor: processColor("white"),
                                drawCircleHole: false,
                                circleRadius: 2,
                                highlightColor: processColor("white"),
                                color: processColor("white"),
                                drawFilled: true,
                                fillGradient: {
                                    colors: [processColor('white'), processColor('yellow')],
                                    positions: [0, 0.5],
                                    angle: 90,
                                    orientation: "TOP_BOTTOM"
                                },
                                fillAlpha: 1000,
                                valueTextSize: 15
                            }
                        }
                    ]
                }}

                chartDescription={{ text: "asdasd" }}
                legend={{
                    enabled: true
                }}
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
                    valueFormatterPattern: "HH:mm:ss"
                }}
                yAxis={{
                    left: {
                        enabled: false
                    },
                    right: {
                        enabled: false
                    }
                }}
                autoScaleMinMaxEnabled={true}
                animation={{
                    durationX: 0,
                    durationY: 1500,
                    easingY: "EaseInOutQuart"
                }}
                drawGridBackground={true}
                drawBorders={true}
                touchEnabled={true}
                dragEnabled={true}
                // scaleEnabled={true}
                scaleXEnabled={true}
                scaleYEnabled={false}
                pinchZoom={false}
                doubleTapToZoomEnabled={false}
                dragDecelerationEnabled={true}
                dragDecelerationFrictionCoef={0.99}
                keepPositionOnRotation={false}
                onChange={event => console.log(event.nativeEvent)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 300,
        backgroundColor: palette.pacificBlue
    },
    chart: {
        flex: 1
    }
});