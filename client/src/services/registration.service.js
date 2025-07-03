import { showNotification } from "../plugin/notification";

const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/registration", {
      method: "POST",
      body: JSON.stringify(adapt(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    showNotification({
      type: "success",
      message: "Usuário criado com sucesso",
      duration: 3000,
    });
  } catch (error) {
    console.error(error);
    showNotification({
      type: "error",
      message: "Erro ao criar usuário",
      duration: 3000,
    });
  }
};

const adapt = (data) => {
  const { birthDate, companyOpeningDate, cpf, cnpj, companyName, name, ...rest } = data;

  if (data.personType === "fisica") {
    return { dateOfBirth: birthDate, cpf, name, ...rest };
  }
  return { companyOpeningDate, cnpj, companyName, ...rest };
};

export { createUser };
