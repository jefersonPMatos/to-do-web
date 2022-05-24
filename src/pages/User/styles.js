import styled from "styled-components";

const Container = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`;

const DivInputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

const DivAvatar = styled.div`
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
  font-size: 0.8rem;
`;

const Input = styled.input`
  display: block;
  color: #fff;
  font-size: 1.5rem;
  background-color: #101523;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  text-align: center;
  width: 30rem;
  height: 2rem;
  &:hover {
    border: 1px solid #fff;
  }
  ::placeholder {
    font-size: 0.8rem;
  }
`;

const DivButtons = styled.div`
  gap: 0.3rem;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: row;
`;
export { Container, Div, Form, P, Input, DivButtons, DivAvatar, DivInputs };
