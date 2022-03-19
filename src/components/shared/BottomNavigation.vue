<template>
    <div class="bottom-navigation">

    <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="primary"
    >
    <router-link to="/"> <!-- falta colocar a navegação-->
      <v-btn class="botao">
        <span>Início</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>


    </router-link>

    <router-link to="/"> <!-- falta colocar a navegação-->
      <v-btn class="botao">
        <span>Ovos de Pascoa</span>
        <v-icon>mdi-egg-easter</v-icon>
      </v-btn>
    </router-link>
 
    <router-link to="/"> <!-- falta colocar a navegação-->
      <v-btn class="botao">
        <span>Perfil</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </router-link>

    </v-bottom-navigation>
  </div>
</template>

<script>
  export default {
    name: 'BottomNavigation',
    data: () => ({ value: 0 }),
  }
</script>

<style scoped>

  
.bottom-navigation {
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.bottom-navigation a{
    text-decoration : none;
}

.botao{
    margin-top: 10px;
    margin-right: 30px;
}
</style>
