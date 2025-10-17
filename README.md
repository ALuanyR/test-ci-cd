# QA Playground – Testes Automatizados com Cypress e GitHub Actions

[![Build Status](https://github.com/QA-Impact/teste-ci-cd/actions/workflows/teste.yml/badge.svg)](https://github.com/QA-Impact/teste-ci-cd/actions)

Este projeto demonstra testes end-to-end com [Cypress](https://www.cypress.io/) integrados com [GitHub Actions](https://github.com/features/actions) para executar automaticamente os testes ao realizar um push na branch `main`.

O objetivo é testar funcionalidades da página pública:  
🔗 https://qa-impact.github.io/playground-html/

---

## 🧪 Funcionalidades testadas

- Preenchimento e validação de formulário
  - Campos obrigatórios (nome, e-mail e idade)
  - Formato de e-mail inválido
  - Feedback de envio
  - Acessibilidade
  - Validação do botão de contraste alto

---

## ⚙️ Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) para automação de testes E2E
- [GitHub Actions](https://github.com/features/actions) como orquestrador CI

---

## 🚀 Como rodar o projeto localmente

### 1. Clone o repositório
```bash
git clone https://github.com/QA-Impact/teste-ci-cd.git
cd test-ci-cd
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute os testes
```bash
npx cypress run
# ou para abrir a interface gráfica:
npx cypress open
```

## 👤 Autor
**IMPACTA** – Projeto educacional e experimental para demonstrações de automação de testes.

---

## 📄 Licença
Este projeto está sob a licença MIT.