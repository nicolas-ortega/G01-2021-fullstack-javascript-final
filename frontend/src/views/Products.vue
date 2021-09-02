<template>
  <v-main>
    <h1 class="title-1 text-center my-5">Productos</h1>
    <section data-cy="products">
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="2"
          data-cy="product-item"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              :src="product.image"
              lazy-src="https://via.placeholder.com/300"
              aspect-ratio="1"
              class="white--text align-end"
              height="200px"
            >
            </v-img>
            <v-card-title></v-card-title>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  },
  created () {
    this.getProducts()
  }
}
</script>
