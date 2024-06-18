import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import { useContext } from 'react';
import { ValueContext } from './ValueContext';
import { digits, gradientButtons } from '../utils/digits';

export default function ButtonsCalc() {
  const { togleValue } = useContext(ValueContext);
  return (
    <View style={style.container}>
      {digits.map((digit) => (
        <TouchableOpacity style={style.button} title="digit button" key={digit} onPress={() => togleValue(digit)}>
          <LinearGradient style={style.linearGradient} colors={gradientButtons} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
            <Text style={style.textButton}>
              {digit}
              </Text>
              </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  button: {
    width: '20%',
    height: 110,
    borderWidth: 2,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textButton: {
    fontSize: 24,
    fontWeight: '700',
    color: 'rgb(192, 192, 192)',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
