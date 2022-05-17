import { Btn } from "./styles";

export function Button({ children, ...rest }) {
  return (
    <>
      <Btn {...rest}>{children}</Btn>
    </>
  );
}
