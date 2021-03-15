[![Lint](https://github.com/Lend-it/User/actions/workflows/lint.yml/badge.svg)](https://github.com/Lend-it/User/actions/workflows/lint.yml) [![Sonar build](https://github.com/Lend-it/User/actions/workflows/sonar.yml/badge.svg)](https://github.com/Lend-it/User/actions/workflows/sonar.yml) [![Commit Linter](https://github.com/Lend-it/User/actions/workflows/commit-linter.yml/badge.svg)](https://github.com/Lend-it/User/actions/workflows/commit-linter.yml) [![Application Test](https://github.com/Lend-it/User/actions/workflows/app-test.yml/badge.svg)](https://github.com/Lend-it/User/actions/workflows/app-test.yml)
# User
Serviço responsável pela interação com o Usuário.

Todos os comandos abaixo requerem a instalação de Docker e Docker-Compose.

## Ambientes
### Local
**[Disponível na porta 3001.](http://localhost:3001/)**

### Ambiente de homologação
**[Disponível no Heroku](https://lendit-user-hom.herokuapp.com/)**

### Ambiente de produção
**[Disponível no Heroku](https://lendit-user-prod.herokuapp.com/)**

***
## Colocando no ar localmente


1. Build
```shell
    make build
```
2. Executar
```shell
    make run
```
2.1 Executar em background
```shell
    make run-silent
```
2.2 Buildar e executar
```shell
    make run-build
```
3. Desativar o container
```shell
    make down
```

## Rodando os testes

```shell
    make test
```

## Acessando o banco de dados 

```shell
    make check-db
```