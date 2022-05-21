import styled from "styled-components";

const CheckboxContainer = styled.div`
  width: 20rem;
  height: 35px;
  padding-left: 5px;
  margin: 0px 4px;
  border-radius: 5px;
  background-color: ${(props) => (props.checked ? "#97C160" : "#E5E5E5")};
  display: flex;
  align-items: center;
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
  color: ${(props) => (props.checked ? "#FFF" : "#000")};
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
  img {
    display: ${(props) => (props.checked ? "flex" : "none")};
    filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg)
      brightness(105%) contrast(68%);
  }
`;

export { CheckboxContainer, HiddenCheckbox, Text, StyledCheckbox };
