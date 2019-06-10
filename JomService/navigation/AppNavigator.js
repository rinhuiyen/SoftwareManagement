import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import Message from '../screens/Message';
import SelectionScreen from '../screens/SelectionScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  login: Login,
  signUp: SignUp,
  main: MainScreen,
  post: PostScreen,
  message: Message,
  selection: SelectionScreen,
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