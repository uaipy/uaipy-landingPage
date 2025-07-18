# uaipy/landing-page

Este repositório contém o código-fonte de uma landing page, provavelmente desenvolvida para o projeto `uaipy`. Ela foi construída utilizando tecnologias modernas de desenvolvimento web, focando em uma experiência de desenvolvimento rápida e eficiente.

### Tecnologias Utilizadas

  * **React**: Uma popular biblioteca JavaScript para construir interfaces de usuário dinâmicas e interativas.
  * **TypeScript**: Um superconjunto fortemente tipado do JavaScript, que melhora a qualidade do código e a experiência do desenvolvedor.
  * **Vite**: Uma ferramenta de frontend de próxima geração que oferece um servidor de desenvolvimento extremamente rápido com Hot Module Replacement (HMR) e um processo de build otimizado.
  * **Tailwind CSS**: Um framework CSS utilitário para construir rapidamente designs personalizados.
  * **ESLint**: Um utilitário de linting plugável para JavaScript e TypeScript, garantindo a consistência do código e detectando possíveis erros.
      * Configurado com regras de lint sensíveis a tipos para TypeScript.
      * Inclui regras de lint específicas para React usando `eslint-plugin-react-x` e `eslint-plugin-react-dom`.
  * **pnpm**: Um gerenciador de pacotes rápido e eficiente em espaço em disco.

### Principais Funcionalidades

  * **Pilha de Frontend Moderna**: Aproveita React, TypeScript e Vite para uma aplicação robusta e de alto desempenho.
  * **Desenvolvimento Rápido**: O hot module replacement do Vite garante feedback rápido durante o desenvolvimento.
  * **Segurança de Tipo**: TypeScript aprimora a confiabilidade e a manutenibilidade do código.
  * **Estilização Utility-First**: Tailwind CSS oferece uma maneira flexível e eficiente de estilizar a landing page.
  * **Qualidade do Código**: A integração com ESLint ajuda a manter altos padrões e consistência no código.

-----

### Primeiros Passos

Para ter uma cópia local funcionando, siga estes passos simples.

#### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) e o [pnpm](https://pnpm.io/installation) instalados em sua máquina.

#### Instalação

1.  Clone o repositório:
    ```bash
    git clone https://github.com/uaipy/landing-page.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd landing-page
    ```
3.  Instale as dependências:
    ```bash
    pnpm install
    ```

#### Executando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm run dev
```

Isso geralmente abrirá a aplicação em seu navegador em `http://localhost:5173` (ou outra porta disponível).

#### Construindo para Produção

Para construir a aplicação para produção:

```bash
pnpm run build
```

Este comando criará um diretório `dist` contendo a build otimizada para produção.

### Estrutura do Projeto

  * `.editorconfig`: Define e mantém estilos de codificação consistentes.
  * `.env.example`: Um arquivo de exemplo para configurar variáveis de ambiente.
  * `.gitignore`: Especifica arquivos intencionalmente não rastreados para ignorar.
  * `pnpm-lock.yaml`: Arquivo de lock gerado pelo pnpm, garantindo versões consistentes das dependências.
  * `tailwind.config.js`: Arquivo de configuração do Tailwind CSS.

Para mais detalhes, você pode explorar o [repositório uaipy/landing-page no GitHub](https://github.com/uaipy/landing-page).
