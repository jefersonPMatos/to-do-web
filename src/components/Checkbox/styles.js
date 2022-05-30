import styled from "styled-components";

const CheckboxContainer = styled.div`
  width: 20rem;
  height: 35px;
  transition: background-color 0.3s ease;
  /* background-color: ${(props) =>
    props.checked ? "#fefefe" : "transparent"}; */
  display: flex;
  align-items: center;
  &:hover {
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
  color: #fff;
  font-size: 14px;
  /* transition: ease;
  color: ${(props) => (props.checked ? "#000" : "#FFF")}; */
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  &:hover {
    cursor: pointer;
  }
`;

const StyledCheckbox = styled.label`
  width: 23px;
  height: 23px;
  margin-right: 6px;
  margin-left: 2px;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    filter: ;
    display: ${(props) => (props.checked ? "flex" : "none")};
  }
  &:hover {
    cursor: pointer;
  }
`;

export { CheckboxContainer, HiddenCheckbox, Text, StyledCheckbox };
