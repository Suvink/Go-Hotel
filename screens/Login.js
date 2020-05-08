import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, AsyncStorage, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import * as SQLite from 'expo-sqlite'



export default class Login extends React.Component{

    constructor(props) {
      super(props);
      this.getData();  
      this.state = {
        username: '',
        password: '',
        user: [],
        loginstate: ''
      };
    }

    getData = async() => {
      try{
        const value = await AsyncStorage.getItem(('loginstatus'))
        console.log(value)
        if(value != null){
          this.setState({ loginstate : value })
        }
      }catch(error){
        console.log(error)
      }

      console.log(this.state.loginstate)

      if(this.state.loginstate){
        this.props.navigation.navigate('Home')
      }
    }

    loginUser = async() => {
      Keyboard.dismiss()
      const db = SQLite.openDatabase('gohotel.db')

      //Just in case! *wink

      // db.transaction(tx => {
      //   tx.executeSql(
      //     "create table if not exists users (username text, name text, password, text);"
      //   );
      // })

      // db.transaction(
      //   tx => {
      //     tx.executeSql("insert into users (username,name,password) values ('keshia', 'Keshia Onnellie', 'keshia123')");}
      // );

      console.log("dcdd")

      db.transaction(tx => {
        tx.executeSql(
          `select * from users where username = ? AND password = ? `,
          [this.state.username, this.state.password],
          (tx, results) => {
            //console.log(JSON.stringify(results.rows._array))
            this.state.user = results.rows._array
            try{
              AsyncStorage.setItem('loginstatus', 'true')
              AsyncStorage.setItem('loggedinuser', this.state.user[0].name)
            }catch(error){
              console.log(error)
            }
            console.log(this.state.user[0].name)
            this.props.navigation.navigate('Home',)
          }
        );
      })
    }
    

    render(){

      return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('../assets/hotel.png')}
            />
            <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 50 }}>Welcome to Go Hotel!</Text>
    
            <View style={{marginTop: 20}}>
            <TextInput
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}
              placeholder={'Username'}
              style={styles.input}
            />
            <TextInput
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder={'Password'}
              secureTextEntry={true}
              style={styles.input}
            />
            <TouchableOpacity
                onPress={() => this.loginUser()}
                style={{ backgroundColor: '#ef714f',borderRadius: 10, width: 280, marginTop: 10}}
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
        </KeyboardAvoidingView>
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
  input: {
    width: 280,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 10
  }
})
