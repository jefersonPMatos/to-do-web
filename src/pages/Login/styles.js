import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  p {
    display: flex;
    justify-content: center;
    align-self: center;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
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

export const LabelStyle = styled.label`
  display: block;
  font-family: "Bebas Neue";
  letter-spacing: 2px;
  color: #fff;
`;
