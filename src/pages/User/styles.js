import styled from "styled-components";

export const Container = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Input = styled.input`
  display: block;
  color: #fff;
  font-size: 14px;
  background-color: transparent;
  width: 300px;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: 1px solid #fff;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    ::placeholder {
      color: transparent;
    }
  }
`;

export const ActionButtons = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: row;
`;
