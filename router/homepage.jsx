import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomePage from '../screens/HomePage'
import BoardPage from '../screens/BoardScreen'

const Tab = createMaterialTopTabNavigator()
export function BoardsRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="BoardScreen" component={BoardPage} />
            <Tab.Screen name="HomePage" component={HomePage} />
        </Tab.Navigator>
    )
}