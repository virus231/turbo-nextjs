import { Field, FormBuilder } from "./FormBuilder";

export class FormDirector {
  private builder: FormBuilder;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  createLoginForm(): Field[] {
    return this.builder
      .addTextField("username", "Username")
      .addTextField("password", "Password")
      .build();
  }

  createRegistrationForm(): Field[] {
    return this.builder
      .addTextField("username", "Username")
      .addTextField("email", "Email")
      .addTextField("password", "Password")
      .addNumberField("age", "Age")
      .addSelectField("country", "Country", [
        "USA",
        "Canada",
        "UK",
        "Australia",
      ])
      .build();
  }
}
