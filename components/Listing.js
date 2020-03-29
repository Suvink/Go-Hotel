import { render } from "react-dom"
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


export class Listing extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Details', {
                name: this.props.name,
                address: this.props.address,
                stars: this.props.stars,
                img: this.props.img,
                des: this.props.description,
                tel: this.props.tel,
                price: this.props.price
                });}}>
                <View style={(styles.container, { flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', width: '100%',flex: 1})}>
                <View style={styles.column}>
                    <View style={{
                        width: '40%',
                        alignContent: 'flex-end',
                        justifyContent: 'flex-start'}}>
    
                        <Image
                            style={{ width: 100, height: 100, borderRadius: 10 }}
                            source={{uri: this.props.img}}
                         />
    
                    </View>
                    <View style={{
                        width: '60%',
                        alignContent: 'flex-end',
                        justifyContent: 'flex-start'}}>
                            
                        <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>  
                        <Text>{this.props.address}</Text>  
                        <View style={{flexDirection: 'row'}}>
                            <Ionicons
                                name='md-star'
                                size={20}
                                color='#007cd5'
                                style={{ marginRight: 10 }}
                            /> 
                            <Text>{this.props.stars} stars</Text>  
                        </View> 
                        <Text style={{color: '#007cd5', marginTop: 15, fontWeight: 'bold'}}>LKR {this.props.price}  /night</Text>    
    
    
    
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    column: {
      margin: 20,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  })