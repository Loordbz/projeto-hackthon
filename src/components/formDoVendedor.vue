<template>
<v-main>

        <v-container>
            <img class="imagem" src="https://media.istockphoto.com/photos/pile-or-group-of-multi-colored-and-different-sizes-of-colourful-foil-picture-id1306996475?b=1&k=20&m=1306996475&s=170667a&w=0&h=1ux0DQXQ6qYzyhlr0Blo2i6UVICzmG9IIv5UDUENrKk="/>
            <v-card>

                <v-card-text class="mt-12">

                        <h1

                          class="text-center display-1 teal--text text--accent-3"

                        >Formulário de cadastro de produto</h1>
                        <p class="p2">Preencha o seguinte formulário para adicionar um produto a sua loja.</p>

                        <v-form class="form">
                            <v-text-field
      v-model="nomeDaLoja"
      label="Qual o nome da sua loja?"
      required
      @input="$v.nomeDaLoja.$touch()"
      @blur="$v.nomeDaLoja.$touch()"
    ></v-text-field>
    <v-text-field 
      v-model="nome"
      label="Nome do seu produto:"
      required
      @input="$v.nme.$touch()"
      @blur="$v.nome.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="endereço"
      label="Qual o seu endereço?"
      required
      @input="$v.endereço.$touch()"
      @blur="$v.endereço.$touch()"
    ></v-text-field>
    <v-text-field prefix="R$"
      v-model="preço"
      label="Qual o preço do seu produto?"
      required
      @input="$v.preço.$touch()"
      @blur="$v.preço.$touch()"
    ></v-text-field>
    
    <v-btn class="botao" color="primary"
      @click="enviar"
    >
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
    name:"formDoVendedor"
}
</script>

<style scoped>
.div{
    margin: 5px
}

.p2{
    font-size: 16pt;
    margin-top: 40px;
}

#form{
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center
}

.imagem{
    max-width: 75% ;
    display: block;
    margin: 0 auto;
    border-radius: 5px;
}

</style>