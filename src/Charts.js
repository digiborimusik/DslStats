import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect, useDispatch, useSelector } from 'react-redux';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryLine, VictoryZoomContainer, VictoryScatter, VictoryLabel, VictoryAxis, VictoryHistogram } from "victory-native";
import palette from './modules/colorPalette';
var _ = require('lodash');

export const Charts = (prop) => {

    const someshit = useSelector(state => state.testReducer.someshitList);
    const [zoomedXDomain, setZoomedXDomain] = useState(null);

    onDomainChange = (domain) => {
        setZoomedXDomain(domain.x)
    }

    getData = () => {
        const data = someshit;
        if (!zoomedXDomain) {
            return data
        }
        return data.filter(
            // is d "between" the ends of the visible x-domain?
            (d) => (d.data.date >= zoomedXDomain[0] && d.data.date <= zoomedXDomain[1]));
    }


    return (

        <View style={styles.container}>
            {/* <VictoryChart
                theme={VictoryTheme.material}
                height={200}
                // domainPadding={{ y: 1 }}
                containerComponent={<VictoryZoomContainer zoomDimension="x" onZoomDomainChange={onDomainChange} />}
                minDomain={{ y: 0 }}
                domain={{ x: [new Date((someshit[0] ? someshit[0].data.date : new Date() ) - 500000),someshit[0] ? someshit[0].data.date : new Date()]}}
                
            >
                <VictoryBar
                    style={{ data: { fill: palette.babyPowder } }}
                    data={getData()}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? Number(data.data.stats.rsCorrD) : 0
                    }}
                />
            </VictoryChart> */}
            <VictoryChart
                theme={VictoryTheme.material}
                height={200}
                // domainPadding={{ y: 1 }}
                containerComponent={<VictoryZoomContainer zoomDimension="x" onZoomDomainChange={onDomainChange} />}
                minDomain={{ y: 0 }}
                domain={{ x: [new Date((someshit[0] ? someshit[0].data.date : new Date() ) - 500000),someshit[0] ? someshit[0].data.date : new Date()]}}

            >
                <VictoryLine
                    style={{ data: { stroke: palette.minionYellow  } }}
                    data={getData()}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? Number(data.data.stats.snrd) : 0
                    }}
                />
                {/* <VictoryBar
                    style={{ data: { fill: palette.minionYellow } }}
                    data={someshit}
                    x="data.date"
                    y={(data) => {
                        return data.data.stats ? Number(data.data.stats.snru) : 0
                    }}
                    samples={5}
                /> */}
            </VictoryChart>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor:palette.pacificBlue,
    }
});