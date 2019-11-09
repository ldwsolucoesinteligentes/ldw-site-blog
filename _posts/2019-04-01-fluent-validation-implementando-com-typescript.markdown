---
title: Fluent Validation .NET - Implementando com Typescript
description: Exemplos da biblioteca FluentValidaton .NET escritos em Typescript
layout: post
category: blog
hidden: true
date: '2019-04-01 22:00:00'
tag:
    - typescript
    - desenvolvimento
    - front-end
    - tutoriais
author: alexleko
---

Não sei se todos sabem, mas iniciei a minha carreira de programação com a **linguagem C#**, da Microsoft, a qual sou apaixonado até hoje, apesar de também programar em outras linguagens. E na comunidade .NET em geral, existe uma biblioteca muito conhecida para validação, é a:

> [FluentValidation](https://github.com/JeremySkinner/FluentValidation) - _A popular .NET validation for building strongly-typed validation rules._

Costumo usá-la bastante em meus projetos, é de grande valia para validações robustas e fáceis de implementar, e como nos últimos anos, tenho feito bastante projetos no front end, com **Angular**, **ReactJS** e **VueJS**, como a maioria dos desenvolvedores que iniciaram carreira no back end, nunca gostei da liberdade que o **Javascript** me dá, sem uma tipagem estática, isso me fez, adepto de **Typescript** desde os primórdios, e essa semana, _até porque, só consegui criar este blog a pouco tempo_, decidi mostrar como uso os conceitos do **Fluent Validation** com typescript.

Para os exemplos, usarei um projeto simples, do tipo _Console Application_, com **NodeJS** e o pacote do npm typescript. Primeiro criaremos uma pasta de trabalho (_Workspace_) chamada: <code>fluent-validation-typescript</code>
Eu uso bastante a linha de comando (_command line_), mas fique a vontade para usar a interface gráfica do seu sistema operacional, eu estou usando para escrever este post, **Linux** a distro [Fedora 29](https://getfedora.org/), caso queira seguir a risca os meus passos, abra o terminal e execute o seguinte comando: `mkdir fluent-validation-typescript`, para criar a pasta de trabalho (_Workspace_), navegue até a mesmo com o comando: `cd fluent-validation-typescript`, e assim então poderemos iniciar os trabalhos.

Para este exemplo, estou usando também o [Microsoft Visual Studio Code (VsCode)](https://code.visualstudio.com/), um excelente editor de texto, atualmente o mais utilizado entre os desenvolvedores, sinta-se a vontade para experimentá-lo. Quero informar, que para executar, alguns comandos a seguir, é necessário a instalação prévia do [NodeJS](https://nodejs.org). Voltando para nossa linha de comando (_command line_), execute os seguintes comandos:

-   `npm init -y`
    -   Para iniciar um ambiente **NodeJS** de desenvolvimento.
-   `npm i -D typescript`
    -   Instala o pacote **Typescript**, através do gerenciador de pacotes do **NodeJS**, _NPM_.
-   `node_modules/.bin/tsc --init`
    -   Este comando, criará um arquivo de configuração padrão para a compilação do **Typescript** para **Javascript**, tentarei fazer alguns posts no futuro, mais introdutórios sobre o assunto.

Caso tenha optado por usar o **VSCode**, como eu, execute o seguinte comando: `code .`, isso fará com que abra-o em nossa pasta de trabalho.
Crie um arquivo chamado `index.ts` e uma pasta chamada: `bin` com um arquivo `index.ts` dentro. Sua estrutura estará mais ou menos assim:

{% highlight raw %}

fluent-validation-typescript
....bin
.......index.ts
....index.ts
....package.json
....tsconfig.json

{% endhighlight %}

Finalmente, vamos ao código. 😁
Começaremos com as classes `ValidationFailure` e `ValidationResult`, responsáveis por padronizar os retornos, crie dois arquivos na pasta `bin` com os nomes: `validation-failure.ts` e `validation-result.ts`. Sua nova estrutura se parecerá com está:

{% highlight raw %}

fluent-validation-typescript
....bin
.......index.ts
.......validation-failure.ts
.......validation-result.ts
....index.ts
....package.json
....tsconfig.json

{% endhighlight %}

`validation-failure.ts`

```ts
export class ValidationFailure {
    public customState: any;
    public severity: Severity = Severity.Error;
    public errorCode: string = '';
    public formattedMessageArguments: any[] = [];
    public FormattedMessagePlaceholderValues: { [key: string]: any }[] = [] as any;
    public resourceName: string = '';

    constructor(
        public propertyName: string,
        public errorMessage: string,
        public attemptedValue?: any
    ) {}

    public toString() {
        return this.errorMessage;
    }
}
```

`validation-result`

```ts
import { ValidationFailure } from './validation-failure';

export class ValidationResult {
    public IsValid = () => this._errors.length === 0;

    constructor(failures?: ValidationFailure[]) {
        if (failures) {
            this._errors = failures.filter(e => e !== null);
        } else {
            this._errors = [];
        }
        this._ruleSetsExecuted = [];
    }

    private readonly _errors: ValidationFailure[];

    public get errors(): ValidationFailure[] {
        return this._errors;
    }

    private _ruleSetsExecuted: string[];

    public get ruleSetsExecuted(): string[] {
        return this._ruleSetsExecuted;
    }

    public toString() {
        return this._errors.map(e => e.errorMessage).join('\n');
    }
}
```
