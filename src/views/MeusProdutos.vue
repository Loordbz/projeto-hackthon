<template>
    <v-container>
        <v-img
            fluid
            class="white--text align-end"
            width="100vw"
            height="200px"
            src="https://images.unsplash.com/photo-1551578657-a7e74acb0135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Imagem de chocolate derretido">
            <v-card-title>Nossos Produtos</v-card-title>
        </v-img>

        <section class="d-flex flex-wrap mx-10 my-8 justify-space-around align-center">    
            <v-card class="mx-auto mt-10" max-width="300" v-for="produto in listaProdutos" :key="produto.id">
                <v-img
                    :src="produto.imagem"
                    
                    width="70vh"
                    max-height="170px"
                    max-width="300px">
                </v-img>

                <v-card-title>
                    {{ produto.nome }}
                    <v-btn icon>
                        <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-subtitle>
                    Preço: R$ {{ produto.preco }}
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text> Informações da Loja </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="show = !show">
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            <strong>Loja:  {{ produto.local.nome }}</strong><br>
                            <address>
                                {{ produto.local.endereco }}<br>
                                CEP: {{ produto.local.cep }}
                            </address>
                        </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </section>
    </v-container>
</template>


<script>
export default {
  name: 'MeusProdutos',

  
  data() {
        return {
        listaProdutos: [],
        show: false
        }
    },
    

 created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(response => response.json())
        .then(json => {
            this.listaProdutos = json
        })
    }

}
</script>

<style scoped>

</style>
