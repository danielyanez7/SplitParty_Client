import axios from 'axios'

class ProductsService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllProducts() {
        return this.api.get('/getAllProducts')
    }

    getEditProducts(productIds) {
        return this.api.post('/getEditProducts', productIds)
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