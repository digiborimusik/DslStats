import React from 'react';
import { View , Text , StyleSheet , TouchableHighlight, TextInput } from 'react-native';
import palette from './modules/colorPalette';
import { useDispatch, useSelector } from 'react-redux';
import { set_interval } from './redux/actions';


export const NumericInput = (prop) => {

    const interval = useSelector(state => state.testReducer.options.interval);
    const status = useSelector(state => state.testReducer.status.isRun);

    const dispatch = useDispatch();

    return (
        <>
        <View style={[styles.wrapper,status ? {opacity:0.25} : null]}>
            <TouchableHighlight 
                disabled={status}
                style={[styles.parts]}
                underlayColor={palette.minionYellow}
                onPress={() => {
                    dispatch(set_interval(interval == 1 ? 1 : interval - 1))
                }}
            >
                <View style={styles.arrows} > 
                    <Text style={styles.arrowsText} >-</Text>
                </View>
            </TouchableHighlight>
            
            <View style={styles.parts} >
                <Text>{interval}sec</Text>
            </View>

            <TouchableHighlight 
                disabled={status}
                style={[styles.parts]}
                underlayColor={palette.minionYellow}
                onPress={() => {
                    dispatch(set_interval(interval + 1))
                }}
             >
                
                <View style={styles.arrows} > 
                    <Text style={styles.arrowsText} >+</Text>
                </View>
            </TouchableHighlight>
        </View>

        </>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:palette.babyPowder,
        minWidth:60,
        flexDirection:"row",
        borderWidth: 1,
        borderColor: palette.fluorescentBlue,
        borderRadius: 6,
        marginLeft:4,
        marginRight:4,
        shadowColor: palette.fluorescentBlue,
        elevation: 6,
    },
    parts:{
        minWidth:30,
        height:30,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',

    },
    margins:{
        marginLeft:2,
        marginRight:2
    },
    arrows:{
        // backgroundColor:palette.minionYellow,
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4

    },
    arrowsText:{
        // color:palette.babyPowder
    }
})