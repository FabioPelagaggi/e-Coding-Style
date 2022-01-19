<template>
    <section id="" class="container bg-light min-vh-100">
        <div class="w-100 bg-light" style="height: 120px;"></div>
        <div class="bg-light d-flex justify-content-center my-auto p-4 border border-start-0 border-end-0" style="height: 120px;">
            <p class="my-auto fs-3">Checkout</p>
        </div>
        <div class="bg-light w-100 min-vh-100">
            <form>
                <fieldset disabled>
                    <legend class="fw-bold my-5">Billing & Shipping</legend>
                    <div class="col-md-10 d-flex  mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" :value="$store.state.userData.firstName">
                            <label for="floatingInput">First name</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" :value="$store.state.userData.lastName">
                            <label for="floatingPassword">Last name</label>
                        </div>
                    </div>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3 ">
                        <input type="email" class="form-control" id="floatingPassword" :value="$store.state.userData.email">
                        <label for="floatingPassword">Email Address</label>
                    </div>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
                        <input type="text" class="form-control" id="floatingPassword" :value="$store.state.userData.addrs">
                        <label for="floatingPassword">Address</label>
                    </div>
                    <div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
                        <input type="text" class="form-control" id="floatingPassword" :value="$store.state.userData.addrs2">
                        <label for="floatingPassword">Address 2</label>
                    </div>
                    <div class="col-md-10 d-flex  mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" :value="$store.state.userData.city">
                            <label for="floatingInput">City</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" value="Bahamas">
                            <label for="floatingPassword">State</label>
                        </div>
                    </div>
                    <div class="col-md-10 d-flex mx-auto">
                        <div class="col-md-6 form-floating mb-3 pe-2">
                            <input type="text" class="form-control" id="floatingInput" :value="$store.state.userData.zip">
                            <label for="floatingInput">Zip</label>
                        </div>
                        <div class="col-md-6 form-floating">
                            <input type="text" class="form-control" id="floatingPassword" value="Black Pearl">
                            <label for="floatingPassword">Neighborhood</label>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <h3 class="text-center mb-4 fw-bold">Your Order</h3>
        <div class="w-50 input-group mb-3">
            <button @click="applyCoupon" class="btn btn-outline-secondary" type="button" id="button-addon1">Apply</button>
            <input v-model="coupon" type="text" class="form-control" placeholder="Your Coupon">
        </div>
        <div class="w-100 border mx-auto mb-3" >
            <Cart />
        </div>
        <div class="d-flex justify-content-between border ">
            <p class="fs-5 fw-bold my-auto p-4 mx-4">TOTAL:</p>
            <p class="fs-4 fw-bold my-auto p-4 mx-4">${{ showValue() }}</p>
        </div>
        <div class="text-center p-5">
            <button @click="checkout()" class="btn btn-dark btn-cliked fs-5 px-5 rounded-3">Pay with <span class="text-primary">Pay</span><span class="text-info">Pal</span></button>
        </div>
    </section>
    
</template>

<script>
import { onBeforeMount } from 'vue'
import firebase from 'firebase'
import Cart from './Cart.vue'
import cartProducts from '../data/cart.js'
import myCoupons from '../data/coupon.js'
import router from '../router/index.js'

export default {
    name: 'Checkout',
    components: {
          Cart
    },
    setup(){	
		onBeforeMount(() => {		
			firebase.auth().onAuthStateChanged((user) => {
				if(!user){
					router.replace('/Login')
				} else {
					router.replace('/Checkout')
				}
			})

		})
    },
    data() {
        return {
            cartProducts: cartProducts,
            myCoupons: myCoupons, 
            coupon: '',
            valor: 1,
            total: 0,
            couponUsed: true,
            help: false
        }
    },
    methods: {
        showValue() {
            let discount = this.sumCart() * this.valor
            if(discount == this.sumCart())
                this.total = this.sumCart()   
            else if(discount == 0)
                this.total = 0
            else 
                this.total = this.sumCart() - discount
            
            return Math.round(this.total * 100) / 100
        },
        applyCoupon() {
            if(this.coupon.toLowerCase() == 'welcome') {
                if(this.couponUsed) {
                    this.valor = myCoupons.welcome
                    alert('COUPON APPLIED!')
                    this.couponUsed = false
                }
                else 
                    alert('INVALID COUPON!')
            }
            else if(this.coupon.toLowerCase() == 'help') {
                this.valor = myCoupons.help
                alert('COUPON APPLIED!')
                this.help = true
            }
            else 
                alert('INVALID COUPON!')
            
        },
        sumCart() {
            let sum = 0
            for(let product in this.cartProducts) {
                sum += this.cartProducts[product].price                    
            }
            sum = Math.round(sum * 100) / 100
            return sum
		},
        checkout() {
            if(this.total == 0) { 
                alert('Help call triggered')
				router.push({name: 'Home'})
            }
            else {
                alert('Order placed successfully')
                router.push({name: 'Home'})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.btn-cliked:hover {
    background-color: transparent;
    border: 1px solid black;
    color: black;
}
</style>