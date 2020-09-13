import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MainRoute } from 'routes'
import { theme } from 'theme'

const App = () => (
  <NavigationContainer theme={theme}>
    <MainRoute />
  </NavigationContainer>
)

export default App
