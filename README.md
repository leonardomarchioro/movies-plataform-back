# Movies API

## Visão Geral

Este serviço é responsável por duas principais funcionalidades: a criação e autenticação de usuários, e o gerenciamento do aluguel de filmes por esses usuários.

## Estruturas principais

- [Node.Js](https://nodejs.org/en)
- [Nest.Js](https://nestjs.com/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)

### Iniciando o serviço

Antes de iniciar os serviços, certifique-se de que estão instalados na sua maquina o **Docker, Node.Js, Nest.Js, e o yarn**

1. Configurando variáveis:
   > copie o arquivo .env.example para o arquivo .env, certifique-se que todas as variáveis possuam valores válidos.

```
cp .env.example .env
```

2. Iniciar container Docker:

```shell
docker-compose up -d
```

> Esse comando irá rodar todas as instancias docker descritas no docker-compose
> (Opcional visualizar logs)

```shell
docker-compose logs  -f  service  name
```

3. Instalar Dependências:

```shell
yarn install
```

4. Rodando Migrações:

```shell
yarn prisma migrate dev
```

5. Rodando o Serviço:

```shell
yarn dev
```

## Arquitetura

A arquitetura limpa tem como objetivo simplificar o código para facilitar sua manutenção, extensão e modificação. Isso é feito através da divisão da estrutura do código em camadas, onde cada camada tem responsabilidades mutuamente dependentes para fazer a aplicação funcionar. A arquitetura em camadas também impõe um controle nas dependências das classes, permitindo que uma classe se comunique apenas com as classes de níveis adjacentes, impedindo que uma classe de regra de negócio dependa diretamente de uma funcionalidade de terceiros.

## As Camadas:

### A Camada Core:

A camada core ou main é a principal do sistema, nele é contido todas as declarações de alto nível, todos os modelos e exceções do nosso serviço.

Formada por:

1. Features:
   > São nossas abstrações de alto nível geralmente interfaces ou classes abstratas com métodos que representam as funcionalidades.
2. Models
3. Exceptions

### A Camada Adapter:

A camada de adaptação é principalmente responsável por ligar a camada central core com a camada de infraestrutura, nessa camada acontece a aplicação do padrão adapter e também ocorre o tratamento de exceções.

Formada por:

1. Connectors
2. Services:
   > Representam a conexão entre a camada de infra ( geralmente controllers ) e a camada de negocio ( geralmente Features ).

### A Camada Infra:

A camada mais "livre" da arquitetura, essa parte é direcionada a implementação de classes que são utilizadas pela regra de negocio.

Formada por:

1. Controllers
2. Middlewares
3. Validations
4. Modules
5. Guardas de Rotas
6. Data Transfer Objects (DTOS)
