<template>
    <section id="banner-women">
        <div class="position-relative banner">
            <p class="display-3 position-absolute text-dark top-50 start-50 translate-middle">{{ banner.category }}</p>
            <nav class="position-absolute top-50 start-50 translate-middle mt-5" style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link class="link" :to="{name: 'Home'}">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ banner.category }}</li>
                </ol>
            </nav>
            <img :src="banner.img"  class="w-100 banner-image h-100" :alt="banner.alt" :title="banner.title">
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner',
    props: ['banner']
}
</script>

<style scoped>
.banner {
    height: 500px;
}
.banner-image {
    object-fit: cover;
}
</style>