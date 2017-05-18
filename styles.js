import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  photoContainer: {
    flex: 1,
    position: 'absolute'
  },
  photo: {
    flex: 1,
    resizeMode: 'cover',
    width:Dimensions.get('window').width
  },
  contentContainer: {
    backgroundColor: 'transparent'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    padding: 10
  },
  title: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12
  }
});
