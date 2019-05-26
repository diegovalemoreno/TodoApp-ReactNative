import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';
import { colors } from '~styles';

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Adicione a novidade..."
    placeholderTextColor={colors.inputPlaceholder}
    multiline
    autoCapitalize="sentences"
    underlineColorAndroid={colors.tranparent}
    selectionColor={colors.white}
    maxLength={200}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit
    onSubmitEditing={onDoneAddItem}
  />
);

export default Input;
