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
      <app-alert
        v-if="alert"
        :message="alert.message"
        :type="alert.type"
        :closeAlert="closeAlert"
      />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppAlert from '@/components/AppAlert'

export default {
  name: 'App',
  components: {
    AppAlert
  },
  computed: {
    ...mapState(['alert'])
  },
  methods: {
    ...mapActions(['setAlert']),
    closeAlert () {
      this.setAlert(null)
    }
  }
}
</script>
