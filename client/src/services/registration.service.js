const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:8000/registration", {
      method: "POST",
      body: JSON.stringify(adapt(data)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const adapt = (data) => {
  const { birthDate, companyOpeningDate, cpf, cnpj, companyName, name, ...rest } = data;

  if (data.personType === "fisica") {
    return { birthDate, cpf, name, ...rest };
  }
  return { companyOpeningDate, cnpj, companyName, ...rest };
};

export { createUser };
