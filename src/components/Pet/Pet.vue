<template>
    <Banner
        v-for="banner in bannerFilter"
        :key="banner"
        :banner="banner"/>
    <div class="d-flex w-100 body-products">
        <Sidebar/>  
        <section id="products" class="max-vh-100 w-100">
            <div class="bg-light py-2 w-100">
                <p class="text-center fs-3 text-dark my-2">Shop now</p>
            </div>  
            <div class="row col-md-12">
                <Thumbnail
                     v-for="product in categoryFilter"
                    :key="product.id"
                    :product="product"
                    @click="showDetails(product)"/>
            </div>
        </section>
    </div>
    <Modal
        :product="showDetails(product)"/>
</template>

<script>
import Banner from '../Banner.vue'
import Sidebar from '../Sidebar.vue'
import Thumbnail from '../Thumbnail.vue'
import Modal from '../Modal.vue'
import items from '../../data/items.js'
import banners from '../../data/banner.js'


export default {
    name: 'Women',
    components: {
        Banner,
        Sidebar,
        Thumbnail,
        Modal,
    },
    data() {
        return {
            items: items,
            banners: banners,
            product: Object

        }
    }, 
    methods: {
        showDetails(itemCliked) {
            this.product = itemCliked
            return this.product
        }
    },
    computed: {
        categoryFilter() {
            let list = []
            for(let item in this.items) {
                if(this.items[item].gender === 'pet') 
                    list.push(this.items[item])
            }
            return list
        },
        bannerFilter() {
            let list = []
            for(let banner in this.banners) {
                if(this.banners[banner].category === 'Pet') 
                    list.push(this.banners[banner])
            }
            return list
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    height: 600px;
}
.banner-image {
    object-fit: cover;
}
@media (max-width: 1140px) {
  .body-products {
    flex-direction: column;
  }
}
</style>