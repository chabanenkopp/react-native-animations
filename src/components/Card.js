import * as React from 'react'
import styled from 'styled-components'
import { Dimensions, Image } from 'react-native'
import Animated from 'react-native-reanimated'
import card1 from 'assets/card1.png'
import card2 from 'assets/card2.png'
import card3 from 'assets/card3.png'
import StyleGuide from './StyleGuide'

export const cards = [
  {
    id: 0,
    source: card1,
  },
  {
    id: 1,
    source: card2,
  },
  {
    id: 2,
    source: card3,
  },
]

const { width } = Dimensions.get('window')
const CARD_ASPECT_RATIO = 1324 / 863
export const CARD_WIDTH = width - StyleGuide.spacing * 8
export const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT_RATIO

const StyledAnimatedImage = styled(Animated.Image)`
  flex: 1;
  max-width: 100%;
  margin: ${StyleGuide.spacing};
  border-radius: 18px;
  aspect-ratio: ${CARD_ASPECT_RATIO};
  resize-mode: contain;
`

const StyledImage = styled(Image)`
  width: ${CARD_WIDTH};
  height: ${CARD_HEIGHT};
  border-radius: 18px;
`

export const FlexibleCard = ({ card, style }) => (
  <StyledAnimatedImage style={[style]} source={card.source} />
)

const Card = ({ card }) => <StyledImage source={card.source} />

export default Card
