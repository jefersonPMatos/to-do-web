import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Div = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 10rem;
`;

const Input = styled.input`
  display: block;
  font-size: 1.5rem;
  color: #393e46;
  padding: 0.3rem 0.7rem;
  border: 1px solid #393e46;
  border-radius: 4px;
  text-align: center;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid #95cd41;
  }
  ::placeholder {
    font-size: 1.5rem;
    text-transform: lowercase;
  }
`;

const LabelStyle = styled.label`
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
`;

const P = styled.p`
  display: flex;
  align-self: center;
  color: #ff4f32;
  font-size: 1rem;
  text-transform: lowercase;
`;

export { Container, Form, Div, Input, LabelStyle, P };
