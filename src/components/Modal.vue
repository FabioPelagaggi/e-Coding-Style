<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Product Details</h5>
                    <button type="button" @click="resetCounter()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row col-md-12 modal-body">
                    <div class="col-md-4 my-auto image-carousel">
                        <div id="carouselExampleInterval" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img :src="product.img" class="d-block w-100" :alt="product.description" :title="product.name">
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img :src="product.img" class="d-block w-100" :alt="product.description" :title="product.name">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-8 btn-direction">
                        <h3 class="text-center my-5">{{ product.name }}</h3>
                        <p class="col-md-8 mx-auto text-secondary">{{ product.description }}</p>
                        <div class="d-flex justify-content-center my-4">
                            <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal mx-2">${{ product.oldPrice }}</span> ${{ product.price }}</span>
                        </div>
                        <div class="d-flex justify-content-center py-4">
                            <label for="select-size" class="me-3">Size</label>
                            <select id="select-size" v-model="choseSize" class="form-select form-select-sm w-25" aria-label=".form-select-sm example">
                                <option v-for="size in product.size" :key="size" :value="size">{{ size }}</option>
                            </select>
                        </div>
                        <div class="d-flex justify-content-center btn-direction">
                            <div class="mx-2 my-4  item-spacing">
                                <div class="input-group">
                                    <span @click="decrease()" class="btn btn-outline-dark py-1 px-3 fs-3" type="button" id="button-addon1">-</span>
                                    <input id="addQt" type="text" class="form-counter" :value="counter" name="button-addon1 button-addon2" required>
                                    <label for="addQt" class="d-none">addQt</label>
                                    <span @click="add()" class="btn btn-outline-dark py-1 px-3 fs-3" type="button" id="button-addon2">+</span>
                                </div>
                            </div>
                            <span @click="addCart(product)" type="button" class="d-flex my-4 mx-2 bg-dark text-light add-cart border-0 item-spacing">
                                <span class="ps-4 me-3 my-auto fs-5"><i class="bi bi-cart text-light"></i></span>
                                <p class="pe-4 my-auto fs-5">Add to cart</p>
                            </span>
                            <span @click="addWishlist(product)" type="button" class="btn btn-outline-dark rounded-0 mx-2 my-4 item-spacing">
                                <span class="my-auto fs-5"><i class="bi bi-heart fs-4"></i></span>
                            </span>
                        </div>
                        <hr class="w-75 bg-secondary mx-auto">
                        <p class="fs-6 text-center">REF: <span class="fs-6 text-secondary">{{ product.id }}</span></p>


                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="resetCounter()" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import cartProducts from '../data/cart.js'
import myWishlist from '../data/wishlist.js'

export default {
    name: 'Modal',
    props: ['product'],
    data() {
        return {
            counter: 1,
            cartProducts: cartProducts,
            myWishlist: myWishlist,
            choseSize: ''
        }
    },
    methods: {
        add() {
            return this.counter++
        },
        decrease() {
            if(this.counter != 1)
                return this.counter--
        },
        resetCounter() {
            return this.counter = 1
        },
        adjustDecimal() {
            return this.product.price.toFixed(2)
        },
        addCart(newItem) {
            if(this.choseSize != '') {
                // cartProducts.push(newItem)
                newItem.choseSize  = this.choseSize
                this.$store.commit('addCart', newItem)
                console.log(newItem);
                alert("ADDED TO CART!")
            }
            else 
                alert("SELECT A SIZE!")

        },
        addWishlist(item) {
            myWishlist.push(item)
            alert("ADDED TO WISHLIST!")
        }
    },
}
</script>

<style lang="scss" scoped>
.form-counter {
    width: 50px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    text-align: center;
}
.add-cart:hover {
    background-color: black !important;
}
.image-carousel {
    object-fit: cover;
}
@media (max-width: 986px) {
  .btn-direction {
    flex-direction: column;
  }
  .item-spacing {
    //   margin: 0 auto 15px auto;
      width: 200px; 
  }
}
</style>