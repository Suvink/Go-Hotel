import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'
import DatePicker from 'react-native-datepicker'

export default class Details extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    pressHandler = () => {
        
    }

  render(){
    
    return (
        <View>
            <View style={{flexDirection: 'column', flex: 1}}>
                <View>
                    <Image
                        style={{ width: '100%', height: Dimensions.get('window').height * 0.5 }}
                        source={{ uri: this.props.navigation.state.params.img }}
                    />
                </View>
                <View style={{backgroundColor: 'white', borderTopRightRadius: 20, borderTopLeftRadius: 20,width: '100%', 
                        height: Dimensions.get('window').height * 0.6,zIndex: 100, marginTop: Dimensions.get('window').height * 0.4
                        }}>
                    <ScrollView>
                        <SafeAreaView style={{padding: 20}}>
                            <Text style={{fontSize: 25}}>{this.props.navigation.state.params.name}</Text>
                            <Text style={{fontSize: 12, fontStyle: 'italic'}}>{this.props.navigation.state.params.address}</Text>
                            <View style={{flexDirection: 'row', marginTop: 10}}>
                                {
                                [...Array(this.props.navigation.state.params.stars)].map((e, i) => 
                                <Ionicons
                                name='md-star'
                                size={20}
                                color='#007cd5'
                                style={{ marginRight: 5}}
                                key={i}
                            /> 
                                )
                                }
                                <Text style={{marginLeft: 10}}>{this.props.navigation.state.params.stars} stars</Text> 
                            </View> 

                            <Text style={{marginTop: 10, textAlign: 'justify'}}>{this.props.navigation.state.params.des}</Text>
                            <View style={{flexDirection: 'row', marginTop: 20}}>
                                <Ionicons
                                    name='ios-wifi'
                                    size={30}
                                    color='#007cd5'
                                    style={{ marginRight: 30}}
                                /> 
                                <Ionicons
                                    name='md-alarm'
                                    size={30}
                                    color='#007cd5'
                                    style={{ marginRight: 30}}
                                /> 
                                <Ionicons
                                    name='md-cafe'
                                    size={30}
                                    color='#007cd5'
                                    style={{ marginRight: 30}}
                                /> 
                                <Ionicons
                                    name='md-airplane'
                                    size={30}
                                    color='#007cd5'
                                    style={{ marginRight: 30}}
                                /> 
                            </View>
                            <Text style={{fontSize: 20, fontWeight: 'bold',marginTop: 20}}>Book Now</Text>
                            <DatePicker
                                style={{ width: 300, marginTop: 20 }}
                                mode='date'
                                placeholder='Check-in'
                                format='YYYY-MM-DD'
                                minDate='2020-03-29'
                                maxDate='2021-03-29'
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                customStyles={{
                                    dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                    },
                                    dateInput: {
                                    marginLeft: 36,
                                    borderRadius: 10
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={date => {
                                    this.setState({ date: date })
                                }}
                            />
                            <DatePicker
                                style={{ width: 300, marginTop: 20 }}
                                mode='date'
                                placeholder='Check-out'
                                format='YYYY-MM-DD'
                                minDate='2020-03-30'
                                maxDate='2021-04-29'
                                confirmBtnText='Confirm'
                                cancelBtnText='Cancel'
                                customStyles={{
                                    dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                    },
                                    dateInput: {
                                    marginLeft: 36,
                                    borderRadius: 10
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                                onDateChange={date => {
                                    this.setState({ date: date })
                                }}
                            />

                            <View style={{alignItems: 'center'}}>
                                <Image
                                    style={{ width: '100%', height: 350, marginTop: 20 }}
                                    source={require('../assets/room1.jpeg')}
                                />
                                <TouchableOpacity
                                    onPress={() => this.pressHandler()}
                                    style={{ backgroundColor: 'transparent',borderRadius: 5, marginTop: 10,
                                            width: 300, borderWidth: 1, borderColor: '#007cd5'
                                        }}
                                >
                                    <Text style={{ fontSize: 15, color: '#007cd5', margin: 15, textAlign: 'center'}}>BOOK NOW</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Image
                                    style={{ width: '100%', height: 350, marginTop: 20 }}
                                    source={require('../assets/room2.jpeg')}
                                />
                                <TouchableOpacity
                                    onPress={() => this.pressHandler()}
                                    style={{ backgroundColor: 'transparent',borderRadius: 5, marginTop: 10,
                                            width: 300, borderWidth: 1, borderColor: '#007cd5'
                                        }}
                                >
                                    <Text style={{ fontSize: 15, color: '#007cd5', margin: 15, textAlign: 'center'}}>BOOK NOW</Text>
                                </TouchableOpacity>
                            </View>

                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>
    
        </View>
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
  }
})
