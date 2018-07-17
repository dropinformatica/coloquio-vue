<template>
<div class="informacoes">
    <div class="container">
      <div class="foto-informacoes">
        <img src="static/img/agenda.jpg">
      </div>
      <div class="texto-informacoes">
        <h3>{{titulo}}</h3>
        <p>O Colóquio Será realizado nos dias 05 e 06 de setembro de 2018, de 08:00 as 12:00, 15:00 as 18:00 e 19:00 as 22:00,
          no Auditório II do Prédio 5 do Campus Coração Eucarístico da PUC Minas, conforme programa abaixo. O público alvo
          é constituído por estudantes de Graduação, Pós-Graduação, pesquisadores e profissionais da área do Direito, bem
          como das ciências Humanas e Sociais.</p>
        <button class="btn-informacoes">
          EDITAL
        </button>
      </div>
    </div>
  </div>
  </template>
  <script>
  export default{
      name:"Info",
      data(){
          return{
              titulo:'INFORMAÇÕES GERAIS'
          }
      }
  }
  </script>