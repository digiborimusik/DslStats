import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryZoomContainer, VictoryScatter, VictoryLabel, VictoryAxis } from "victory-native";
import palette from './modules/colorPalette';

export const Charts = (prop) => {


    const someshit = prop.someshit

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
                    y={(data) => {
                        return data.data.stats ? data.data.stats.rsCorrD : 0
                    }}
                />
                <VictoryBar
                    style={{ data: { fill: palette.minionYellow } }}
                    data={someshit}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? data.data.stats.rsCorrU : 0
                    }}
                />
            </VictoryChart>
            <VictoryChart
                theme={VictoryTheme.material}
                height={200}
                // domainPadding={{ y: 1 }}
                containerComponent={<VictoryZoomContainer zoomDimension="x" />}
            >
                <VictoryLine
                    style={{ data: { stroke: palette.minionYellow, } }}
                    data={someshit}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? data.data.stats.snrd : 1
                    }}
                />
                <VictoryLine
                    style={{ data: { stroke: palette.babyPowder, } }}
                    data={someshit}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? data.data.stats.snru : 1
                    }}
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