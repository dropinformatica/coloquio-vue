<template>

<div class="programacao"> 

  <div class="mascara-black"> 

    <div class="container">
      <div class="titulo">{{title}}</div>
      <div class="slide-palestra">

        <div class="palestrantes dia-cinco">
            <div class="horario">
            <b>08:00 - 12:00</b>
          </div>
          
          <div class="imagem-palestrante">
            <img src="static/img/puc.jpg">
          </div>
          <div class="nome">Abertura dia 05 </div>
          <div class="info-palestrante">
            <span class="from">Belo Horizonte/MG</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes  dia-cinco">
          <div class="horario">
            <b>15:00 - 18:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/puc.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Informações </div>
            <span class="from">Belo Horizonte/MG</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes  dia-cinco">
          <div class="horario">
            <b>19:00 - 20:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/ricardo.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Prof. Dr. Ricardo Adriano Massara Brasileiro </div>
            <span class="from">Belo Horizonte/MG (Milton Campos)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes dia-cinco">
          <div class="horario">
            <b>20:00 - 21:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/jean.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Prof. Dr. Jean-Christophe Merle </div>
            <span class="from">Alemanha (Universidade de Vectha)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes dia-cinco">
          <div class="horario">
            <b>21:00 - 22:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/diogo.jpg" >
          </div>
          <div class="info-palestrante">
            <div class="nome">Mestre Diogo Campos Sasdelli </div>
            <span class="from">Alemanha (Universidade de Vectha)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <div class="palestrantes  dia-seis">
          <div class="horario">
            <b>08:00 - 12:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/puc.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Abertura dia 06</div>
            <span class="from">Belo Horizonte/MG</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes dia-seis">
          <div class="horario">
            <b>15:00 - 18:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/puc.jpg" >
          </div>
          <div class="info-palestrante">
            <div class="nome">Informações </div>
            <span class="from">Belo Horizonte/MG</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
        <!-- ###### -->
        <div class="palestrantes dia-seis">
          <div class="horario">
            <b>19:00 - 20:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/julio.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Prof. Dr. Júlio Aguiar de Oliveira </div>
            <span class="from">Belo Horizonte/MG (PUC Minas – UFOP)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>

        <!-- ###### -->
        <div class="palestrantes dia-seis">
          <div class="horario">
            <b>20:00 - 21:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/max.jpg">
          </div>
          <div class="info-palestrante">
            <div class="nome">Palestra Dr. Alejandro Nava Tovar </div>
            <span class="from">México (UNAM)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
      </div>
      <!-- dia 5 -->

      <!-- <button class="btn-info-palestras">
        DOWNLOAD
      </button> -->
    </div>
    </div>
 </div>
  </template>
  
    <script>
export default {
  name: "Slide",
  data() {
    return {
      title: "PROGRAMAÇÃO"
    };
  }
};
</script>

    <style>
.programacao {
  text-align: center;
  background-image: url("../../static/img/event.jpg");
  background-size: 100%;
  background-attachment: fixed;
  min-height: 400px;
  color:#fff;
  font-weight: 100;
}

.programacao .titulo {
  margin-top:30px;
  font-weight: 100;
  font-size:30px;
}

.programacao p {
  font-size: 13px;
}

.programacao .mascara-black {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  min-height: 400px;

}

.programacao .slide-palestra .palestrantes {
  border-radius: 5px;
  margin-left: 10px;
  min-height: 300px;
  padding-top:30px;
}

.palestrantes .info-palestrante {
  flex: 1;
}

.palestrantes img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-bottom: 16px;
}

.palestrantes .horario {
 padding-bottom:24px;
}

.palestrantes .nome {
  color: #fff;
  font-weight: 100;
  font-size: 30px;
  line-height: 33px;
}

.palestrantes .from {
  font-size: 13px;
  /* padding: 0px 0px 30px 10px; */
}

.palestrantes ul {
  list-style: none;
}

.palestrantes i {
  color: #cfb53b;
}

.palestrantes .curriculo {
  padding: 10px 0px 0px 10px;
}
</style>