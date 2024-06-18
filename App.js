 
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'

import ButtonsCalc from './components/ButtonsCalc';
import Display from './components/Display'
import { ValueProvider } from './components/ValueContext';
import {gradientColors} from './utils/digits'


export default function App() {
  return (
    <ValueProvider >
      <ScrollView>
        <LinearGradient colors={gradientColors} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
          <Display />
          <View style={style.buttonsContent}>
            <ButtonsCalc />
          </View>
          </LinearGradient>
      </ScrollView>
    </ValueProvider>
  );
}

const style = StyleSheet.create({
  buttonsContent: {
    alignItems: 'center',
    paddingTop: '15%',
    paddingBottom: '5%',
    height: '100%'
  }
});
