import axios from 'axios'
import { firebaseApp } from '@/firebase'

const productsURL = 'api/products'

export default {
  async getProducts () {
    try {
      const token = await firebaseApp.auth().currentUser?.getIdToken(true)
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const response = await axios.get(productsURL, { headers })
      return response.data
    } catch (error) {
      throw new Error('Productos momentáneamente no disponibles')
    }
  },
  async createProduct (data) {
    try {
      const token = await firebaseApp.auth().currentUser?.getIdToken(true)
      const headers = {
        Authorization: `Bearer ${token}`
      }
      const response = await axios.post(productsURL, data, { headers: headers })
      return response.data
    } catch (error) {
      throw new Error('Error al agregar nuevo producto')
    }
  }
}
