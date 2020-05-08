import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator,Alert, AsyncStorage } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'
import { Listing } from '../components/Listing'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = { 
          isLoading: true,
          loggedinuser: ''
        };
    }
    

    getData = async() => {
      try{
        const value = await AsyncStorage.getItem(('loggedinuser'))
        if(value != null){
          this.setState({ loggedinuser : value })
        }
      }catch(error){
        console.log(error)
      }
    }


    logoutTrigger = () =>{
      Alert.alert(
        'Logout',
        'Are you sure you want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Logout', onPress: () => this.logout() },
        ],
        { cancelable: false }
      );
    }

    logout = () => {
      try{
        AsyncStorage.setItem('loginstatus', 'false')
        AsyncStorage.setItem('loggedinuser', null)
        this.props.navigation.navigate('Login')
      }catch(error){
        console.log(error)
      }
    }

    async componentDidMount(){
    
        return fetch('https://go-hotel-980cd.firebaseio.com/listings.json')
          .then(response => response.json())
          .then (responseJson => {
            //console.log(responseJson);
            this.setState(
             {
              isLoading: false,
              dataSource: responseJson
             },
             function(){}
            );
          })
          .catch(error => {
            console.error(error)
          })
      }


  render(){
    if (this.state.isLoading) {
        return (
          <View style={{ flex: 1, padding: 20, alignContent: 'center', justifyContent: 'center' }}>
            <ActivityIndicator animating={true} color={'#007cd5'} size={'large'} />
          </View>
        );
    }
    return (
        <View>
          <View style={(styles.container, { flexDirection: 'row', marginTop: 10 })}>
            <View style={styles.column}>
              <View
                style={{
                  width: '50%',
                  alignContent: 'flex-end',
                  justifyContent: 'flex-start'
                }}
              >
                <Text style={{ fontSize: 30, textAlign: 'left' }}>Hotels</Text>
              </View>
              <View
                style={{
                  width: '50%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'flex-end',
                  alignContent: 'flex-end'
                }}
              >
                <Ionicons
                  name='md-happy'
                  size={25}
                  color='#007cd5'
                  style={{ marginRight: 10 }}
                />
                <TouchableOpacity onPress={() => this.logoutTrigger()}>
                  <Text>{this.state.loggedinuser}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
    
    
            <View style={(styles.container, { flexDirection: 'row', flexWrap: 'wrap', width: '100%', backgroundColor: 'transparent'})}>
                <SearchBar
                    lightTheme
                    round
                    icon={{ type: 'font-awesome', name: 'search' }}
                    containerStyle={{width: '100%', backgroundColor: 'transparent'}}
                    placeholder='Search hotels'>
                </SearchBar>
            </View>
            
            <SafeAreaView>
                <ScrollView height={500}>
                    {this.state.dataSource.map((item, key) => (
                                //key is the index of the array 
                                // //item is the single item of the array
                                // <View key={key} style={styles.item}>
                                // <Text style={styles.text}>{key}. {item}</Text>
                                // <View style={styles.separator} />
                                // </View>
                                <Listing
                                    key = {key}
                                    navigation={this.props.navigation}
                                    img= {item.img}
                                    name={item.name}
                                    address={item.address}
                                    stars={item.stars}
                                    price={item.price}
                                    tel={item.tel}
                                    description={item.description}
                                />

                                
                            ))}

                    
                </ScrollView>
            </SafeAreaView>
    
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
    alignItems: 'flex-start'
  }
})
