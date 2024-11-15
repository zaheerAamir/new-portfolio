import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background: var(--background-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.h1`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: var(--accent-color);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: var(--background-color);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--text-color);
    color: var(--accent-color);
  }
`;
