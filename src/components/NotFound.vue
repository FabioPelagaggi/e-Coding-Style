<template>
    <section id="not-found" class="vh-100 d-flex align-items-center justify-content-center">
        <div class="glass mt-5 d-flex flex-column justify-content-center align-items-center p-5">
            <h2 class="text-light resize-font">404</h2>
            <p class="text-light fs-4">The page you are looking for not available!</p>
            <router-link class="btn btn-light w-50 btn-shopping" :to="{name: 'Home'}">Go Shopping</router-link>
        </div>
    </section>


</template>

<script>
export default {
    name: 'NotFound'
}
</script>
<style lang="scss" scoped>

#not-found {
    background-image: url('../assets/S4.jpg');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: cover;
}
.glass {
    background-color: #ffffff15;
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
}
.resize-font {
    font-size: 8em;
}
.btn-shopping:hover {
    background-color: lightgrey;
}
</style>