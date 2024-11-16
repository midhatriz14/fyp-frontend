import React from 'react';
import { View, StyleSheet } from 'react-native';

interface CircleProps {
  size: number;
  style?: object;
}

const Circle: React.FC<CircleProps> = ({ size, style }) => (
  <View style={[styles.circle, { width: size, height: size }, style]} />
);

const CircleGroup: React.FC = () => {
  return (
    <View style={styles.container}>
      <Circle size={25} style={styles.topCircle} />
      <View style={styles.middleRow}>
        <Circle size={25} />
        <View style={styles.middleCircles}>
          <Circle size={29} />
          <View style={styles.bar} />
          <Circle size={25} />
        </View>
      </View>
      <View style={styles.bottomRow}>
        <Circle size={26} />
        <Circle size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  topCircle: {
    marginTop: 103,
  },
  middleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 22,
    width: 108,
  },
  middleCircles: {
    alignItems: 'center',
    marginLeft: 14,
  },
  bar: {
    width: 23,
    height: 3,
    backgroundColor: '#E0E0E0',
    marginVertical: 14,
  },
  bottomRow: {
    flexDirection: 'row',
    marginTop: 15,
    width: 69,
    justifyContent: 'space-between',
  },
});

export default CircleGroup;