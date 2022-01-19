<template>
    <!-- <div id="openAlert" class="position-sticky teste w-100"></div>       -->
    <div class="row col-md-4 col-sm-6 my-5 mx-auto justify-content-evenly position-relative box-product"> 
        <img :src="product.img" class="product-img" :alt="product.description" :title="product.name" data-bs-toggle="modal" data-bs-target="#exampleModal">  
        <p class="text-center my-3">{{ product.name }}</p>
        <div class="d-flex justify-content-center">
            <span class="fs-6 text-muted text-decoration-line-through fw-normal mx-1">${{ product.oldPrice.toFixed(2) }}</span>
            <span class="fw-bold fs-6 mx-1">${{ product.price.toFixed(2) }}</span>
        </div>
        <div class="d-flex position-absolute box-icons justify-content-evenly w-100">
            <span  @click="addWishlist(product)" class="rounded-circle bg-dark size-circle btn"><i class="bi bi-heart text-light fs-4"></i></span>
            <span class="rounded-circle bg-dark size-circle btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-cart text-light fs-4"></i></span>
        </div>
    </div>
</template>

<script>
import cartProducts from '../data/cart.js'
import myWishlist from '../data/wishlist.js'

export default {
    name: 'Thumbnail',
    props: ['product'],
   
    data() {
        return {
            cartProducts: cartProducts,
            myWishlist: myWishlist
        }
    },  
    methods: {
        // addCart(item) {
        //     cartProducts.push(item)
        //     alert("ADDED TO CART!")
        // },
        addWishlist(item) {
            myWishlist.push(item)
            alert("ADDED TO WISHLIST!")
        }
    }
}
</script>

<style lang="scss" scoped>
.teste {
    z-index: 99;
}
.box-icons {
    top: 85%;
    opacity: 0;
    transition: transform .5s, opacity .3s, background-color .5s;
}
.size-circle {
    transform: scale(1.1);
}
.product-img {
    cursor: pointer;
}
.box-product:hover {
    .box-icons {
        transform: translateY(-82px);
        opacity: 1;
    }
}
</style>