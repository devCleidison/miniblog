import { Container } from "./styles";

export const Input = ({ type = "text", placeholder, value, handleModal, ...rest }) => {
  return (
    <Container
      type={type}
      placeholder={placeholder}
      value={value}
      onClick={handleModal}
      {...rest}
    />
  );
};
