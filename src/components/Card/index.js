import {
  Container,
  Tools,
  Circles,
  RedCircle,
  YellowCircle,
  GreenCircle,
  Box,
  Content,
} from "./styles";

export default function Card({ children }) {
  return (
    <Container>
      <Tools>
        <Circles>
          <RedCircle>
            <Box />
          </RedCircle>
          <YellowCircle>
            <Box />
          </YellowCircle>
          <GreenCircle>
            <Box />
          </GreenCircle>
        </Circles>
      </Tools>
      <Content>{children}</Content>
    </Container>
  );
}
