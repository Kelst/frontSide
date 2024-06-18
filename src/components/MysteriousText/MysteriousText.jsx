import React from 'react'
import { animated, useSpring } from "react-spring";

export default function MysteriousText({ children, ...props }) {
const animation = i =>
useSpring({ 
    opacity: 1, 
     // Початковий колір - чорний
     color: 'white',
    from: { opacity: 0, color: 'red' }, // Початкові значення - прозорість 0, колір червоний
    delay: Math.random() * 650 
  });
  return children.split("").map((item, index) => (
    <animated.span key={index} style={animation(index)} {...props}>
      {item}
    </animated.span>
  ));
}
