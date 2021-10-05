<template>
  <v-main>
    <h1 class="title-1 text-center my-5">Nuevo Producto</h1>
    <v-form ref="form">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Nombre"
        data-cy="name"
        required
      ></v-text-field>
      <v-text-field
        v-model="code"
        :rules="codeRules"
        label="Código"
        data-cy="code"
        required
      ></v-text-field>
      <v-text-field
        v-model="description"
        :rules="descriptionRules"
        label="Descripción"
        data-cy="description"
        required
      ></v-text-field>
      <v-text-field
        v-model="image"
        :rules="imageRules"
        label="Url Imagen"
        data-cy="image"
        required
      ></v-text-field>
      <v-btn class="mr-4" @click="create" data-cy="create-btn">Crear</v-btn>
    </v-form>
  </v-main>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  data () {
    return {
      name: '',
      nameRules: [v => !!v || 'Nombre es requerido'],
      description: '',
      descriptionRules: [v => !!v || 'Descripción es requerida'],
      code: '',
      codeRules: [v => !!v || 'Código es requerido'],
      image: '',
      imageRules: [v => !!v || 'Imagen es requerida']
    }
  },
  methods: {
    ...mapActions([
      'setAlert',
      'createProduct'
    ]),
    validate () {
      return this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    create () {
      const data = {
        name: this.name,
        description: this.description,
        code: this.code,
        image: this.image
      }
      if (this.validate()) {
        this.createProduct(data)
        this.reset()
      } else {
        this.setAlert({ message: 'Error al agregar producto', type: 'error' })
      }
    }
  }
}
</script>
