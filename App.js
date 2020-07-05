import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity } from 'react-native';
import palette from './src/modules/colorPalette';
import { connect, useDispatch, useSelector } from 'react-redux';
import { add_something, telnet_request } from './src/redux/actions';

import {ControlBar} from './src/ControlBar';
import {CurrentDataDisplay} from './src/CurrentDataDisplay';

const App = () => {

	const status = useSelector(state => state.testReducer.status);

	// console.log('LATEST', someshit[someshit.length - 1])

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor={status.isRun ? palette.minionYellow : palette.babyPowder} />
			<SafeAreaView style={[styles.safeArea]}>
				<View style={[styles.contentSubArea]}>
					<CurrentDataDisplay />
				</View>
				<View style={[styles.controlSubArea]}>
					<ControlBar />
				</View>
			</SafeAreaView>
		</>
	);
};



const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: palette.richBlack
	},
	contentSubArea:{
		flex: 100,
	},
	controlSubArea:{
		flex: 1,
		// minHeight:60,
		flexBasis:40,
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