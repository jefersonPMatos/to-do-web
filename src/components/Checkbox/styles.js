import styled from "styled-components";

export const CheckboxContainer = styled.div`
  width: 20rem;
  height: 35px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

export const Text = styled.label`
  color: ${(props) => (props.checked ? "#00ca4e" : "#fff")};
  font-size: 16px;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

export const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  margin-left: 2px;
  border-radius: 4px;
  background: #fefefe;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: ${(props) => (props.checked ? "flex" : "none")};
    z-index: 1;
  }
  &:hover {
    cursor: pointer;
  }
`;
