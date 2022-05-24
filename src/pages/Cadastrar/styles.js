import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
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
  color: #ff4f32;
  font-size: 1rem;
  text-transform: lowercase;
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

export { Container, Div, Form, P, Input, LabelStyle };
