const options = {
  openapi: "Disable", // Enable/Disable OpenAPI. By default is null
  language: "pt-BR", // Change response language. By default is 'en-US'
  disableLogs: true, // Enable/Disable logs. By default is false
  autoHeaders: true, // Enable/Disable automatic headers capture. By default is true
  autoQuery: true, // Enable/Disable automatic query capture. By default is true
  autoBody: true, // Enable/Disable automatic body capture. By default is true
};

const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "USEIT API", // by default: 'REST API'
    description: "API da aplicação USEIT", // by default: ''
  },
  host: "localhost:5000", // by default: 'localhost:3000'
  basePath: "/", // by default: '/'
  schemes: ["http"], // by default: ['http']
  consumes: ["application/json"], // by default: ['application/json']
  produces: ["application/json"], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "Users", // Tag name
      description: "Rotas de usuário", // Tag description
    },
    {
      name: "Auth", // Tag name
      description: "Rotas com TOKEN de validação de sessão", // Tag description
    },
    {
      name: "Products", // Tag name
      description: "Rotas de produtos", // Tag description
    },
    {
      name: "Professions", // Tag name
      description: "Rotas de profissionais", // Tag description
    },
    {
      name: "Categories", // Tag name
      description: "Rotas de categorias de produtos", // Tag description
    },
    {
      name: "Rent Product", // Tag name
      description: "Rotas de aluguel de produtos", // Tag description
    },
    {
      name: "Workers", // Tag name
      description: "Rotas de profissionais", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {}, // by default: empty object (Swagger 2.0)
  components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputFile = "./src/utils/swagger-output.json";
const endpointsFiles = ["./src/routes/routes.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  console.log("Documentação gerada!");
});
