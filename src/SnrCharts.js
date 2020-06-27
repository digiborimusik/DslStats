import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, processColor, LayoutAnimation } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import palette from './modules/colorPalette';

import { BarChart } from 'react-native-charts-wrapper';

const greenBlue = "rgb(26, 182, 151)";
const petrel = "rgb(59, 145, 153)";

export const SnrCharts = (prop) => {

    const someshit = useSelector(state => state.testReducer.someshitList);

    let dataset = someshit.map(item => {
        if (!item.data.stats) {
            return null
        }
        return {
            y: item.data.stats ? Number(item.data.stats.snrd) : 0,
            x: item.data ? Number((Date.parse(item.data.date)).toString().slice(4)) : {}
        }
    }).reverse()

    console.log(dataset)

    const [legend, setLegend] = useState({
        enabled: false,
        textSize: 14,
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5
    });
    const [data, setData] = useState({
        dataSets: [{
            values: dataset,
            label: 'Bar dataSet',
            config: {
                color: processColor('teal'),
                barShadowColor: processColor('lightgrey'),
                highlightAlpha: 90,
                highlightColor: processColor('red'),
            }
        }],

        config: {
            barWidth: 0.7,
        }
    });
    const [highlights, setHighlights] = useState([{ x: 3 }, { x: 6 }]);
    const [xAxis, setXAxis] = useState({
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
    });


    return (
        <View style={styles.container}>
            <BarChart
                style={styles.chart}
                data={data}
                xAxis={xAxis}
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
                legend={legend}
                gridBackgroundColor={processColor('#ffffff')}
                // visibleRange={{x: { min: 5, max: 5 }}}
                drawBarShadow={false}
                drawValueAboveBar={true}
                drawHighlightArrow={true}
                highlights={highlights}
                onChange={(event) => console.log(event.nativeEvent)}
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