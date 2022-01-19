<template>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">My Wishlist</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row col-md-12 modal-body container mx-auto">
                    <div v-if="myWishlist.length > 0">
                        <div class="card mb-3" style="max-width: 540px;"
                            v-for="(item, index) in myWishlist" :key="item">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex">
                                    <img :src="item.img" class="img-fluid rounded-start adjust-image" :alt="item.description" :title="item.name">
                                </div>
                                <div class="col-md-8 d-flex">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">{{ item.name }}</h5>
                                        <p class="card-text fw-bold text-muted">${{ item.price }}</p>
                                        <button @click="addCart(item)" type="button" class="d-flex btn btn-outline-dark add-cart rounded-3">
                                            <span class="fs-6"><i class="bi bi-cart"></i></span>
                                        </button>
                                    </div>
                                    <button type="button" @click="remove(index)" class="btn-close fs-6 bg-secondary mt-3 me-2"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <h5>Empty List</h5>
                    </div>
                    
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myWishlist from '../data/wishlist.js'
import cartProducts from '../data/cart.js'

export default {
    name: 'Wishlist',
    data() {
        return {
            myWishlist: myWishlist,
            cartProducts: cartProducts,
        }
    },
    methods: {
        remove(index) {
            myWishlist.splice(index, 1)
            alert("REMOVED TO WISHLIST!")

        },
        addCart(item) {
            cartProducts.push(item)
            alert("ADDED TO CART!")
        }
    }
}
</script>

<style lang="scss" scoped>
.adjust-image {
    object-fit: cover;
}
// .resize-modal {
//     right: 0;
// }
</style>

