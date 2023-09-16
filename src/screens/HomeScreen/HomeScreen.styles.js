import { StyleSheet } from "react-native";
import { COLORS } from '../../utils/theme';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.orange,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    text: {
      fontSize: 30,
      marginBottom: 10,
      color: COLORS.white
    },
    image: {
      width: 300,
      height: 300,
      marginBottom: 20,
      marginTop: 20
    },
    button: {
      borderRadius: 30,
      backgroundColor: COLORS.white,
      padding: 10,
      width: 200
    },
    buttonText: {
      color: COLORS.black,
      fontSize: 25,
      textAlign: 'center'
    }
  })