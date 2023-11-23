// src/store/products.js
import {defineStore} from 'pinia';
import jsonData from "@/products/products";

export const productsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),

    actions: {
        async fetchProducts() {
            try {
                    this.products = jsonData;
                    console.log("end of loading")
                // Update the store with the fetched products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        },
    },
});