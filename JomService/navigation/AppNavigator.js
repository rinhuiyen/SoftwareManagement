import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import MainScreen from '../screens/MainScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  login: Login,
  signUp: SignUp,
  main: MainScreen
},
{
  initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render(){
    return <AppContainer />;
  }
}