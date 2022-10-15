import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BoardView from '../screens/BoardScreen'
import HomePage from '../screens/HomePage'


const Tab = createMaterialTopTabNavigator()
export function BoardsRouter() {
    return (
        <Tab.Navigator tabBarPosition="bottom">
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="BoardScreen" component={BoardView} />
        </Tab.Navigator>
    )
}