import { Container, Input, Error } from "./style";

const Checkbox = ({ register, name, error }) => {
  return (
    <Container>
      <Input>
        <input type="checkbox" {...register("termos")} />
        <label>Aceito os termos e condições.</label>
      </Input>
      <Error>{error && <p>{error}</p>}</Error>
    </Container>
  );
};

export default Checkbox;
