<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary" dark>
        <v-toolbar-title>
          Proyecto Javascript Fullstack
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/productos">Productos</v-btn>
        <v-btn text>Login</v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
