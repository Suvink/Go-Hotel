import { createStackNavigator} from 'react-navigation-stack'
import{ createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Details from '../screens/Details'

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {headerShown: false}
    },
    Home : {
        screen: Home,
        navigationOptions: {headerShown: false}
    },
    Details: {
        screen : Details,
        navigationOptions: {headerShown: false}

    }
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);