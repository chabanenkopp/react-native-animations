import React from 'react'
import { AppRegistry } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { theme } from 'theme'
import App from './App'
import { name as appName } from './app.json'

const Root = () => (
  <SafeAreaProvider>
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  </SafeAreaProvider>
)

AppRegistry.registerComponent(appName, () => Root)
