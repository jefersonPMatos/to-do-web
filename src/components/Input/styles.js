import styled from "styled-components";

const Inpt = styled.input`
  font-family: "Prompt", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.025rem;
  font-style: normal;
  color: #ffffff;
  background-color: #101523;
  padding: 0.3rem 0.7rem;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  width: 300px;
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
  font-family: "Prompt", sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.085rem;
  font-style: normal;
  text-transform: uppercase;
  color: #ffffff;
`;

export { Inpt, LabelStyle };
