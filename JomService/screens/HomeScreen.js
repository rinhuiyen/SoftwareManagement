import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Constants from 'expo-constants';
import logo from './images/logo.png';

const { width: WIDTH } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <TouchableOpacity style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('signUp')}>
          <Text style={styles.text}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#607446',
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    marginTop: 10,
    marginHorizontal: 25
  },
  text: {
    paddingTop: 10,
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center'
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    alignItems: 'center',
  },
});