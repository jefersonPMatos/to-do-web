import styled from "styled-components";

const CheckboxContainer = styled.div`
  width: 20rem;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  background-color: ${(props) => (props.checked ? "#97C160" : "transparent")};
  display: flex;
  align-items: center;
  &:hover {
    border: 1px solid #ffffff;
    cursor: pointer;
  }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
`;

const Text = styled.label`
  font-family: "Prompt", sans-serif;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.050rem;
  font-style: normal;
  color: ${(props) => (props.checked ? "#000" : "#FFF")};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  border-radius: 50%;
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(200, 200, 200, 0.4);
  img {
    display: ${(props) => (props.checked ? "flex" : "none")};
  }
  &:hover {
    cursor: pointer;
  }
`;

export { CheckboxContainer, HiddenCheckbox, Text, StyledCheckbox };
