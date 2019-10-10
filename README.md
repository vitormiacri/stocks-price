# Stocks Price

Aplicação que busca uma ação e informa o seu valor atual, algumas informações da empresa e um histórico de valores em forma de gráfico.

Para o desenvolvimento, foi utilizada a API gratuita da [IEX](https://iexcloud.io/docs/api/).

## Demonstração Online

Para acessar a demonstração online no [heroku](https://www.heroku.com) acesse -> [Stock\$Price](https://iexcloud.io/docs/api/).

## Instalação local

Para executar a **aplicação Web** , siga os passos abaixo:

- Clone este repositório:

```
git clone https://github.com/vitormiacri/stocks-price stocksprice
```

- Acesse a pasta `frontend`:

```
cd frontend
```

- Execute o comando abaixo para instalar as dependências:

```
npm install
or
yarn install
```

- Antes de executar a aplicação é preciso informar a chave pública da API da IEX.
  Para obter uma, siga o tutorial da documentação deles [clicando aqui.](https://iexcloud.io/docs/api/#rest-how-to)

- Agora renomeie o arquivo _.env.example_ para _.env_ e preencha a variável `REACT_APP_API_TOKEN` com o valor da chave fornecida pela IEX, exemplo:

```
REACT_APP_API_TOKEN=pk_532ce443b4b54f847fs870e54379a54d06c1
```

- Agora é só rodar o comando:

```
npm start
or
yarn start
```

## Instalação Mobile

> Atenção! Para a construção do aplicativo mobile, foi utilizado React Native, somente testado na plataforma **Android**

- Siga os passos abaixo para rodar a aplicação:

  > Caso ainda não tenha configurado um ambiente android em sua máquina siga esse [tutorial](https://facebook.github.io/react-native/docs/getting-started)

- Caso ainda não tenha feito, clone este repositório, caso contrário, pule para o próximo passo:

```
git clone https://github.com/vitormiacri/stocks-price
```

- Acesse a pasta `mobilestocks`:

```
cd mobilestocks
```

- Baixe as dependências:

```
npm install
or
yarn install
```

- Plug e/ou configure o seu emulador ou dispositivo;

- Depois do ambiente com a SDK e o emulador ou dispotivo Android configurado plugado, instale a aplicação:

```
react-native run-android
```

- Agora é só rodar o comando e aguardar o aplicativo iniciar:

```
npm start
or
yarn start
```
