import React, { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'

const CheckmarkSquare = () => {
  const [draw, setDraw] = useState(0)

  const props = useSpring({
    strokeDashoffset: draw,
    from: { strokeDashoffset: 100 },
    to: { strokeDashoffset: 0 },
    reset: true,
    reverse: draw === 0,
    config: { duration: 2000 },
    onRest: () => setDraw(draw === 0 ? 100 : 0),
  })

  return (
    <animated.svg
      width="20"
      height="20"
      viewBox="0 0 100 100"
      style={{
        backgroundColor: 'green',
        display: 'inline',
        margin: 'auto',
        borderRadius: '5px',
        
      }}>
      <animated.path
        d="M20 50 L40 70 L80 30"
        stroke="white"
        strokeWidth="8"
        fill="none"
        strokeDasharray="100"
        style={props}
      />
    </animated.svg>
  )
}

export default CheckmarkSquare
