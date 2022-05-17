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
  border: solid 1px rgba(200, 200, 200, 0.4);
  max-width: 20rem;
  padding: 1rem;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  
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

export { Container, Div, Form, P };
