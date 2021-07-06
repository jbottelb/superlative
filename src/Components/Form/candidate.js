import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

// creates a selector for each candidate
export function Candidate({ name }) {
  return html` <option value="${name}">${name}</option> `;
}
