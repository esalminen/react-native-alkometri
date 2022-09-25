import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import styles from './Styles';
import CustomRadiobutton from './components/CustomRadiobutton';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [selectedBottles, setSelectedBottles] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedGender, setSeletedGender] = useState('male');

  // Load custom font for app header
  const [fontLoaded] = useFonts({
    KauhanScriptReg: require('./assets/fonts/KaushanScript-Regular.ttf')
  });

  // Return null content if font is not properly loaded
  if (!fontLoaded) {
    return null;
  }

  // Create selections for bottles- and time-dropdownlist
  let numCount = [];
  for (let i = 1; i <= 24; i++) {
    numCount.push(i);
  }

  const radiobuttonOptions = [
    {
      label: 'Male',
      value: 'male'
    },
    {
      label: 'Female',
      value: 'female'
    }
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Alcometer </Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textrow}>Weight</Text>
        <TextInput
          style={styles.textInput} 
          value={weight}
          onChangeText={(value) => setWeight(+value)}
          placeholder='Input weight here'
          keyboardType='decimal-pad'
          />
        <Text style={styles.textrow}>Bottles</Text>
        <Picker
          selectedValue={selectedBottles}
          onValueChange={(itemValue, _) =>
            setSelectedBottles(itemValue)
          }>
          {
            numCount.map((bottleNo) => {
              let bottleText = bottleNo === 1 ? 'bottle' : 'bottles';
              return <Picker.Item key={bottleNo} label={`${bottleNo} ${bottleText}`} value={bottleNo}/>;
            })
          }
        </Picker>
        <Text style={styles.textrow}>Time</Text>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue, _) =>
            setSelectedTime(itemValue)
          }>
          {
            numCount.map((timeCount) => {
              let timeText = timeCount === 1 ? 'hour' : 'hours';
              return <Picker.Item key={timeCount} label={`${timeCount} ${timeText}`} value={timeCount}/>;
            })
          }
        </Picker>
        <Text style={styles.textrow}>Gender</Text>
        <CustomRadiobutton options={radiobuttonOptions} onPress={(value)=>setSeletedGender(value)}/>
        <Text style={styles.textResult}>RESULT</Text>
        <Button style={styles.button} title='Calculate'></Button>
        <Text>{`w:${weight} b: ${selectedBottles} t: ${selectedTime} g: ${selectedGender}`}</Text>
      </ScrollView>
    </View >
  );
}
