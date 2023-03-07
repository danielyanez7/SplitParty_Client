import axios from 'axios'

class ProductsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`
        })
    }

    getAllProducts() {
        return this.api.get('/getAllProducts')
    }

    saveProduct() {
        return this.api.post('/saveProduct')
    }

    getOneProduct(product_id) {
        return this.api.get(`/getOneProduct/${product_id}`)
    }

    editProduct(product_id) {
        return this.api.get(`/editProduct/${product_id}`)
    }

    deleteProduct(product_id) {
        return this.api.get(`/deleteProduct/${product_id}`)
    }

}

const productsService = new ProductsService()

export default productsService