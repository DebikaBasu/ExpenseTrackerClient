import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const galaxyAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #0e2c3e, #300e2e);
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${galaxyAnimation} 20s infinite linear;
  text-align: center;
`;

const Button = styled(Link)`
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #32c5ff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  &:hover {
    background-color: #1d99e1;
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  color: #f6c90e;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
  color: #8cb4e1; /* Change the color to your desired one */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const HighlightText = styled.span`
  color: #f6c90e; /* Adjust the highlight color as needed */
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Welcome to Expense Tracker</Title>
      <Subtitle>
        <HighlightText>Choose your tracking mode</HighlightText>
      </Subtitle>
      <Button to="/individual-tracker">Individual Expense</Button>
      <Button to="/group-tracker">Group Expense</Button>
    </Container>
  );
};

export default HomePage;