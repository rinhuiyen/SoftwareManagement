import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import { Constants } from 'expo';

const { width: WIDTH } = Dimensions.get('window');

export default class Message extends React.Component {
    state={
        screenHeight: 0
    }
    onContentSizeChange = (contentHeight) => {
        this.state.screenHeight = 0
        // Save the content height in state
        this.setState({ screenHeight: contentHeight });
    };
    render(){
        return(
                <View style={styles.views}>
                    <ScrollView 
                    style={{ flex: 1 }}
                    onContentSizeChange={this.onContentSizeChange}>
                    <Image style={styles.paragraph} source={require("./images/check.png")} />
                    <Text style={styles.logoText}>Job Accepted</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 3,}}
                    />
                    <Text style={               styles.logoText}>Client information: </Text>
                    <Image style={styles.imgprofile} source={require("./images/profilepic.png")} />
                    <Text style={styles.name}>
                        BTS JIN DK
                    </Text>
                    <Text style={styles.username}>
                        @BTSJINDK
                    </Text>

                    <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("./images/name.png")} />
                        <Text style={styles.labelitem}>
                            Name:
                        </Text>
                        <Text style={styles.sublabelitem}>
                            BTSJINDK
                        </Text>
                    </View> 

                     <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("./images/contact.png")} />
                        <Text style={styles.labelitem}>
                            Contact Number:
                        </Text>
                        <Text style={styles.sublabelitem}>
                            016-2244556
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
      }
});