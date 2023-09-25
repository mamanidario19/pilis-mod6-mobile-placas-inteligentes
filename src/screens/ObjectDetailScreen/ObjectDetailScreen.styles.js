import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight,
    padding: 0,
  },
  imageContainer: {
    width: '300',
    height: 300,
    position: 'relative',
    top: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 450,
    position: 'absolute',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titleName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  location: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    color: '#444',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 8,
    color: COLORS.text,
    fontSize: FONT_SIZE.md,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
    marginTop: -25,
  },
  map: {
    height: 250,
    marginVertical: 20,
    borderRadius: 10,
  },
  webButton: {
    textAlign: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    marginTop: 10,
  },
  cardContainer: {
    paddingHorizontal: 15, // Agrega paddingHorizontal al contenedor de la tarjeta
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: COLORS.white, // Fondo blanco
    borderRadius: 10, // Bordes redondeados
    padding: 10, // Espaciado interno
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, // Opacidad de la sombra
    shadowRadius: 4, // Radio de la sombra
    elevation: 3,
    paddingHorizontal: 30,
  },
  title_qr: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  column: {
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:10
  },
  infoContainer: {
    //flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  separator: {
    height: 3, // Altura de la línea
    backgroundColor: COLORS.primary, // Color de la línea
    marginVertical: 10, // Espacio vertical alrededor de la línea
  },
  btnShare: {
    borderColor:COLORS.primary,
    borderWidth:1,
    borderRadius:50,
    padding:7,
    width:50,
    margin:5
  },
  buttonContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
