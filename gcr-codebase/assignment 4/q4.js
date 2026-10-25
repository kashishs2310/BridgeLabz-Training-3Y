// Q4: Custom Form Builder (Forms + Classes)

class FormBuilder {
  // fields: array of objects like { type: 'text', label: 'Username' }
  constructor(fields, containerId) {
    this.fields = fields;
    this.container = document.getElementById(containerId);
  }

  // Convert a label into a safe id/name, e.g. "Full Name" -> "full_name"
  static toKey(label) {
    return label.toLowerCase().replace(/\s+/g, "_");
  }

  // Build the HTML for the form and insert it using innerHTML
  render() {
    let html = '<form id="dynamicForm">';
    this.fields.forEach((field) => {
      const key = FormBuilder.toKey(field.label);
      html += `<label>${field.label}`;
      if (field.type === "textarea") {
        html += `<textarea name="${key}" id="${key}"></textarea>`;
      } else if (field.type === "select") {
        const options = (field.options || [])
          .map((o) => `<option value="${o}">${o}</option>`)
          .join("");
        html += `<select name="${key}" id="${key}">${options}</select>`;
      } else {
        html += `<input type="${field.type}" name="${key}" id="${key}">`;
      }
      html += "</label>";
    });
    html += '<button type="submit">Submit</button></form>';
    this.container.innerHTML = html;

    document.getElementById("dynamicForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = this.getFormData();
      console.log("Form data:", data);
      document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    });
  }

  // Return all entered values as an object
  getFormData() {
    const data = {};
    this.fields.forEach((field) => {
      const key = FormBuilder.toKey(field.label);
      data[key] = document.getElementById(key).value;
    });
    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" },
  { type: "number", label: "Age" },
  { type: "select", label: "Course", options: ["B.Tech", "BCA", "MCA"] },
  { type: "textarea", label: "About" },
];

new FormBuilder(fields, "formContainer").render();