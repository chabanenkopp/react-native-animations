import React from 'react'
import { Text as NativeText } from 'react-native'
import styled from 'styled-components/native'
import { space, color, typography, display, layout, opacity } from 'styled-system'
import { iOSUIKit } from 'react-native-typography'

const Text = styled(({ style: scStyle, fontKitStyle = iOSUIKit.body, ...rest }) => (
  <NativeText style={[fontKitStyle, scStyle]} {...rest} />
))`
  ${space}
  ${color}
  ${layout}
  ${display}
  ${typography}
  ${opacity}
`

Text.Small = (props) => <Text fontKitStyle={iOSUIKit.footnoteEmphasized} {...props} />

export default Text
