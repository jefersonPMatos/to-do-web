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
  border: solid 1px rgba(200, 200, 200, 0.4);
  max-width: 20rem;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 10rem;
`;

const Input = styled.input`
  display: block;
  font-family: "Prompt", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.025rem;
  font-style: normal;
  color: #ffffff;
  background-color: #101523;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  max-width: 12rem;
  text-align: center;
  margin-bottom: 6px;
  &:hover {
    border: 1px solid #ffffff;
  }
  ::placeholder {
    font-family: "Prompt", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.025rem;
    font-style: normal;
    text-transform: lowercase;
  }
`;

const LabelStyle = styled.label`
  display: block;
  font-family: "Prompt", sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.085rem;
  font-style: normal;
  text-transform: uppercase;
  color: #ffffff;
`;

const P = styled.p`
  display: flex;
  font-family: "Prompt", sans-serif;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-style: normal;
  text-transform: uppercase;
`;

export { Container, Form, Div, Input, LabelStyle, P };
