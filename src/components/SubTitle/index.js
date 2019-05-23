import React from 'react';
import { View, Text, } from 'react-native';
// import { lighterWhite } from '../utils/Colors';
import styles from './styles';

const SubTitle = ({ subtitle }) => (
	<View>
		<Text style={styles.titleText}>{subtitle.toUpperCase()}</Text>
	</View>	
);

export default SubTitle;