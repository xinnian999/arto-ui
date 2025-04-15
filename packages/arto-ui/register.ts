import components from "@arto-ui/components";

class Register {
  constructor() {
    Object.values(components).forEach((register) => new register());
  }
}

export default Register;
