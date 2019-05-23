  
import React from 'react';
import { TextInput } from 'react-native';
import styles from "./styles"
import { colors } from "~\styles";

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
	<TextInput
		style={styles.input}
		value={inputValue}
		onChangeText={onChangeText}
		placeholder="Adicione a novidade..."
		placeholderTextColor={colors.inputPlaceholder}
		multiline={true}
		autoCapitalize="sentences"
		underlineColorAndroid= {colors.tranparent}
		selectionColor={colors.white}
		maxLength={30}
		returnKeyType="done"
		autoCorrect={false}
		blurOnSubmit={true}
		onSubmitEditing={onDoneAddItem}
	/>
);

export default Input;