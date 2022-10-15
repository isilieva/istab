import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { LoginScreen } from '../screens/LoginPage';
import { RegisterScreen } from '../screens/RegisterPage';
const Tab = createMaterialTopTabNavigator()
export function UserRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="login" component={LoginScreen} />
            <Tab.Screen name="register" component={RegisterScreen} />
        </Tab.Navigator>
    )
}