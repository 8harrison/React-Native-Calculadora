import { View, Text, StyleSheet } from 'react-native';
import { ValueContext } from './ValueContext';
import { useContext } from 'react';

export default function Display() {
  const { value } = useContext(ValueContext);
  return (
    <View style={style.displayContent}>
      <Text style={style.display}>{value}</Text>
    </View>
  );
}

const style = StyleSheet.create({
   displayContent: {
    paddingTop: '50%',
    alignContent: 'stretch',
    marginRight: 15,
    marginLeft: 15,
  },
  display: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 75,
    textAlign: 'right',
    backgroundColor: 'white',
    maxHeight: 90
  }
})
