import React from 'react'
import Animated, {
  eq,
  add,
  set,
  not,
  cond,
  proc,
  block,
  useCode,
  interpolate,
  Extrapolate,
  startClock,
} from 'react-native-reanimated'
import { useClock, useValues } from 'react-native-redash'
import Flex from 'components/Flex'
import { Button, Card, cards } from 'components'

const duration = 500
const runAnimation = proc((clock, startAnimation, from, to, opacity, startTime) =>
  block([
    startClock(clock),
    cond(eq(startAnimation, 1), [
      set(from, opacity),
      set(to, not(to)),
      set(startTime, clock),
      set(startAnimation, 0),
    ]),
  ])
)

const ClockValuesAndIdentity = ({ navigation }) => {
  const [isCardShown, setIsCardShown] = React.useState(true)
  const clock = useClock()
  const [startAnimation, startTime, from, to] = useValues(0, 0, 1, 0)
  const endTime = add(startTime, duration)
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP,
  })
  useCode(() => set(startAnimation, 1), [isCardShown])
  useCode(() => runAnimation(clock, startAnimation, from, to, opacity, startTime), [
    to,
    from,
    clock,
    opacity,
    startTime,
    startAnimation,
  ])
  return (
    <Flex flex={1}>
      <Flex flex={1} justifyContent="center" alignItems="center">
        <Animated.View style={{ opacity }}>
          <Card card={cards[0]} />
        </Animated.View>
      </Flex>
      <Button
        label={isCardShown ? 'Hide' : 'Show'}
        primary
        onPress={() => setIsCardShown((prev) => !prev)}
      />
      <Button label="Secondary screen" primary onPress={() => navigation.navigate('Transitions')} />
    </Flex>
  )
}

export default ClockValuesAndIdentity
