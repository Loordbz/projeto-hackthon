<template>
    <div class="app-top-bar">
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click="drawer = true" color="black"></v-app-bar-nav-icon>
            <v-toolbar-title>
            Conexão Doce
            </v-toolbar-title>
             <v-spacer />

    <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" color="primary" small fab @click="darkMode">
            <v-icon class="ml-1">mdi-moon-waning-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>  

       <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs"  small fab @click="darkMode">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
            <v-list-item-group v-model="group" active-class="secondary">

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

            <router-link to="/sobre">
                <v-list-item>
                <v-list-item-icon>
                    <v-icon>mdi-information</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                    Sobre o Projeto
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
  },
  methods: {
      darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style scoped>
h1 {
    color:black;
}

.app-top-bar a{
      text-decoration: none;
    }
</style>