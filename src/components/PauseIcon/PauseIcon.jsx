import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const PauseIcon = () => {
  const [animating, setAnimating] = useState(true)

  const springProps1 = useSpring({
    from: { transform: 'translateY(5px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { duration: 500 },
    onRest: () => {
      setTimeout(() => setAnimating(false), 2000)
    },
    delay: animating ? 0 : 2000,
  })

  const springProps2 = useSpring({
    from: { transform: 'translateY(-5px)', opacity: 0 },
    to: { transform: 'translateY(0px)', opacity: 1 },
    config: { duration: 500 },
    onRest: () => {
      setTimeout(() => setAnimating(true), 0)
    },
    delay: animating ? 2000 : 0,
  })

  const barStyle = {
    width: '2px',
    height: '10px',
    backgroundColor: 'white',
    borderRadius: '2px',
    margin: '0 1px',
  }

  return (
    <div
      style={{
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: '5px',
      }}>
      <animated.div style={{ ...barStyle, ...springProps1 }} />
      <animated.div style={{ ...barStyle, ...springProps2 }} />
    </div>
  )
}

export default PauseIcon
