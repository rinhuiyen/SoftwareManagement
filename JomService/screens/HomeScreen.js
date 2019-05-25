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
import { Constants } from 'expo';

import { MonoText } from '../components/StyledText';

const { width: WIDTH } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Jom Service
        </Text>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin}>
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
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  btnLogin: {
  width: WIDTH -55,
  height: 45,
  borderRadius: 25,
  backgroundColor: '#432577',
  marginTop: 20,
  marginHorizontal: 25
},
text: {
  paddingTop: 10,
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textAlign: 'center'
}
});
