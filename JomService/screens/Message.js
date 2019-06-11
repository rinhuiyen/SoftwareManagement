import React from 'react';

export default class Message extends React.Component {
    render(){
        return() {
            <View style={{height:667, backgroundColor:"#432577"}}>
                <View style={styles.mainbody}>

                    <Image style={styles.imgprofile} source={require("../assets/images/profile.png")} />
                    <Text style={styles.name}>
                        BTS JIN DK
                    </Text>
                    <Text style={styles.username}>
                        @BTSJINDK
                    </Text>

                    <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("../assets/images/name.png")} />
                        <Text style={styles.labelitem}>
                            Name:
                        </Text>
                        <Text style={styles.labelitem}>
                            BTSJINDK
                        </Text>
                    </View> 

                     <View style={styles.itemprofile}>
                        <Image style={styles.imgitem} source={require("../assets/images/contact.png")} />
                        <Text style={styles.labelitem}>
                            Contact Number:
                        </Text>
                        <Text style={styles.labelitem}>
                            016-2244556
                        </Text>
                    </View>    

                    


               
                </View>
            </View>
            
        }
    }
}

