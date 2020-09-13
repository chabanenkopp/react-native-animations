import * as React from 'react'
import { SafeAreaView } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { COLORS } from 'theme'
import StyleGuide from './StyleGuide'
import Text from './Text'
import Flex from './Flex'

const Button = ({ label, primary, onPress }) => {
  return (
    <RectButton onPress={onPress}>
      <Flex as={SafeAreaView} backgroundColor={primary && StyleGuide.palette.primary} accessible>
        <Flex p={StyleGuide.spacing * 2}>
          <Text type="headline" textAlign="center" color={primary && COLORS.WHITE}>
            {label}
          </Text>
        </Flex>
      </Flex>
    </RectButton>
  )
}

export default Button
