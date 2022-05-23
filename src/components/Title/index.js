import { H1 } from "./styles";

export function Title({ children, ...rest }) {
  return <H1 {...rest}>{children}</H1>;
}
