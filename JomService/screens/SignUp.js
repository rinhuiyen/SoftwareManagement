import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import user1 from './images/user1.png';
import password from './images/password.png';

const { width: WIDTH } = Dimensions.get('window');

export default class SignUp extends React.Component {
  static navigationOptions = {
    title: 'signUp',
  }
  render() {
    return (
          <View>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Sign Up</Text>
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

          <View style={styles.SectionStyle}>
            <Image
              source={require('./images/password.png')}
              style={styles.ImageStyle}
            />

            <TextInput
              style={{ flex: 1 }}
              placeholder=" Confirm Password"
              secureTextEntry={true}
              underlineColorAndroid="transparent"
            />
          </View>

          <View>
          <Text style={styles.text}>Already Sign up?</Text>
          <TouchableOpacity  onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.text}> Click here</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.signUp}>
          <TouchableOpacity style={styles.btnSignUp} onPress={() => this.props.navigation.navigate('login')}>
            <Text style={styles.btntext}>Sign Up</Text>
          </TouchableOpacity>
          </View>
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
    opacity: 0.8,
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
btnSignUp: {
  width: WIDTH -55,
  height: 45,
  borderRadius: 25,
  backgroundColor: '#607446',
  marginTop: 20,
  marginHorizontal: 25,
},
btntext: {
  paddingTop: 10,
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: 16,
  textAlign: 'center'
},
text: {
  marginHorizontal: 15,
  textAlign: 'center'
},
backgroundImage: {
  flex: 1,
  alignItems: 'center'
},
});