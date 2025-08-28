# dnc-arq-nelson

Um projeto frontend moderno que utiliza **React** com **Vite**, configurado com **ESLint** para proporcionar um ambiente de desenvolvimento leve, rápido e com boas práticas de código.

## 📌 Status Atual

- Base inicial com **React + Vite** para desenvolvimento com recarregamento a quente (HMR).  
- Configuração básica de **ESLint** aplicada.  
- Estrutura do repositório já organizada:
  - `public/`
  - `src/`
  - Arquivos de configuração como `package.json`, `vite.config.js`, `eslint.config.js`

---

## 📑 Tabela de Conteúdos

- [Sobre](#sobre)  
- [Recursos](#recursos)  
- [Pré-requisitos](#pré-requisitos)  
- [Como Executar](#como-executar)  
- [Estrutura do Projeto](#estrutura-do-projeto)  
- [Scripts Disponíveis](#scripts-disponíveis)  
- [Boas Práticas](#boas-práticas)  
- [Sugestões Futuras](#sugestões-futuras)  
- [Licença](#licença)

---

## 📖 Sobre

Este projeto serve como template de frontend leve com **React** e **Vite**, com atenção à qualidade de código através do **ESLint**.  
Ideal para iniciar protótipos ou aplicações frontend modernas com experiência ágil de desenvolvimento.

---

## 🚀 Recursos

- Desenvolvimento ultrarrápido com **Vite** e **HMR** (Hot Module Replacement)  
- Suporte ao **React** com Fast Refresh  
- Linting via **ESLint** para manter padrão de código consistente e limpo  
- Estrutura flexível preparada para expansão futura  

---

## ⚙️ Pré-requisitos

- **Node.js** v14 ou superior  
- **npm** ou **yarn**

---

## ▶️ Como Executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/nelsonlima1989/dnc-arq-nelson.git
   cd dnc-arq-nelson
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. O aplicativo estará disponível em:
   ```
   http://localhost:3000
   ```

---

## 📂 Estrutura do Projeto

```
dnc-arq-nelson/
├── public/              
├── src/                 
│   └── ...              # Componentes, estilos, assets, etc.
├── .gitignore           
├── index.html           
├── package.json         
├── vite.config.js       
├── eslint.config.js     
└── README.md            
```

---

## 📜 Scripts Disponíveis

| Comando            | Descrição                                     |
|--------------------|-----------------------------------------------|
| `npm run dev`      | Inicia o servidor de desenvolvimento com HMR  |
| `npm run build`    | Gera versão otimizada para produção           |
| `npm run preview`  | Visualiza o build em um servidor local        |
| `npm run lint`     | Executa o ESLint para checagem de código      |

---

## ✅ Boas Práticas

- Mantenha o **ESLint** ativo durante o desenvolvimento (`npm run lint`)  
- Prefira componentes funcionais e hooks do React  
- Crie componentes reutilizáveis e bem isolados  
- Utilize boas mensagens de commit e comentários claros em trechos complexos  

---

## 💡 Sugestões Futuras

- Adicionar **TypeScript** com regras lint tipo-aware  
- Implementar testes unitários com **Jest** ou **Vitest**  
- Adicionar **React Router** para navegação entre páginas  
- Configurar **CI/CD** com GitHub Actions ou outra solução  

---

## 📄 Licença

Este projeto está disponível sob a **MIT License** — sinta-se à vontade para usar, modificar e compartilhar.
