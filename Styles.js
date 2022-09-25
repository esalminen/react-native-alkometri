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
  textResult: {
    fontWeight: '700',
    fontSize: 50,
    color: '#1666a6'
  },
  button: {
    borderRadius: 40,
    
  }
});