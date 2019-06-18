import React from 'react';
import {
TouchableOpacity,
View,
TextInput,
Text,
StyleSheet,
FlatList,
Dimensions
} from 'react-native';

const { width: WIDTH } = Dimensions.get('window');

export default class MainScreen extends React.Component{
    static navigationOptions = {
        title: 'Post A Request',
      }
    state = {
        request: [],
        jobInput : "",
        priceInput : '',
        titleInput: "",
        list : this.props.navigation.getParam('item')
        
    }

mounting(){
    this.setState({request:this.state.list})
}

    submitData() {
        var newData = {
            title: this.state.titleInput,
            job: this.state.jobInput,
            price: this.state.priceInput
        }
        this.state.list.push(newData)

        this.setState({
            request: this.state.list
        })
        this.props.navigation.navigate('post',{item: this.state.list});
    }
    
    
    render() {
        return(
        <View style={styles.mainScreen}>
            <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Create a Post</Text>
            </View>            
            <View style={styles.SectionStyle}>
            <TextInput type="text" value={this.state.titleInput} 
            onChangeText={(titleInput) => this.setState({titleInput})}
            placeholder='Job Title'
            />
            </View>

            <View style={styles.SectionStyle}>
            <TextInput type="text" value={this.state.jobInput} 
            onChangeText={(jobInput) => this.setState({jobInput})}
            placeholder='Job Description'
            />
            </View>

            <View style={styles.SectionStyle}>
            <TextInput 
             keyboardType='numeric'
             placeholder='Price'
             onChangeText={(priceInput)=> this.setState({priceInput})}
             value={this.state.priceInput}
             maxLength={10}
            /></View>




            <TouchableOpacity onPress={()=>this.submitData()} style={styles.btnPost}>
            <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            
        </View>
        );
    }
}

const styles = StyleSheet.create({
    mainScreen:{
        backgroundColor:'#fff',
        flex:1,
    },
    SectionStyle: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10
    },
    logoContainer: {
        alignItems: 'center',
      },
      logoText: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
      },
      text: {
        paddingTop: 10,
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center',
      },
      btnPost: {
        width: WIDTH -55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#607446',
        marginTop: 20,
        marginHorizontal: 25
      },
})