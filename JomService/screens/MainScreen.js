import * as React from 'react';
import {TouchableOpacity,
View,
TextInput,
Text} from 'react-native';

export default class MainScreen extends React.Component{
    state = {
        list : []
    }
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }

    submit(text) {
        var i = this.state.text
        var _list = this.state.list
        list.push(i)
        this.setState({
            list: _list
        })
    }
    render() {
        return(
        <View>
            <TextInput type="text" value={this.state.text} onChangeText={(text) => this.setState({text})}/>  
            <TouchableOpacity onPress={() => this.submit()}>
            <Text>Submit</Text>
            </TouchableOpacity>
        </View>
        );
    }
}