import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import palette from './src/modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something } from './src/redux/actions';
// import tlnt from './src/modules/tlnt';

const App = () => {

  const [someText, setSomeText] = useState('Hi there!');
  const [selectedValue, setSelectedValue] = useState("Dlink2640u");
  const [resultText, setResultText] = useState('Hi there!');


  const someshit = useSelector(state => state.testReducer.someshitList);
  const dispatch = useDispatch();
  console.log(someshit)

  // const stats = tlnt;
  // console.log(tlnt)
  // stats.getStats().then(a => console.log(a)).catch(err => console.log(err))

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={[styles.fullFlex, styles.mainBackgroundColor]}>
        <View style={styles.controlBar}>
          <TouchableOpacity style={styles.button}
            onPress={() => {
              dispatch(add_something('asd'))
            }} >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            mode='dropdown'
            label="blue"
            itemStyle={{ backgroundColor: 'lightgrey', marginLeft: 0, paddingLeft: 15 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Dlink2640u" value="Dlink2640u" />
            <Picker.Item label="MiNano" value="MiNano" />
          </Picker>
        </View>
        <View style={styles.resultArea}>
          <ScrollView >
            <Text style={styles.resultAreaText}>
              {someshit.map(el => {
                return el.name + ' ' + el.key + '\n' 
              })}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({
  fullFlex: {
    flex: 1
  },
  mainBackgroundColor: {
    backgroundColor: palette.babyPowder
  },
  controlBar: {
    backgroundColor: palette.richBlack,
    flexDirection: 'row',
    height: 40,
    alignContent: "center",
    alignItems: "center"
  },
  picker: {
    width: 150,
    height: 40,
    color: palette.pacificBlue
  },
  button: {
    backgroundColor: palette.minionYellow,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  resultArea: {
    backgroundColor: palette.babyPowder,
    color: palette.fluorescentBlue,
    height: 400,
    padding: 20

  },
  resultAreaText: {
    fontSize: 10
  }
});


// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     someshit: state.testReducer.someshitList
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (data) => dispatch(add_something(data))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;