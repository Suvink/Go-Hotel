import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import Navigator from './routes/homeStack';

export default class App extends React.Component{

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    global.loginState = false;
  }

  // checkIfLoggedIn = () => {
  //   firebaseApp.auth().onAuthStateChanged(user => {
  //     if(user){
  //       console.log("logged in")
  //       this.props.navigation.navigate('Home')
  //     }
  //     else{
  //       this.props.navigation.navigate('Login')
  //     }
  //   })
  // }

  render(){
    return (
      <Navigator />
    )
  }
}

//API
//https://raw.githubusercontent.com/Suvink/dengue-stop/master/data.json






