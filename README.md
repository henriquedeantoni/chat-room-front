# Tela Segura

Este é a parte Front End do desafio técnico, o escopo do projeto é a criação de uma aplicação na qual deve conter uma tela segura em que somente pode ser acessada por no máximo 1 pessoa.
Quando uma pessoa esta acessando a tela segura ela fica bloqueada para os demais usuários.
Por ser a parte voltada para o Cliente o foco deste trabalho é a construção das telas e sua iteratividade.

## Telas

A aplicação é formada por 4 telas: Cadastro, Login, Main e Tela-segura. Esta ultima pode ficar sem acesso quando tem 1 usuário acessando.

  ![tela_1](https://github.com/henriquedeantoni/desafio-front/assets/147777120/b64f2fd2-3959-4972-a803-3853849ec2ce)
  <br>
  <p style="font-size: 20px;">Tela de Cadastro<p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/3a1f7fbe-7b2f-4a0c-85d0-5e9b1e75ffc6)
  <br>
  <p style="font-size: 20px;">Tela de Login</p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/9e1e41d8-1f0b-41fe-9f2a-969492b5b731)
  <br>
  <p style="font-size: 20px;">Tela Principal</p> 
  (1) - Lista de usuários presentes na tela <br>
  (2) - Ultimas mensagens <br>
  (3) - Botão para tela segura <br>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/ccb92097-16b1-409c-b94f-120619f47930)
  <br>
  <p style="font-size: 20px;">Tela Segura</p>
  <br>
  (https://github.com/henriquedeantoni/desafio-front/assets/147777120/e684add4-e33f-4cc0-8d78-06a50b729ed9)
  <br>
  <p style="font-size: 20px;">Tela Segura (Bloqueada)</p>


## Funcionalidades

As principais funcionalidades são depois do cadastro e login
- Funcionalidade 1: listagem de usuários (ver figura tela principal)
      Todos os usuários presentes na tela principal aparecem com seu username na caixa de Usuários Online, quando algum usuário sai a lista diminui.
      Quando alguem entra,  lista aumenta
- Funcionalidade 2: listagem de mensagens (ver figura tela principal)
      Todas as mensagens são listadas na caixa de mensagens
- Funcionalidade 3: Botão acesso tela segura (ver figura tela principal)
      Botão para acesso da tela segura, a tela segura permite apenas um usuário, portanto será bloqueada para os demais quando acessada por alguem
- Funcionalidade 4: Salvar a Mensagem (ver figura tela segura)
      Quando alguem esta na tela segura esta livre para fazer qualquer ação, por isso incluida a opção de salvar mensagem
- Funcionalidade 5: Bloqueio de tela (ver figura tela segura bloqueada)
      Quando alguem esta na tela principal e quer acessar a tela segura com alguem a ocupando cairá numa tela de bloqueio.

## Roteiro de Instalação







npm install --global yarn <br>
yarn create vite <br>
yarn add react-router-dom <br>
yarn add react-hook-use-form <br>
yarn add react-hook-form <br>
yarn add axios <br>
yarn add socket.io-client <br>






    yarn add yup <br>
    yarn add toastify-react <br>
    yarn add @hookform/resolvers yup <br>
    yarn add @mui/material @emotion/react @emotion/styled <br>
    yarn add styled-components <br>

    paleta de cores extraida da imagem background:

    /* CSS HEX */
--sky-blue: #8EC4D7ff;
--celeste: #ADEBE6ff;
--verdigris: #4AABA9ff;
--white: #FEFEFEff;
--carolina-blue: #73AACAff;


/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-right: linear-gradient(90deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-bottom: linear-gradient(180deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-left: linear-gradient(270deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-top-right: linear-gradient(45deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-bottom-right: linear-gradient(135deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-top-left: linear-gradient(225deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-bottom-left: linear-gradient(315deg, #8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
$gradient-radial: radial-gradient(#8EC4D7ff, #ADEBE6ff, #4AABA9ff, #FEFEFEff, #73AACAff);
