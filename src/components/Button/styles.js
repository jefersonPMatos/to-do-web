import styled from "styled-components";

const Btn = styled.button`
  font-size: 0.9rem;
  color: #ffffff;
  background: #95cd41;
  padding: 0.4rem;
  border: none;
  border-radius: 4px;
  max-height: 20rem;
  &:hover {
    transition: 0.3s ease;
    cursor: pointer;
    background: #393e46;
  }
`;

export { Btn };
