import { checkEmptyField, validateCPF, validateDate, validateCNPJ, validateEmail } from "../../helpers/validation";

export const validationSchema = {
  welcome: {
    email: {
      validator: (value) => {
        const { isValid, message } = validateEmail(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
  },
  naturalPerson: {
    name: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "Nome é um campo obrigatório" };
        return { isValid: true };
      },
    },
    cpf: {
      validator: (value) => {
        const { isValid, message } = validateCPF(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    birthDate: {
      validator: (value) => {
        const { isValid, message } = validateDate(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    phone: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "Telefone é um campo obrigatório" };

        return { isValid: true };
      },
    }
  },
  legalPerson: {
    companyName: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "Razão social é um campo obrigatório" };
        return { isValid: true };
      },
    },
    cnpj: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "CNPJ é um campo obrigatório" };

        const { isValid, message } = validateCNPJ(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    companyOpeningDate: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "Data de abertura é um campo obrigatório" };

        const { isValid, message } = validateDate(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    phone: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "Telefone é um campo obrigatório" };

        return { isValid: true };
      },
    }
  },
  accessPassword: {
    password: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "Senha é um campo obrigatório" };

        if (value.length < 8) return { isValid: false, message: "Senha deve conter no mínimo 8 caracteres" };

        return { isValid: true };
      },
    },
  },
  reviewInformation: {
    email: {
      validator: (value) => {
        const { isValid, message } = validateEmail(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    name: {
      validator: (value, form) => {
        if (form.personType !== "fisica") return { isValid: true };

        if (checkEmptyField(value)) return { isValid: false, message: "Nome é um campo obrigatório" };
        return { isValid: true };
      },
    },
    cpf: {
      validator: (value, form) => {
        if (form.personType !== "fisica") return { isValid: true };

        const { isValid, message } = validateCPF(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    birthDate: {
      validator: (value, form) => {
        if (form.personType !== "fisica") return { isValid: true };

        const { isValid, message } = validateDate(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    phone: {
      validator: (value) => {
        if (checkEmptyField(value)) return { isValid: false, message: "Telefone é um campo obrigatório" };

        return { isValid: true };
      },
    },
    companyName: {
      validator: (value, form) => {
        if (form.personType === "fisica") return { isValid: true };

        if (checkEmptyField(value)) return { isValid: false, message: "Razão social é um campo obrigatório" };
        return { isValid: true };
      },
    },
    cnpj: {
      validator: (value, form) => {
        if (form.personType === "fisica") return { isValid: true };

        if (checkEmptyField(value)) return { isValid: false, message: "CNPJ é um campo obrigatório" };

        const { isValid, message } = validateCNPJ(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    companyOpeningDate: {
      validator: (value, form) => {
        if (form.personType === "fisica") return { isValid: true };

        if (checkEmptyField(value)) return { isValid: false, message: "Data de abertura é um campo obrigatório" };

        const { isValid, message } = validateDate(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
  }
};

export const validateForm = (step, form) => {
  const errors = {};

  const validation = validationSchema[step];

  if (validation) {
    Object.keys(validation).forEach((key) => {
      const { isValid, message } = validation[key].validator(form[key], form);
      if (!isValid) {
        errors[key] = message;
      }
    });
  }

  return errors;
}
