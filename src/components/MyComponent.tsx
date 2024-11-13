import React from "react";
import { Container, Header, Button } from '../styles'; // Import styled-components

// Define the props type for the component
interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => {
  return (
    <Container>
      <Header>{title}</Header>
      
      <p>Roll No: 9813</p>
      <p>Batch: D</p>
      <p>Branch: Electronics and Computer Science</p>
    
    </Container>
  );
};

export default MyComponent;
