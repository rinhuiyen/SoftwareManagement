import React from 'react';
import {
    Button,
    View,
    navigation,
    Text,
    Card,
    FlatList,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');
const { height } = Dimensions.get('window');


export default class PostScreen extends React.Component {
    state = {
        item: this.props.navigation.getParam('item'),
        screenHeight: 0,
    }

    onContentSizeChange = (contentHeight) => {
        this.state.screenHeight = 0
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };

    renderItems = ({ item }) => {

        return (
            <View style={styles.element}>

                <Text style={styles.containerTitle}>
                    Title: {item.title}
                </Text>
                <Text style={styles.text}>
                    Description: {item.job}
                </Text>
                <Text style={styles.prices}>
                    Price: RM {item.price}
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('message')} style={styles.btnPost}>
                    <Text style={styles.text}>Accept</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        const { params } = this.props.navigation.state;
        const item = params ? params.item : null;
        return (
            <ScrollView
                style={{ flex: 1 }}
                onContentSizeChange={this.onContentSizeChange}
            >
                <View>

                    <FlatList
                        data={item}
                        extraData={item}
                        renderItem={this.renderItems}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('main')} style={styles.btnMain}>
                        <Text style={styles.text}>Post a post</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
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
        width: WIDTH - 25,
        height: 44,
        borderRadius: 10,
        backgroundColor: '#607446',
        marginTop: 5,
        margin: 10
    },
})