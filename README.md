# Semi API de memes 100% BRASILEIROS • By NotDev 💌

Este """sistema""" foi criado para suprir a ausência de uma API de memes brasileiros.

## NPMs IMPORTANTES PARA O FUNCIONAMENTO DO SISTEMA

> ```BATCH
> npm i discord.js fetch url

## Como usar

No arquivo **.js**,

- Os memes aleatórios estão definidos como `randomMeme`, então basta apenas jogar esse código no seu comando e colocar o `randomMeme` dentro do embed. Por exemplo:
> ```JS
> const { MessageEmbed } = require("discord.js"), // ou { RichEmbed }, dependendo da sua versão do discord.js
>       fetch = require('node-fetch'),
>       url = `https://raw.githubusercontent.com/LucianoDeveloper/memes-random/master/images.json`;
>       
>     fetch(`https://raw.githubusercontent.com/LucianoDeveloper/memes-random/master/images.json`, {
>				method: 'GET',
>				headers: {
>					'content-type': 'application/json'
>				}
>			}).then(userRes => userRes.json())
>			.then(response => {
>	    		
>     const random = Math.floor(Math.random() * response.images.length);
>    	const randomMeme = response.images[random];
>
>      const embed = new MessageEmbed()
>       .setDescription("Meme Gerado")
>       .setImage(randomMeme);
>
>      <channel>.send(embed); // só substituir o ( <channel> ) pelo canal desejado. Por exemplo: ( message.channel.send(embed); )
>
>       });

**[Notas]** Novos memes serão postados em dias aleatórios, pois possuo compromissos importantes.
