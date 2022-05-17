import styled from "styled-components";

const Container = styled.div`
  line-height: 0;
  display: flex;
  margin: 5px;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 50%;
  transition: linear 0.25s;
  height: 128px;
  width: 128px;
  background: cover;
  &:hover {
  transition: ease-out 0.2s;
  border: 1px solid #ffffff;
  -webkit-transition: ease-out 0.2s;
  }
`;

const Img = styled.img`
width: ${(props) => props.w || "128px"};
height: ${(props) => props.h || "128px"} ;
border-radius: 50%;
`;

export { Container, Img };
