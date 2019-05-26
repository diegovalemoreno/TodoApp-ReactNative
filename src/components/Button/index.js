import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '~styles';

const Button = ({ deleteAllItems }) => (
  <TouchableOpacity onPress={deleteAllItems}>
    <Icon
      name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
      color={colors.lighterWhite}
      size={25}
    />
    {/* <MaterialIcons name="delete-sweep" size={24} color={colors.lighterWhite} /> */}
  </TouchableOpacity>
);

export default Button;
