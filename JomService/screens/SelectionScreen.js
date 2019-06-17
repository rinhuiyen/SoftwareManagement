import React from 'react';
import {
    Button,
    View,
    navigation,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');


export default class SelectionScreen extends React.Component {
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
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('main', { item: this.state.list, name: 'meng' })} style={styles.btnMain}>
                    <Text style={styles.text}>Post a post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.submitData()} style={styles.btnMain}>
                    <Text style={styles.text}>See posts</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f4',
        width: WIDTH - 25,
        margin: 10,
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