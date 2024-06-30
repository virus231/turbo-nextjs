export interface Field {
  type: "text" | "number" | "select";
  name: string;
  label: string;
  options?: string[];
}

export class FormBuilder {
  private fields: Field[] = [];

  addTextField(name: string, label: string): FormBuilder {
    this.fields.push({ type: "text", name, label });
    return this;
  }

  addNumberField(name: string, label: string): FormBuilder {
    this.fields.push({ type: "number", name, label });
    return this;
  }

  addSelectField(name: string, label: string, options: string[]): FormBuilder {
    this.fields.push({ type: "select", name, label, options });
    return this;
  }

  build(): Field[] {
    const result = [...this.fields];
    this.fields = []; // Reset fields after build
    return result;
  }
}
