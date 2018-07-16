<template>

<div class="programacao">  
    <div class="container">
      <h1>
        <b>{{title}}</b>
      </h1>
      <button class="btn-info-palestras cinco">
        05/09
      </button>
      <button class="btn-info-palestras seis">
        06/09
      </button>
      <button class="btn-info-palestras todas">
        Todas
      </button>


      <div class="slide-palestra">

        <div class="palestrantes dia-cinco">
          <div class="horario">
            <b>08:00 - 12:00</b>
          </div>
          <div class="imagem-palestrante">
            <img src="static/img/puc.jpg" class="img-thumbnail image">
          </div>
          <div class="info-palestrante">
            <div class="nome">Abertura dia 05 </div>
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
            <img src="static/img/puc.jpg" class="img-thumbnail image">
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
            <img src="static/img/ricardo.jpg" class="img-thumbnail image">
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
            <img src="static/img/jean.jpeg" class="img-thumbnail image">
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
            <img src="static/img/diogo.jpg" class="img-thumbnail image">
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
            <img src="static/img/puc.jpg" class="img-thumbnail image">
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
            <img src="static/img/puc.jpg" class="img-thumbnail image">
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
            <img src="static/img/julio.jpg" class="img-thumbnail image">
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
            <img src="static/img/max.jpg" class="img-thumbnail image">
          </div>
          <div class="info-palestrante">
            <div class="nome">Palestra Dr. Alejandro Nava Tovar </div>
            <span class="from">México (UNAM)</span>
            <p class="curriculo">Apresentação de comunicações</p>
          </div>
        </div>
      </div>
      <!-- dia 5 -->

      <button class="btn-info-palestras">
        DOWNLOAD
      </button>
    </div>
 </div>
  </template>
  
    <script>
export default {
  name: "Slide",
  data() {
    return {
      title: "Programação"
    };
  }
};
</script>

    <style>
.programacao {
  padding: 60px 0px 0px 0px;
  text-align: center;
  background: #eaeaea;
}

.programacao h1 {
  padding-bottom: 5px;
}

.programacao p {
  font-size: 13px;
}

.programacao .slide-palestra .palestrantes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  margin-left: 10px;
  min-height: 300px;
}

.palestrantes .info-palestrante {
  flex: 1;
}

.palestrantes img {
  flex: 1;
  margin-right: 30px;
}

.palestrantes .horario {
  padding-right: 30px;
}

.palestrantes .nome {
  color: #cfb53b;
  padding: 10px 0px 0px 10px;
  font-size: 20px;
}

.palestrantes .from {
  font-size: 13px;
  padding: 0px 0px 30px 10px;
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