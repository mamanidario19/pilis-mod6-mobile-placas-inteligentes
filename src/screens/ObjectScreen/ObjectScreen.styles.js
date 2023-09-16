import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE, SPACING } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minHeight: 150,
  },
  itemList: {
    padding: 10
  },
  itemImage: {
    height: '100%',
    width: '50%',
    resizeMode: 'cover',
    borderRadius: 30
  },
  itemInfo: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  itemTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: FONT_SIZE.xl
  },
  itemPrice: {
    marginTop: 5,
    marginBottom: 0,
    marginHorizontal: 10,
    fontSize: FONT_SIZE.md
  },
  column: {
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 25,
    marginTop: 25,
    marginBottom: 25,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  buttonText: {
    color: COLORS.text,
    fontWeight: 'bold',
  },
})