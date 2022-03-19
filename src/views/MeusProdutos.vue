<template>
    <v-container>
        <v-img class="fill-height"
            src="https://images.unsplash.com/photo-1551578657-a7e74acb0135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Imagem de chocolate derretido"
            max-height="300"
            fluid>
        </v-img>    
        <v-card class="mx-auto" max-width="344" v-for="produto in listaProdutos" :key="produto.id">
            <v-img
                :src="produto.imagem"
                height="200px">
            </v-img>

            <v-card-title>
                {{ produto.nome }}
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
                        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>


<script>
export default {
  name: 'MeusProdutos',

  data() {
        return {
        listaProdutos: []
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
