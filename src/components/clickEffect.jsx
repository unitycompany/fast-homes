import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const rippleAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
`;

const Ripple = styled.span`
  position: fixed;
  width: 15px;
  height: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  animation: ${rippleAnimation} 0.6s ease-out forwards;
  z-index: 9999999;
`;

const ClickEffect = () => {
  const [effects, setEffects] = useState([]);

  const handleClick = (e) => {
    const newEffect = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now(),
    };
    setEffects((prev) => [...prev, newEffect]);
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {effects.map((effect) => (
        <Ripple
          key={effect.id}
          style={{ top: effect.y, left: effect.x }}
          onAnimationEnd={() =>
            setEffects((prev) => prev.filter((item) => item.id !== effect.id))
          }
        />
      ))}
    </>
  );
};

export default ClickEffect;
