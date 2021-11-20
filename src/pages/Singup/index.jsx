import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

import LayoutContainer from "../../components/LayoutContainer";
import { Form } from "../../styles/form";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

const Singup = ({ setUser }) => {
  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido."),
    senha: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Minímo 8 digítos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha precisa ter pelo menos: 1 número, 1 letra maiúscula, 1 letra minúscula e caracter especial."
      ),
    confirmacao: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("senha")], "Senhas diferentes"),

    rua: yup.string().required("Rua obrigatório"),
    numero: yup.string().required("Número obrigatório"),
    bairro: yup.string().required("Bairro obrigatório"),
    cidade: yup.string().required("Cidade obrigatório"),

    termos: yup.bool().oneOf([true], "Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();

  const onSubmitFunction = (data) => {
    setUser(data);
    history.push("/user");
  };

  return (
    <LayoutContainer>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3>Cadastro</h3>
        <Input
          placeholder="Nome de usuário*"
          register={register}
          name="nome"
          error={errors.nome?.message}
          widthDiv="100%"
        />
        <Input
          placeholder="Endereço de Email*"
          register={register}
          name="email"
          type="email"
          error={errors.email?.message}
        />
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Senha*"
            register={register}
            name="senha"
            type="password"
            error={errors.senha?.message}
            marginRigth="10px"
            widthDiv={"50%"}
          />
          <Input
            placeholder="Confirme sua senha*"
            register={register}
            name="confirmacao"
            type="password"
            error={errors.confirmacao?.message}
            widthDiv={"50%"}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Rua*"
            register={register}
            name="rua"
            error={errors.rua?.message}
            marginRigth="10px"
            widthDiv={"85%"}
          />
          <Input
            placeholder="Número*"
            register={register}
            name="numero"
            error={errors.numero?.message}
          />
        </div>
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Bairro*"
            register={register}
            name="bairro"
            error={errors.bairro?.message}
            marginRigth="10px"
            widthDiv={"70%"}
          />
          <Input
            placeholder="Cidade*"
            register={register}
            name="cidade"
            error={errors.cidade?.message}
          />
        </div>

        <Checkbox
          register={register}
          name="termos"
          error={errors.termos?.message}
        />

        <Button type="submit" text="CADASTRAR" />
      </Form>
    </LayoutContainer>
  );
};

export default Singup;
