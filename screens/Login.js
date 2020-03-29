import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function Login({ navigation }){

    const pressHandler = () => {
      navigation.navigate('Home');
    }

    return (

      <View style={styles.container}>
        <Image
            style={{ width: 100, height: 100 }}
            source={require('../assets/hotel.png')}
        />
        <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 80 }}>Welcome to Go Hotel!</Text>

        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => pressHandler()}
            style={{ backgroundColor: '#ef714f',borderRadius: 10, width: 280}}
          >
            <Text style={{ fontSize: 15, color: '#fff', margin: 15, textAlign: 'center'}}>Sign In</Text>
          </TouchableOpacity>
        </View>
  
        <View>
          <TouchableOpacity
            onPress={() => alert('Sign Up')}
          >
            <Text style={{ fontSize: 10, color: 'black', margin: 15, textAlign: 'center'}}>Or simply sign up</Text>
          </TouchableOpacity>
        </View>
  
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
