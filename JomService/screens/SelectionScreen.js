import React from 'react';
import {
    Image,
    View,
    navigation,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import { Constants } from 'expo';
import DeliveryM from './images/deliveryM.jpg';

const { width: WIDTH } = Dimensions.get('window');


export default class SelectionScreen extends React.Component {
    static navigationOptions = {
        title: 'Main Page',
      }
    state = {
        request: [],
        jobInput: "",
        priceInput: '',
        titleInput: "",
        list: [
            {
                title: "Queue",
                job: "Queueing Up",
                price: 10,
            },

        ],

    }
    mounting() {
        this.setState({ request: this.state.list })
    }

    submitData() {
        this.props.navigation.navigate('post', { item: this.state.list });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/deliveryM.jpg')} style={styles.backgroundImage}/> 

                <TouchableOpacity onPress={() => this.props.navigation.navigate('main', { item: this.state.list})} style={styles.btnMain}>
                    <Text style={styles.text}>Post a Request</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.submitData()} style={styles.btnMain}>
                    <Text style={styles.text}>View Requests</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        paddingTop:0,
        paddingBottom:50,
        height:300,
        width:400,
      },
    container: {
        flex: 2,
        justifyContent: 'center',
        paddingTop: 8,
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
        color: '#ffffff',
    },
    prices: {
        padding: 10,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    btnPost: {
        width: WIDTH - 25,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#d3d3d3',
        marginTop: 5,
    },
    btnMain: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#607446',
        marginTop: 20,
        marginHorizontal: 25
    },
})