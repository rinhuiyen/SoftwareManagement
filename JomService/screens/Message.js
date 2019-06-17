import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native';
import { Constants } from 'expo';

const { width: WIDTH } = Dimensions.get('window');

export default class Message extends React.Component {

    state={
        screenHeight: 0,
        list : this.props.navigation.getParam('item')
    }
    onContentSizeChange = (contentHeight) => {
        this.state.screenHeight = 0
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };
    render(){
        const { params } = this.props.navigation.state;
        const message = params ? params.message : null;
        return(
                <View style={styles.views}>
                    <ScrollView 
                    style={{ flex: 1 }}
                    onContentSizeChange={this.onContentSizeChange}>
                    <Text style={styles.logoText}>History:</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,}}
                    />
                   <View style={styles.element}>
                       <Text style={styles.containerTitle}>
                        Title: {this.state.list.title}
                        </Text>
                        <Text style={styles.text}>
                        Description: {this.state.list.job}
                        </Text>
                        <Text style={styles.prices}>
                        Price: RM {this.state.list.price}
                        </Text>
                    </View>
                    </ScrollView> 
                </View>
            
        )
    }
}

const styles = StyleSheet.create({
    
    imgprofile:{
        marginLeft: 150,
        marginTop:50,
        height:100,
        width:100,
    },
    name:{
        color:"white",
        fontSize:22,
        marginLeft:150,
        marginTop:12,

    },
    username:{
        color:"#000000",
        fontSize:18,
        marginLeft:150,
        marginTop:4,

    },
    itemprofile:{
        marginTop:30,
    },
    labelitem:{
        marginTop:-45,
        marginLeft:80,
        fontSize:18,
        color:"black"
    },
    sublabelitem:{
        marginTop:10,
        marginLeft:80,
        fontSize:16,
        color:"#000"
    },
    imgitem:{
        marginLeft:10,
        height:50,
        width:50
    },
    paragraph: {
        marginTop: 20,
        marginLeft: 90,
        alignItems: 'center',
        height: 200,
        width: 200
      },
      logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
        textAlign: 'center'
      },
      views:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
      },
      containerTitle: {
        fontSize: 25,
        textAlign: 'left',
        padding: 5
    },
    element: {
        flex: 1,
        margin: 15,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#0000",
        shadowOpacity: 0.75,
        shadowRadius: 2,
        shadowColor: '#000000',
        elevation: 3,
        shadowOffset: { height: 10, width: 10 },
        width: WIDTH - 25,
    },
    text: {
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    prices: {
        padding: 10,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
});