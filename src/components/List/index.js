import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';
// import {
//   itemListText,
//   itemListTextStrike,
//   circleInactive,
//   circleActive,
//   deleteIconColor,
// } from '../utils/Colors';

import { colors } from '~styles';

class List extends Component {
  onToggleCircle = () => {
    const {
      isCompleted, id, completeItem, incompleteItem,
    } = this.props;
    if (isCompleted) {
      incompleteItem(id);
    } else {
      completeItem(id);
    }
  };

  render() {
    const {
      text, deleteItem, id, isCompleted,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <TouchableOpacity onPress={this.onToggleCircle}>
            <View
              style={[
                styles.circle,
                isCompleted
                  ? { borderColor: colors.circleActive }
                  : { borderColor: colors.circleInactive },
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.text,
              isCompleted
                ? {
                  color: colors.itemListTextStrike,
                  textDecorationLine: 'line-through',
                }
                : { color: colors.itemListText },
            ]}
          >
            {text}
          </Text>
        </View>
        {isCompleted ? (
          <View style={styles.button}>
            {/* <TouchableOpacity onPressOut={() => deleteItem(id)}>
              <MaterialIcons name="delete-forever" size={24} color={colors.deleteIconColor} />
            </TouchableOpacity> */}
          </View>
        ) : null}
      </View>
    );
  }
}

export default List;
