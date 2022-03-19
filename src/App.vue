<template>
  <v-app>
    <AppTopBar/>
    <v-main>
      <router-view/>
    </v-main>
    <BottomNavigation/>
  </v-app>
</template>

<script>
import AppTopBar from './components/shared/AppTopBar'
import BottomNavigation from './components/shared/BottomNavigation'

export default {
  name: 'App',
  components: {
    AppTopBar,
    BottomNavigation
  }
};
</script>

<style>
.link-home {
  text-decoration: none;
}
</style>
