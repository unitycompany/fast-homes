import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Loading = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => setShouldRender(false), 800); // Remove do DOM após fade-out
    }
  }, [isVisible]);

  if (!shouldRender) return null; // Evita renderização quando já sumiu

  return (
    <StyledWrapper className={isVisible ? "visible" : "hidden"}>
      <div className="pulsar" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  transition: opacity 0.8s ease-out;

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  .pulsar {
    --uib-size: 40px;
    --uib-speed: 0.9s;
    --uib-color: white;
    position: relative;
    height: var(--uib-size);
    width: var(--uib-size);
    z-index: 9999;
  }

  .pulsar::before,
  .pulsar::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: var(--uib-color);
    animation: pulseEffect var(--uib-speed) ease-in-out infinite;
    transform: scale(0);
  }

  .pulsar::after {
    animation-delay: calc(var(--uib-speed) / -2);
  }

  @keyframes pulseEffect {
    0%,
    100% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1);
      opacity: 0.25;
    }
  }
`;

export default Loading;
