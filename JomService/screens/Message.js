import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';

const { width: WIDTH } = Dimensions.get('window');

export default class Message extends React.Component {
    static navigationOptions = {
        title: 'Job Details',
    }
    state = {
        screenHeight: 0,
        list: this.props.navigation.getParam('item'),

    }
    onContentSizeChange = (contentHeight) => {
        this.state.screenHeight = 0
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };
    componentWillMount() {
        AsyncStorage.getItem('nameDB').then((nameJSON) => {
            this.setState({
                nameStored: JSON.parse(nameJSON)
            })
        })
    }
    render() {
        const { params } = this.props.navigation.state;
        const message = params ? params.message : null;
        return (
            <View style={styles.views}>
                <ScrollView
                    style={{ flex: 1 }}
                    onContentSizeChange={this.onContentSizeChange}>
                    <Text style={styles.logoText}>Thanks for accepting!</Text>
                    <Text style={styles.logoText1}>You can view your job details here:</Text>
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
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 3,
                        }}
                    />
                    <Text style={styles.logoText1}>Contact Client:</Text>

                    <Image style={styles.imgprofile} source={require("./images/messageClient.png")} />
                    <Text style={styles.name}>
                        {this.state.nameStored}
                    </Text>

                    <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("./images/name.png")} />
                        <Text style={styles.labelitem}>
                            Name:
                        </Text>
                        <Text style={styles.sublabelitem}>
                            Andrew
                        </Text>
                        <Text style={styles.sublabelitem}>
                            {this.state.nameStored}
                        </Text>
                    </View>

                    <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("./images/contact.png")} />
                        <Text style={styles.labelitem}>
                            Contact Number:
                        </Text>
                        <Text style={styles.sublabelitem}>
                            016-22334455
                        </Text>
                        <Text>{this.state.nameStored}</Text>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create({

    imgprofile: {
        marginLeft: 150,
        marginTop: 50,
        height: 100,
        width: 100,
    },
    name: {
        color: "#000000",
        fontSize: 22,
        marginLeft: 150,
        marginTop: 12,

    },
    username: {
        color: "#000000",
        fontSize: 18,
        marginLeft: 150,
        marginTop: 4,

    },
    itemprofile: {
        marginTop: 30,
    },
    labelitem: {
        marginTop: -45,
        marginLeft: 80,
        fontSize: 18,
        color: "black",
        fontWeight: 'bold'
    },
    sublabelitem: {
        marginTop: 10,
        marginLeft: 80,
        fontSize: 16,
        color: "#000"
    },
    imgitem: {
        marginLeft: 10,
        height: 50,
        width: 50
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
        fontSize: 50,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
        textAlign: 'center'
    },
    views: {
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
        margin: 10,
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
        fontWeight: 'bold'
    },
    prices: {
        padding: 10,
        fontSize: 20,
    },
    logoText1: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
        textAlign: 'center'
    },
});