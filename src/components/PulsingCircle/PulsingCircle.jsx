import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const PulsingCircle = ({type}) => {
  const [scale, setScale] = useState(1);

  const props = useSpring({
    transform: `scale(${scale})`,
    config: { tension: 210, friction: 5 },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newScale = 1 + Math.random() * 0.5; // Генерує новий масштаб в межах від 1 до 1.5
      setScale(newScale);
    }, 1000); // Оновлює кожну секунду

    return () => clearInterval(interval); // Чистить інтервал при розмонтуванні компонента
  }, []);

  return (
    <animated.div
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: `${type=='active'?'green':'red'}` ,
        ...props,
      }}
    />
  );
};

export default PulsingCircle;
