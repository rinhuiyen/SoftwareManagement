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
    state = {
        request: [],
        jobInput : "",
        priceInput : '',
        list : [
        {
        job : "Queueing Up",
        price: 10,
        },
        {
            job : "Pick Up",
            price: 5,
        },
        
    ],
    
}

mounting(){
    this.setState({request:[this.state.list]})
}

    submitData() {
        newData = {
            job: this.state.jobInput,
            price: this.state.priceInput
        }
        this.state.list.push(newData)

        this.setState({
            request: this.state.list
        })
        this.props.navigation.navigate('post',{item: this.state.list});
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
    
    
    render() {
        return(
        <View>
            <View style={styles.logoContainer}>
            <Text style={styles.logoText}>Post</Text>
            </View>

            <View style={styles.SectionStyle}>
            <TextInput type="text" value={this.state.jobInput} 
            onChangeText={(jobInput) => this.setState({jobInput})}
            placeholder='Job Description'
            />
            </View>
            <View >
            <TextInput 
             style={styles.SectionStyle}
             keyboardType='numeric'
             placeholder='Price'
             onChangeText={(priceInput)=> this.setState({priceInput})}
             value={this.state.priceInput}
             maxLength={10}
            /></View>
            <TouchableOpacity onPress={()=>this.submitData()} style={styles.btnPost}>
            <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
            <FlatList
            keyExtractor={(index) => index.toString()}
            data={this.state.list}
            extraData={this.state.request}
            renderItem={this.renderItems}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5 ,
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
        textAlign: 'center'
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