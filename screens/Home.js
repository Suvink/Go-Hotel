import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'
import { Listing } from '../components/Listing'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-navigation'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoading: true
        };
    }

    async componentDidMount(){
    
        return fetch('https://api.myjson.com/bins/1dzy4w.json')
          .then(response => response.json())
          .then (responseJson => {
            //console.log(responseJson.listings);
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
                <Text>Welcome Suvin!</Text>
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
                    {this.state.dataSource.listings.map((item, key) => (
                                //key is the index of the array 
                                // //item is the single item of the array
                                // <View key={key} style={styles.item}>
                                // <Text style={styles.text}>{key}. {item}</Text>
                                // <View style={styles.separator} />
                                // </View>
                                <Listing
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
