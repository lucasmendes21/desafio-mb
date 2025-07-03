import { showNotification } from "../plugin/notification";
import { clearForm } from "../state/registration";

const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/registration", {
      method: "POST",
      body: JSON.stringify(adapt(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok && response.status === 400) {
      showNotification({
        type: "warning",
        message: result.message,
        duration: 3000,
      });
      return;
    }

    showNotification({
      type: "success",
      message: "Usuário criado com sucesso",
      duration: 3000,
    });
    clearForm()
  } catch (error) {
    showNotification({
      type: "error",
      message: "Erro no servidor ao criar usuário",
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
