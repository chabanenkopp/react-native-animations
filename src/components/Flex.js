import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { position, space, layout, flexbox, color } from 'styled-system'
import { SafeAreaView } from 'react-native-safe-area-context'
import { cover as polishedCover } from 'polished'

const Flex = styled(View)`
  ${({ cover }) => cover && polishedCover()}
  ${position}
  ${space}
  ${layout}
  ${flexbox}
  ${color}
`

Flex.Safe = (props) => <Flex as={SafeAreaView} {...props} />

export default Flex
