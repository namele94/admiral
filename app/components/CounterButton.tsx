import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../styles/colors';
import {BORDER_RADIUS} from '../styles/constants.ts';
import LinearView from './LinearView.tsx';

interface HorizontalCounterProps {
  value: number;
  plus: () => void;
  minus: () => void;
}

const CounterButton: React.FC<HorizontalCounterProps> = ({
  value = 0,
  plus,
  minus,
}) => {
  return (
    <LinearView>
      <View style={styles.container}>
        <TouchableOpacity
          hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
          style={[styles.button, styles.buttonLeft]}
          onPress={minus}>
          <Text style={[styles.buttonText, styles.leftBtnText]}>-</Text>
        </TouchableOpacity>

        <View style={styles.valueContainer}>
          <Text style={styles.valueText}>{value}</Text>
        </View>

        <TouchableOpacity
          hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
          style={styles.button}
          onPress={plus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </LinearView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderRadius: 10,
  },
  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 17,
    fontWeight: '700',
    color: COLORS.error,
  },
  valueContainer: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  valueText: {
    fontSize: 17,
    color: COLORS.black,
    fontWeight: '700',
  },
  buttonLeft: {},
  leftBtnText: {
    color: COLORS.black,
  },
});

export default CounterButton;
