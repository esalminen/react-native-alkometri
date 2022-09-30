import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeader: {
    textAlign: 'center',
    fontFamily: 'KauhanScriptReg',
    fontSize: 40,
    color: '#28aaff'
  },
  scrollView: {
    width: '100%',
    padding: 20
  },
  textInput:  {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20
  },
  textrow: {
    fontWeight: '600',
    fontSize: 20,
    marginTop: 20,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
  },
  textResult: {
    fontWeight: '700',
    fontSize: 50,
    textAlign: 'center',
  },
  textHint: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  result: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 20
  },
  resultColorOk: {
    backgroundColor: 'green'
  },
  resultColorWarning: {
    backgroundColor: 'yellow'
  },
  resultColorAlert: {
    backgroundColor: 'red'
  },
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