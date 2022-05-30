import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  margin-top: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  display: flex;
  align-self: center;
  color: #eb5353;
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

const LabelStyle = styled.label`
  display: block;
  font-size: 16px;
  color: #fff;
`;

export { Container, Form, P, Input, LabelStyle };
