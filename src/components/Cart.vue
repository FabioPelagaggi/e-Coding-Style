<template>
	<ul class="shopping-cart-items mt-5 align-self-center">
		<li class="clearfix list-unstyled p-2" v-for="(productItem, index) in cartProducts" :key="productItem.id">
			<img class="img-config img-fluid img-thumbnail" :src="productItem.img" :alt="productItem.description" :title="productItem.name"/>
			<span class="item-name p-3">{{ productItem.name }}</span>
			<span class="item-price p-3">${{ productItem.price.toFixed(2) }}</span>
			<span class="item-name p-3">Size: {{ productItem.choseSize }}</span>
			<span class="item-quantity">Quantity: {{ productItem.qty }}</span>
			<small class="ms-4 mb-2 text-danger btn" @click="removeItemCart(index)">x</small>
		</li>
	</ul>
	
</template>

<script>
import cartProducts from '../data/cart.js'

export default {
	name: 'Cart',
	props: ['productItem'],
	methods: {
		removeItemCart(index) {
			this.$store.commit('removeItemCart', index)
		}
	},
	data() {
		return {
			cartProducts: cartProducts
		}
	}
}
</script>

<style lang="scss" scoped>
.img-config{
	width: 50px;
}
</style>