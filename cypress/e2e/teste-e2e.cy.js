/// <reference types="cypress" />

describe("Testes End to end - QA Playground", () => {
  beforeEach(() => {
    cy.visit("playground-html");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Teste novo", () => {
    cy.log("Teste passando");
  });

  it("Deve preencher o formulário com sucesso", () => {
    cy.preencherForm("Luany", "luany@teste.com", 27);
    cy.get("#form-feedback").should(
      "contain",
      "Formulário enviado com sucesso!"
    );
  });

  it("Deve exibir mensagem de erro quando não preencher o campo nome", () => {
    cy.preencherForm("", "luany@teste.com", 27);
    cy.get("#name").should("match", ":invalid");
  });

  it("Deve exibir mensagem de erro quando não preencher o campo e-mail", () => {
    cy.preencherForm("Luany", "", 27);
    cy.get("#email").should("match", ":invalid");
  });

  it("Deve exibir mensagem de erro quando não preencher o campo Idade", () => {
    cy.preencherForm("Luany", "luany@teste.com", "");
    cy.get("#age").should("match", ":invalid");
  });

  it("Deve exibir mensagem de erro quando preencher e-mail com formato inválido", () => {
    cy.preencherForm("Luany", "luany.com", 27);
    cy.get("#email").should("match", ":invalid");
  });

  it("Deve ativar e validar o modo de alto contraste", () => {
    cy.get("body").should("not.have.class", "high-contrast");
    cy.get("#toggle-contrast").click();
    cy.get("body").should("have.class", "high-contrast");
  });
});
