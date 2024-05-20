import { api } from "../..";

export const createAccount = async ({
  firstName,
  lastName,
  email,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const reqObj = {
    nome: `${firstName} ${lastName}`,
    email,
    senha: password,

    // Below data are mocked due to time limitations
    dataDeNasciemto: "2002-05-01",
    sexo: "FEMININO",
    cpf: "7777777777777",
    estadoCivil: "CASADO",
    nivelEducacional: "SUPERIOR_GRADUACAO",
    rendaAnual: 100000.5,
    ocupacao: "EMPREGADO",
    endereco: {
      cep: "04689070",
      rua: "Rua Amoipira",
      numero: 201,
      complemento: "Condomínio",
    },
  };

  console.log(reqObj);

  await api.post("/usuario/cadastro", reqObj);
};
