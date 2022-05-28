<template>
  <div id="container">
    <div id="form">
      <label>E-mail</label>
      <br />
      <input type="email" placeholder="Ex.: maria@email.com" />
      <br />
      <label>Senha</label>
      <br />
      <input type="password" placeholder="123456"/>
      <br />
      <label>CEP</label>
      <br />
      <input type="number" placeholder="Ex.: 12345-678" />
      <br />
      <label>Endereço (com número)</label>
      <br />
      <input type="text" placeholder="Ex.: Rua Cuiabá, 175"/>
      <br />
      <label>Cidade</label>
      <br />
      <input type="text" placeholder="Ex.: Santos"/>
      <br />
      <label>Estado</label>
      <br />
      <input type="text" placeholder="Ex.: São Paulo" />
      <br />
      <br />
      <button>Registrar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerLogin",
  props: {
    name: String,
  },
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  transform: translateY(-50%);
  margin: 20px;
}

#form {
 /* border: 2px solid red;*/
  text-align: left;
  padding: 0 20px;
}

input{
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  height: 30px;
}

button{
  width: 100%;
  background-color: #c291bd;
  height: 30px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
