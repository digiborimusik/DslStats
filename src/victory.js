import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryZoomContainer, VictoryScatter, VictoryLabel , VictoryAxis } from "victory-native";
import palette from './modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 13000 },
    { quarter: 6, earnings: 16500 },
    { quarter: 8, earnings: 19000 },
    { quarter: 9, earnings: 13000 },
    { quarter: 10, earnings: 16500 },
    { quarter: 11, earnings: 14250 },
    { quarter: 12, earnings: 19000 },
    { quarter: 13, earnings: 13000 },
    { quarter: 14, earnings: 16500 },
    { quarter: 20, earnings: 19000 },
];


export const Victory = () => {


    const someshit = useSelector(state => state.testReducer.someshitList);

    return (

        <View style={styles.container}>
            <VictoryChart
                theme={VictoryTheme.material}
                height={200}
                // domainPadding={{ y: 1 }}
                containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            >
                <VictoryBar
                    style={{ data: { fill: palette.babyPowder } }}
                    data={someshit}
                    x="data.date"
                    y="data.rand"
                />

            </VictoryChart>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:palette.pacificBlue,
    }
});