import React from 'react';
import {Button,
View,
navigation,
Text,
Card,
FlatList} from 'react-native';

export default class PostScreen extends React.Component {
    state = {
        item: this.props.navigation.getParam('item'),
    }

    renderItems = ({item}) =>{

        return(
            <View>
           <Text>
               {item.job}
           </Text>
           <Text>
                {item.price}
            </Text>
            </View>
        )
    }

    render(){
        const {params} = this.props.navigation.state;
        const item = params? params.item: null;
        return(
            <View>
            <FlatList
            data={item}
            extraData={item}
            renderItem={this.renderItems}
            />
            </View>
        )
    }
}