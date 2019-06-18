import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import user from './images/user.png';
import user1 from './images/user1.png';
import password from './images/password.png';

const { width: WIDTH } = Dimensions.get('window');

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'login',
  }
  render() {
    return (
      <View style={styles.backgrounds}>
        <View style={styles.logoContainer}>
          <Image source={user} style={styles.logo} />
          <Text style={styles.logoText}>Login</Text>
        </View>

        <View style={styles.SectionStyle}>
          <Image
            source={require('./images/user1.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Username"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.SectionStyle}>
          <Image
            source={require('./images/password.png')}
            style={styles.ImageStyle}
          />

          <TextInput
            style={{ flex: 1 }}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
          />
        </View>

        <View>
        <Text style={styles.text}>Forgot Password? Click here </Text>
        </View>

        <TouchableOpacity style={styles.btnLogin}  onPress={() => this.props.navigation.navigate('selection')}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  logo: {
    width: 300,
    height: 300,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoText: {
    color: 'black',
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.5,
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
btnLogin: {
  width: WIDTH -55,
  height: 45,
  borderRadius: 25,
  backgroundColor: '#432577',
  marginTop: 20,
  marginHorizontal: 25
},
btntext: {
  paddingTop: 10,
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textAlign: 'center'
},
text: {
  marginHorizontal: 15
}
});