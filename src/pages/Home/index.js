import { TextCard } from "./styles";

import Navbar from "../../components/Navbar";
import { Box } from "../../components/Box";
import Card from "../../components/Card";
import Divider from "../../components/Divider";

export function Home() {
  return (
    <Card>
      <Box h="50px" />
      <TextCard>
        <h2>
          <span style={{ color: "#00ca4e" }}>{"<"}</span>
          what to do?
          <span style={{ color: "#00ca4e" }}>{"/>"}</span>
        </h2>
        <Box h="50px" />
        <h3>
          Você no controle da sua produtividade
          <span style={{ color: "#ff605c" }}>{"!"}</span>
        </h3>
      </TextCard>
      <Box h="50px" />
      <Divider />
      <Box jc="center" ac="center">
        <Navbar />
      </Box>
    </Card>
  );
}
