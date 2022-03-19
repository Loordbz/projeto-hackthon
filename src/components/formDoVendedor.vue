<template>
  <v-main>
    <v-container>
      <img
        class="imagem"
        src="https://media.istockphoto.com/photos/pile-or-group-of-multi-colored-and-different-sizes-of-colourful-foil-picture-id1306996475?b=1&k=20&m=1306996475&s=170667a&w=0&h=1ux0DQXQ6qYzyhlr0Blo2i6UVICzmG9IIv5UDUENrKk="
      />
      <v-card>
        <v-card-text class="mt-12" color="primary">
          <h1 class="text-center display-1">
            Formulário de cadastro de produto
          </h1>
          <p class="p2">
            Preencha o seguinte formulário para adicionar um produto a sua loja.
          </p>

          <v-form class="form">
            <v-text-field
              v-model="nome"
              label="Título do anúncio:"
              required
              @input="$v.nme.$touch()"
              @blur="$v.nome.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="sabor"
              label="Sabor:"
              required
              @input="$v.nme.$touch()"
              @blur="$v.nome.$touch()"
            ></v-text-field>
            <v-text-field
              prefix="R$"
              v-model="preço"
              label="Preço:"
              required
              @input="$v.preço.$touch()"
              @blur="$v.preço.$touch()"
            ></v-text-field>
            <v-file-input
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              placeholder="Insira a foto do produto"
              prepend-icon="mdi-camera"
              required
              label="Insira a foto do produto"
            ></v-file-input>

            <v-btn type="submit" value=null class="botao" color="primary" @click="sucesso">
              Enviar
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>



<script>
export default {
  name: "formDoVendedor",
    data(){
       return{
           nome: ""
     }
       },

methods: { 
     sucesso() {
        alert("Produto cadastrado com sucesso!");
        this.form.nome = ""
        }
        }
    }
    


</script>

<style scoped>
.div {
  margin: 5px;
}

.p2 {
  font-size: 16pt;
  margin-top: 40px;
}

#form {
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}

.imagem {
  max-width: 75%;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
}

h1 {
  color: #ba68c8;
}
</style>