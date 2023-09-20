import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: -100,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
    top: 50,
    bottom: 0,
    right: 0,
  },

  image: {
    width: '100%',
    height: '100%',
  },

})