import { checkEmptyField, validateCPF, validateDate, validateCNPJ } from "../../helpers/validation";

export const validationSchema = {
  welcome: {
    email: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "E-mail é um campo obrigatório" };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return {
            isValid: false,
            message: "O e-mail informado é inválido",
          };
        }

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
        if (!value) return { isValid: false, message: "CPF é um campo obrigatório" };

        const { isValid, message } = validateCPF(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    birthDate: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "Data de nascimento é um campo obrigatório" };

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
        if (!value) return { isValid: false, message: "CNPJ é um campo obrigatório" };

        const { isValid, message } = validateCNPJ(value);
        if (!isValid) return { isValid: false, message };

        return { isValid: true };
      },
    },
    companyOpeningDate: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "Data de abertura é um campo obrigatório" };

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
  accessPassword: {
    password: {
      validator: (value) => {
        if (!value) return { isValid: false, message: "Senha é um campo obrigatório" };

        if (value.length < 8) return { isValid: false, message: "Senha deve conter no mínimo 8 caracteres" };

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
      const { isValid, message } = validation[key].validator(form[key]);
      if (!isValid) {
        errors[key] = message;
      }
    });
  }

  return errors;
}
