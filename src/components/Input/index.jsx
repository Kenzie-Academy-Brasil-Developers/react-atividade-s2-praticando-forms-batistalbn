import { Container, InputContainer } from "./style";

const Input = ({ register, name, error, widthDiv, marginRigth, ...rest }) => {
  return (
    <Container widthDiv={widthDiv} marginRigth={marginRigth}>
      <InputContainer
        isErrored={Boolean(error)}
        {...register(name)}
        {...rest}
      />
      <div>{error && <p>{error}</p>}</div>
    </Container>
  );
};

export default Input;
