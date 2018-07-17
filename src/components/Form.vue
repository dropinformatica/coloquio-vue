<template>
<div>
  <div class="ingressos">
  
      <div class="container">
        <h3>SUBMETER ARTIGO</h3>
        <h5>Para submissão de artigos faça a inscrição abaixo e realize o pagamento.</h5>
      </div>
  
  </div>
    <div class="inscricao">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="formulario wow fadeInLeft" data-wow-delay="0.6s">
              <p>Todos os campos são obrigatórios</p>
              <form>
                <input type="text" class="input-inscricao" placeholder="Nome" v-model="nome">
                <input type="text" class="input-inscricao" placeholder="Email" v-model="email">
                <input type="text" class="input-inscricao" placeholder="Telefone" v-model="telefone">

              </form>
              <button class="btn-inscricao" @click="enviar()">
                ENVIAR
              </button>
              {{msg}}
            </div>
          </div>
          <div class="col-6">
            <div class="info-inscricao">
              <img src="static/img/pay.jpg" class="wow fadeInRight" data-wow-delay="0.6s" width="100%">
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "FormUser",
  data() {
    return {
      nome: "",
      email: "",
      telefone: "",
      msg: ""
    };
  },
  methods: {
    enviar: function() {
      axios
        .post("http://localhost:3000/form", {
          nome: this.nome,
          email: this.email,
          telefone: this.telefone
        })
        .then(response => {
          this.msg = response.data.msg;
          console.log(response.data.msg);
        });
    }
  }
};
</script>