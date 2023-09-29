# PROJETO DE TESTES E2E - SOFIST - PLAYWRIGHT

## TECNOLOGIAS
- **TYPESCRIPT** - Linguagem de programação
- **NPM** - Gerenciador de pacotes
- **PLAYWRIGHT** - Framework de testes Web e API
- **ESLINT** - Ferramenta de lint
- **PRETTIER** - Padronizador estilístico
- **ALLURE REPORT** - Relatório de execução de testes personalizado

## INSTALANDO AS DEPENDÊNCIASs

### Dependências NPM
Execute:
>`npm install`

### Dependências Java - Allure Report
Instale o JDK-Java 8 ou superior. [Link para download.](https://www.oracle.com/java/technologies/downloads/#jdk20-windows)

Crie a variável de ambiente `JAVA_HOME` e insira o diretório do local onde foi instalado o JDK.

Exemplo: `C:\Program Files\Java\jdk-20`

## Executando todos os testes
>`npx playwright test`

## Executando todos os testes com a descrição
>`npx playwright test -g "descrição"`

## Executando testes em modo debug
>`npx playwright test -g "descrição" --debug`

## Executando testes gerando um relatório Allure

>`npx playwright test --reporter=line,allure-playwright`

>`allure generate ./allure-results --clean`

>`allure open ./allure-report`

## Executando o ESLint
Lembre-se: Instale a extensão **ESLINT** no VS-Code.
>`npx eslint .`

## Executando o Prettier
Lembre-se: Instale a extensão **Prettier - Code formatter** no VS-Code.
>`npx prettier . --write`
