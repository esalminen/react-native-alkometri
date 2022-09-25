import { Alert, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import styles from './Styles';
import CustomRadiobutton from './components/CustomRadiobutton';

export default function App() {
  // state variables
  const [weight, setWeight] = useState(null);
  const [selectedBottles, setSelectedBottles] = useState(1);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedGender, setSeletedGender] = useState('male');
  const [permille, setPermille] = useState(0.0);
  const [resultHint, setResultHint] = useState('');

  // load custom font for app header
  const [fontLoaded] = useFonts({
    KauhanScriptReg: require('./assets/fonts/KaushanScript-Regular.ttf')
  });

  // return null content if font is not properly loaded
  if (!fontLoaded) {
    return null;
  }

  // create selections for bottles- and time-dropdownlist
  let numCount = [];
  for (let i = 1; i <= 24; i++) {
    numCount.push(i);
  }

  // create gender options. Sorry for being old-fashioned with only two genders.
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

  /**
   * calculates approximate blood alcohol level by taking inputted values and places result on to the permille variable 
   */
  const calculatePermille = () => {
    // show warning if weight is not inserted
    if (!weight) {
      Alert.alert('Please input weight');
      return;
    }

    // assumption is that alcohol is consumed in 0.33 l bottle which is 4.5 % alcohol
    const litres = selectedBottles * 0.33;
    const alcoholGrams = litres * 8 * 4.5;
    const burningRate = weight / 10;
    const alcoholNotBurned = alcoholGrams - burningRate * selectedTime;
    const genderFactor = selectedGender === 'male' ? 0.7 : 0.6;
    const permille = alcoholNotBurned / (weight * genderFactor);
    setResultHint(permille <= 0 ? 'It is safe to drive' : permille < 0.5 ? 'It is legal to drive but please dont' : 'DO NOT DRIVE!');
    setPermille(permille < 0 ? 0 : permille);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Alcometer </Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.textrow}>Weight kg</Text>
        <TextInput
          style={styles.textInput}
          value={weight}
          onChangeText={(value) => setWeight(+value)}
          placeholder='Input weight here'
          keyboardType='decimal-pad'
        />
        <Text style={styles.textrow}>Bottles</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedBottles}
            onValueChange={(itemValue, _) =>
              setSelectedBottles(itemValue)
            }>
            {
              numCount.map((bottleNo) => {
                let bottleText = bottleNo === 1 ? 'bottle' : 'bottles';
                return <Picker.Item key={bottleNo} label={`${bottleNo} ${bottleText}`} value={bottleNo} />;
              })
            }
          </Picker>
        </View>
        <Text style={styles.textrow}>Time</Text>
        <View style={styles.picker}>
          <Picker
            selectedValue={selectedTime}
            onValueChange={(itemValue, _) =>
              setSelectedTime(itemValue)
            }>
            {
              numCount.map((timeCount) => {
                let timeText = timeCount === 1 ? 'hour' : 'hours';
                return <Picker.Item key={timeCount} label={`${timeCount} ${timeText}`} value={timeCount} />;
              })
            }
          </Picker>
        </View>
        <Text style={styles.textrow}>Gender</Text>
        <CustomRadiobutton options={radiobuttonOptions} onPress={(value) => setSeletedGender(value)} />
        <View style={[
            permille <= 0 && styles.resultColorOk,
            permille > 0 && styles.resultColorWarning,
            permille > 0.5 && styles.resultColorAlert]}>
          <Text style={styles.textResult}>{`${permille.toFixed(2)} ‰`}</Text>
          <Text style={styles.textHint}>{resultHint}</Text>
        </View>
        <Button style={styles.button} title='Calculate' onPress={calculatePermille}/>
      </ScrollView>
    </View >
  );
}
