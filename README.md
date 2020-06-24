# Memes brasileiros em .json • By NotDev 💌

Este """sistema""" foi criado para suprir a ausência de uma API de memes brasileiros.


## Como usar

No arquivo **.js**,

- Os memes aleatórios estão definidos como `randomMeme`, então basta apenas jogar esse código no seu comando e colocar o `randomMeme` dentro do embed. Por exemplo:
> ```JS
> const { MessageEmbed } = require("discord.js")
> const { images } = require("./images.json")
> 
> const random = Math.floor(Math.random() * images.length)
> const randomMeme = images[random];
> 
> const embed = new MessageEmbed()
>       .setDescription("Meme Gerado")
>       .setImage(randomMeme)

> [Notas] É possível acontecer erros por causa do caminho da `.json`, então é recomendado que caso esteja pelo VSCode, copie o caminho do arquivo e cole dentro do `require()`

No arquivo **.json**,

- Basta apenas adicionar os memes de sua preferência. Mais memes serão adicionados com o tempo na `.json`, então fique de olho caso quiser atualizar