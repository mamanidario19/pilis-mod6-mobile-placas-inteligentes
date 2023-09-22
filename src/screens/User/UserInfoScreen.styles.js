import { StatusBar, StyleSheet } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  header: {
    backgroundColor: '#F0F0F0',
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: '#EFEFEF',
    borderBottomWidth: 1
  },
  profileImage: {
    marginTop:35,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5,
  },
  profileInfo: {
    justifyContent: 'center'
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  profileLocation: {
    fontSize: 16,
    color: '#777'
  },
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24
  },
  button: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10,
    height: 50,
  },
  buttonLogOut: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10,
    height: 50,
    borderColor:COLORS.primary,
    borderWidth:1
  },
  buttonModProfile: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10,
    height: 50,
    textAlign:'center'
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonTextLogOut: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold'
  }
})