// UICard.jsx
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 30%;
  background-color: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);
  padding: 2.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  @media (max-width: 768px){
    width: 100%;
  }
`;

const Circle = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: var(--color--green--very--low);
  border-radius: 50%;
  position: absolute;
  right: -1.25rem;
  top: -1.75rem;
`;

const Number = styled.p`
  position: absolute;
  bottom: 1.5rem;
  left: 1.75rem;
  color: #ffffff;
  font-size: 1.5rem;
  margin: 0;
`;

const IconWrapper = styled.div`
  width: 3rem;
  fill: var(--color--green--very--low);
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 1.25rem;
  margin: 0;
  color: #000;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #71717a;
  line-height: 1.5rem;
  margin: 0;
`;

export default function CardSolucaoModular({ 
  number = "01", 
  title = "Título Padrão", 
  description = "Descrição padrão do card." 
}) {
  return (
    <CardContainer>
      <Circle>
        <Number>{number}</Number>
      </Circle>

      <IconWrapper>
        <svg id="fi_3472646" enable-background="new 0 0 511.375 511.375" viewBox="0 0 511.375 511.375" xmlns="http://www.w3.org/2000/svg"><g><path d="m511.375 255.687-57.89-64.273 9.064-86.045-84.65-17.921-43.18-75.011-79.031 35.32-79.031-35.32-43.18 75.011-84.65 17.921 9.063 86.045-57.89 64.273 57.889 64.273-9.063 86.045 84.65 17.921 43.18 75.011 79.031-35.321 79.031 35.321 43.18-75.011 84.65-17.921-9.064-86.045zm-255.687 175.071-66.544 29.74-36.35-63.146-71.3-15.095 7.63-72.444-48.749-54.125 48.749-54.125-7.63-72.444 71.3-15.095 36.35-63.146 66.544 29.739 66.543-29.739 36.35 63.146 71.301 15.095-7.63 72.444 48.748 54.124-48.749 54.125 7.63 72.443-71.301 15.095-36.35 63.146z"></path><path d="m340.497 179.725-107.203 120.104-66.734-66.734-21.213 21.213 89.186 89.186 128.345-143.792z"></path></g></svg>
      </IconWrapper>

      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}
