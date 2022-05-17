import styled from 'styled-components';

const Btn = styled.button`
  margin-top: 40px;
  font-family: "Prompt", sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  font-style: normal;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #101523;
  padding: 0.35rem 0.75rem;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid #ffffff;
  }
`;

export { Btn };

