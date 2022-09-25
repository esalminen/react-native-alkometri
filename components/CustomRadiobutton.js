import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

/**
 * Component displays radiobutton
 * @param options Array containing displayed texts and values for radiobutton options
 * @param onPress Used to forward selected value to the component using this radiobutton component
 */
export default function CustomRadiobutton({options, onPress}) {
  const [value, setValue] = useState(options[0].value);

  /**
   * Function for handling radiobutton selection. State variable is updated and selection is forwarded
   * to the component that is using this Radiobutton component using onPress props
   * @param selected Value of the radiobutton 
   */
  const handlePress = (selected) => {
    setValue(selected);
    onPress(selected);
  };

  return (
    <>
    {
      options.map((item) => (
        <View key={item.value} style={styles.buttonContainer}>
          <Text style={styles.label}>{item.label}</Text>
          <Pressable style={styles.circle} onPress={()=>handlePress(item.value)}>
            {value === item.value && <View style={styles.checkedCircle}/>}
          </Pressable>
        </View>
      ))
    }
    </>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30,
  },
  label: {
    marginRight: 10
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkedCircle: {
    width: 15,
    height: 15,
    borderRadius: 7,
    backgroundColor: '#000'
  }
});