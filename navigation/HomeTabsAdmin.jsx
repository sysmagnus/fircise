import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AdminAlertList } from "../screens/alerts"
import { ProfileAdmin } from "../screens/users"
import { HomeAdmin } from "../screens/home"
import { Text } from "react-native"
import { Avatar, HStack, IconButton } from "native-base"
import { Feather } from "@expo/vector-icons"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

export const HomeTabsAdmin = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeAdmin"
                component={HomeAdmin} 
                options={{
                    title: '',
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                    ),
                    headerLeft: () => (
                        <Text>Bienvenido admin, Henry!</Text>
                    ),
                    headerRight: () => (
                        <HStack mr={4}>
                            <IconButton
                                variant="ghost"
                                _icon={{
                                    as: Feather,
                                    name: "bell",
                                }} mr={2} />
                            <Avatar bg="green.500" source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }} />
                        </HStack>
                    ),                    
                }}
                />
            <Tab.Screen
                name="AdminAlertList"
                component={AdminAlertList}
                options={{
                    title: 'Alertas',
                    tabBarLabel: 'Alertas',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="alert-circle" size={size} color={color} />
                    ),
                    headerLeft: () => (
                        <IconButton
                            variant="ghost"
                            _icon={{
                                as: Ionicons,
                                name: "arrow-back",
                            }} ml={2} />
                    )
                }} />
            <Tab.Screen
                name="ProfileAdmin"
                component={ProfileAdmin} />
        </Tab.Navigator>
    )
}