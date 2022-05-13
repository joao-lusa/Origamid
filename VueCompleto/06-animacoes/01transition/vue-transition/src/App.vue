<!--
  Crie um modal e anime a entrada/saída do mesmo
  Utilize um botão para controlar se o modal aparece
  ou some da tela.
 -->
<template>
  <div id="App">
    <button @click="modalAtivo = !modalAtivo">Cadastre-se</button>
    <transition name="modal">
      <div class="modal-wrapper" v-show="modalAtivo" @click="cliqueFora">
        <div class="modal">
          <h1>Cadastre-se</h1>
          <form>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" />
            <input type="submit" value="logar" />
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      modalAtivo: false,
    };
  },
  methods: {
    cliqueFora({ currentTarget, target }) {
      if (currentTarget === target) this.modalAtivo = false;
    },
  },
  components: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
#App {
  margin: 0px 0px 20px 0px;
}
h1 {
  font-family: "Courier New", Courier, monospace;
}
.modal-wrapper {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: scroll;
}
.modal {
  background: #e5e5e5;
  padding: 20px;
  max-width: 400px;
  margin: 120px auto 0 auto;
  z-index: 10;
}
label {
  display: block;
}
input,
button {
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 15px 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}
input[type="submit"],
button {
  width: 200px;
  background: #84e;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  font-family: "Courier New", Courier, monospace;
}
input[type="submit"]:active,
button:active {
  background: #94e;
}
button {
  margin: 20px auto;
  display: block;
  cursor: poiter;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active,
.modal-leave-to {
  transition: opacity 0.3s;
}
.modal-enter-to .modal {
  animation: slide 0.3s;
}
.modal-leave-to .modal {
  animation: slide 0.3s reverse;
}
@keyframes slide {
  from {
    transform: translate3d(0, -40px, 0);
  }
  to {
    transform: translate3d(0, 0px, 0);
  }
}
</style>
