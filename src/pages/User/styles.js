import styled from "styled-components";

const Container = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const Div = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  border: solid 1px rgba(200, 200, 200, 0.4);
  width: 30rem;
  padding: 0.5rem;
  border-radius: 4px;
  width: 80rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  border: solid 1px rgba(200, 200, 200, 0.4);
  padding: 0.5rem;
  border-radius: 4px;
  width: 80rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const P = styled.p`
  display: flex;
  color: #fff;
  font-size: 14px;
`;

const Input = styled.input`
  display: block;
  color: #fefefe;
  font-size: 16px;
  background-color: transparent;
  width: 300px;
  box-sizing: border-box;
  padding-inline: 0.5em;
  padding-block: 0.7em;
  border: none;
  border-bottom: 1px solid rgba(221, 221, 221, 0.39);
  transition: 0.2s ease;
  ::placeholder {
    font-size: 16px;
    text-transform: lowercase;
    color: rgba(221, 221, 221, 0.39);
  }
  &:hover {
    border-radius: 4px;
    background: rgba(221, 221, 221, 0.05);
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid #fefefe;
  }
`;

const ActionButtons = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: row;
`;
export { Container, Div, Form, P, Input, ActionButtons, Header };
