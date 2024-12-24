import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, ViewStyle} from 'react-native';
import COLORS from '../styles/colors';

interface LinearViewProps {
  containerStyle?: ViewStyle;
  children?: React.ReactNode;
}

const LinearView: React.FC<LinearViewProps> = ({containerStyle, children}) => {
  return (
    <LinearGradient
      colors={[COLORS.primary, '#4CAF50']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[styles.gradient, containerStyle]}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 12,
  },
});

export default LinearView;
