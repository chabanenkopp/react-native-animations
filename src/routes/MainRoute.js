import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from 'screens/Home'
import Transitions from 'screens/Transitions'
// import { COLORS } from 'theme'

const HomeStack = createStackNavigator()

const MainRoute = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" headerMode="screen">
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTitle: null,
        }}
      />
      <HomeStack.Screen
        name="Transitions"
        component={Transitions}
        options={{
          headerTitle: false,
          headerStyle: {
            // backgroundColor: COLORS.BRAND_BLUE,
            elevation: 0,
            shadowOffset: {
              height: 0,
            },
          },
        }}
      />
    </HomeStack.Navigator>
  )
}

export default MainRoute
