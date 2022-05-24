import styled from "styled-components";

const Label = styled.label`
  display: flex;
  justify-content: center;
  color: #ffffff;
  background-color: #95cd41;
  padding: 0.35rem 0.75rem;
  border: 1px solid #393e46;
  border-radius: 4px;

  &:hover {
    transition: 0.3s ease;
    cursor: pointer;
    background: #393e46;
  }
`;

const Input = styled.input`
  display: none;
`;

export { Label, Input };
