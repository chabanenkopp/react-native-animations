import React from 'react'
import styled from 'styled-components/native'
import Text from 'components/Text'
import { COLORS } from 'theme'

const StyledScrollView = styled.ScrollView`
  flex: 1;
  height: 100%;
  background-color: ${COLORS.WHITE};
  padding: 0 30px;
`

const Transitions = () => {
  return (
    <StyledScrollView>
      <Text color={COLORS.BLACK} mt="40px">
        TEST
      </Text>
    </StyledScrollView>
  )
}
export default Transitions
