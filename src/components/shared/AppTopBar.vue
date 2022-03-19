<template>
    <div class="geral">
        <v-app-bar app color="yellow" dark>
            <v-app-bar-nav-icon @click="drawer = true" color="black"></v-app-bar-nav-icon>
            <v-toolbar-title >
            <h1>Desafio Hackthon 2022</h1>
            </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
            <v-list-item-group v-model="group" active-class="yellow--text text--lighten-2">

            <router-link to="/">
                <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Início
                </v-list-item-title>
                </v-list-item>
            </router-link>

            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  name: 'AppTopBar',
  data() {
    return {
      drawer: false,
      group: null,
    }
  }
};
</script>

<style scoped>
h1 {
    color:black;
}
</style>