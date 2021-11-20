import { Container } from "./style";

const Card = ({ user }) => {
  return (
    <Container>
      <h3>Dados Pessoais</h3>

      <p>
        <span>Nome:</span> {user.nome}
      </p>
      <p>
        <span>Email:</span> {user.email}
      </p>

      <h3>Endereço</h3>

      <p>
        <span>Rua:</span> {user.rua}
      </p>
      <p>
        <span>Número:</span> {user.numero}
      </p>
      <p>
        <span>Bairro:</span> {user.bairro}
      </p>
      <p>
        <span>Cidade:</span> {user.cidade}
      </p>
    </Container>
  );
};

export default Card;
