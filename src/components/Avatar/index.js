import { Container, Img } from "./styles";

import ProfileDefault from "../../assets/images/perfil.png";

export function Avatar(props) {

  return (
    <Container>
      {props.src ? (
        <Img src={props.src} alt="avatar" />
      ) : (
        <Img src={ProfileDefault} alt="avatar" />
      )}
      
    </Container>
   
  );
}
