---
title: Entendendo de uma vez por todas a diferença entre slice e splice em arrays javascript, um guia definitivo.
layout: post
category: blog
description: Uma maneira simples e bem explicada de como entender de uma vez por todas a diferença entre slice e splice em arrays javascript e como e aonde usá-los.
author: alexleko
date: '2019-03-02 14:00:00'
tag:
    - javascript
    - tutoriais
---

Fala galera!!! Olha eu aqui de novo. O assunto que vamos discutir hoje, não é novo, e nem de longe, complexo, mas ainda causa bastante confusão. Eu mesmo no inicio me confundia bastante, e quero hoje, te ajudar a nunca mais errar a diferença entre `slice` e `splice`, creio que a própria entonação da pronuncia já faz com que nossa mente se engane. Traduzindo ao pé da letra, **Slice** é uma _fatia_, um _pedaço_ de algo, já **Splice** é _emenda_.

Tendo isso em mente, vamos fazer uma frase que defina de um jeito que não vamos esquecer:

## Slice

> Eu quero um **_slice_** desse "bolo" de Array (10), daqui (0) até ali (2).
>
> \- _Filosofo Alex Leko_

Mais uma:

> Esse **_slice_** é muito grande (10) corta pra mim daqui (7) até o final.
>
> \- _Filosofo Alex Leko_

E aí gostaram do meu lado poético?😝 Dúvido que vocês iram esquecer agora, eu não esqueço mais. Vejamos isso na pratica.

```js
var boloInteiro = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oPrimeiroPedacoEhMeu = boloInteiro.slice(0, 1);
console.log(oPrimeiroPedacoEhMeu);
// resultado: [1]

var prefiroDoMeio = boloInteiro.slice(4, 5);
console.log(prefiroDoMeio);
// resultado: [5]

var oRestoEhMeu = boloInteiro.slice(8);
console.log(oRestoEhMeu);
// resultado: [9, 10]

// O bolo é mágico, mesmo depois de distribuir, todas essas slices, ele ainda tá inteirinho
console.log(boloInteiro);
// resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Melhor que isso, só dois disso né.🤓 Creio que essa é a maneira mais fácil de entender, trazendo coisas do dia a dia para a programação, a lá, orientação a objetos. E se mesmo assim não conseguiu entender, deixa o seu comentário aí que tento te ajudar a entender de uma vez por todas.

> **Nota técnica**:
>
> O método slice() retorna uma cópia de parte de um array a partir de um subarray
> criado entre as posições begin e end (end não é necessário) de um array original.
> O Array original não é modificado. [Array.prototype.slice()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## Splice

Esse eu acho ainda mais interessante, pra trazer para o mundo real, continuaremos com o bolo, mas dessa vez, mas dessa vez ele não é mágico, cada fatia que você tira, realmente sai deixa de existir, mas se o bolo não for seu, você pode colocar o pedaço no lugar novamente, ou em qualquer outro:

> Quem foi que pegou meu pedaço de bolo daqui,
> pode **_Splice_** no lugar.😂 (forte essa)
>
> \- _Filosofo Alex Leko_
