<template>
    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">My Orders</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="row col-md-8 mx-auto modal-body">
                    <div>
                        <div class="accordion-item" v-for="order in myOrders" :key="order">
                            <h2>
                                <button class="accordion-button" type="button">
                                    Purchase: {{ order.id }}
                                </button>
                            </h2>
                            <div class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <div class="d-flex justify-content-between border align-items-center mb-2 items-purchase" v-for="item in order.purchase" :key="item">
                                        <img class="col-md-2" :src="item.img" style="max-width: 150px;" :alt="item.description" :title="item.name">
                                        <p class="fw-bold">{{ item.name }}</p>
                                        <p class="">{{ order.date }}</p>
                                        <p class="me-4 text-muted fw-bold">${{ item.price }}</p>
                                    </div>
                                    <p class="d-flex justify-content-end fw-bold text-muted">TOTAL: ${{order.total}}</p>
                                </div>
                            </div>
                        </div>
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
import myOrders from '../data/orders.js'

export default {
    name: 'Orders',
    data() {
        return {
            myOrders: myOrders

        }
    },
}
</script>

<style lang="scss" scoped>
.accordion-button::after {
    background-image: none;
}

@media (max-width: 576px){
    .items-purchase {
        flex-direction: column;
    }
}
</style>