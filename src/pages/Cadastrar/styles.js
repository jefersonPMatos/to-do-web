import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const P = styled.p`
  display: flex;
  align-self: center;
  color: #ff605c;
  font-size: 14px;
`;

const Input = styled.input`
  display: block;
  color: #fff;
  font-family: "Roboto";
  font-size: 16px;
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

const LabelStyle = styled.label`
  display: block;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  color: #fff;
`;

export { Container, Form, P, Input, LabelStyle };
