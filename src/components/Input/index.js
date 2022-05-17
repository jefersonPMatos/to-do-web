import { Inpt, LabelStyle } from "./styles";

export function Input({ children, ...rest}){
  return (
    <>
    <LabelStyle>
      {children}
      <Inpt
        {...rest}
      />
    </LabelStyle>
    </>
  );
};
