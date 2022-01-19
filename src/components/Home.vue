<template>
  <section id="main-banner">
    <h1 class="d-none">Home</h1>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img v-bind:src="banners.slide1.image" class="d-block w-100 image-carousel" :alt="banners.slide1.alt" :title="banners.slide1.text">
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide1.text }}</p>
            <div class="d-flex justify-content-evenly">
              <router-link class="btn btn-outline-dark btn-sm" :to="{name: 'Women'}">{{ banners.slide1.btnText1 }}</router-link>
              <router-link class="btn btn-outline-dark btn-sm" :to="{name: 'Men'}">{{ banners.slide1.btnText2 }}</router-link>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide2.image" class="d-block w-100 image-carousel" :alt="banners.slide2.alt" :title="banners.slide2.text">
          <div class="position-absolute time-now translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide2.text }}</p>
            <div class="d-flex justify-content-center">
              <router-link class="btn btn-outline-dark btn-sm" :to="{name: 'Men'}">{{ banners.slide2.btnText1 }}</router-link>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <img v-bind:src="banners.slide3.image" class="d-block w-100 image-carousel" :alt="banners.slide3.alt" :title="banners.slide3.text">
          <div class="position-absolute top-50 start-50 translate-middle">
            <p class="text-center text-uppercase fs-1">{{ banners.slide3.text }}</p>
            <div class="d-flex justify-content-center">
              <router-link class="btn btn-outline-dark btn-sm" :to="{name: 'Women'}">{{ banners.slide2.btnText1 }}</router-link>

            </div>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  <section id="best-sellers">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class=" text-light fs-3">Best Sellers</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom" >
        <div id="carouselExampleControls" class="w-100 carousel slide carousel-dark" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="best-product d-flex resize-width-80">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSeller[0].img" class="resize-main-slide" :alt="bestSeller[0].description" :title="bestSeller[0].name">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">NEW</span>
                </div>
                <div class="col-md-7 row align-items-center m-5 text-center">
                  <h5 class="fs-4">{{ bestSeller[0].name }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSeller[0].description }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSeller[0].oldPrice }}</span> ${{ bestSeller[0].price }}</span>
                  <div class="d-block">
                    <button class="btn btn-dark px-4 me-2" @click="showDetails(bestSeller[0])" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                    <i @click="addWishlist(bestSeller[0])" class="btn btn-outline-dark bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex resize-width-80 text-center">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSeller[1].img" class="resize-main-slide" :alt="bestSeller[1].description" :title="bestSeller[1].name">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">NEW</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">{{ bestSeller[1].name }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSeller[1].description }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSeller[1].oldPrice }}</span>  ${{ bestSeller[1].price }}</span>
                  <div class="d-block">
                    <button class="btn btn-dark px-4 me-2" @click="showDetails(bestSeller[1])" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                    <i @click="addWishlist(bestSeller[1])" class="btn btn-outline-dark bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="best-product d-flex resize-width-80 text-center">
                <div class="col-md-5 position-relative">
                  <img v-bind:src="bestSeller[2].img" class="resize-main-slide" :alt="bestSeller[2].description" :title="bestSeller[2].name">
                  <span class="text-uppercase position-absolute top-0 start-0 bg-info bg-gradient text-light py-1 px-2 mt-4">NEW</span>
                </div>
                <div class="col-md-7 row align-items-center m-5">
                  <h5 class="fs-4">{{ bestSeller[2].name }}</h5>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <p class="hide-component text-muted px-5">{{ bestSeller[2].description }}</p>
                  <span class="hide-component bg-dark w-25 mx-auto minimal-line"></span>
                  <span class="fw-bold fs-5 my-3"><span class="fs-6 text-muted text-decoration-line-through fw-normal">${{ bestSeller[2].oldPrice }}</span> ${{ bestSeller[2].price }}</span>
                  <div class="d-block">
                    <button class="btn btn-dark px-4 me-2" @click="showDetails(bestSeller[2])" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>
                    <i @click="addWishlist(bestSeller[2])" class="btn btn-outline-dark bi bi-heart"></i>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section id="woman-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Woman Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="overflow-hidden position-relative resize-main-div">
            <router-link class="text-center" :to="{name: 'Women'}">
              <p class="text-light fs-1 position-absolute top-50 start-50 translate-middle text-front">{{ womanStyle.mainCategoty.text }}</p>  
              <p class="text-light fs-5 mt-5 pt-5 text-decoration-underline position-absolute top-50 start-50 translate-middle" style="z-index: 100;">{{ womanStyle.mainCategoty.link }}</p>  
              <img v-bind:src="womanStyle.mainCategoty.image" :alt="womanStyle.mainCategoty.text" :title="womanStyle.mainCategoty.text" class="zoom resize-main-slide">  
            </router-link>
          </div>
          <div>
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <router-link :to="{name: 'Women'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category1.text }}</p>
                  <img v-bind:src="womanStyle.category1.image" :alt="womanStyle.category1.text" :title="womanStyle.category1.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <router-link :to="{name: 'Women'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category2.text }}</p>
                  <img v-bind:src="womanStyle.category2.image" :alt="womanStyle.category2.text" :title="womanStyle.category2.text" class="zoom resize-main-slide">
                </router-link>
              </div>
            </div>
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Women'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category3.text }}</p>
                  <img v-bind:src="womanStyle.category3.image" :alt="womanStyle.category3.text" :title="womanStyle.category3.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Women'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category4.text }}</p>
                  <img v-bind:src="womanStyle.category4.image" :alt="womanStyle.category4.text" :title="womanStyle.category4.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Women'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ womanStyle.category5.text }}</p>
                  <img v-bind:src="womanStyle.category5.image" :alt="womanStyle.category5.text" :title="womanStyle.category5.text" class="zoom resize-main-slide">
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="man-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Man Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="" >
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <router-link :to="{name: 'Men'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category1.text }}</p>
                  <img v-bind:src="manStyle.category1.image" :alt="manStyle.category1.text" :title="manStyle.category1.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-50 position-relative">
                <router-link :to="{name: 'Men'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category2.text }}</p>
                  <img v-bind:src="manStyle.category2.image" :alt="manStyle.category2.text" :title="manStyle.category2.text" class="zoom resize-main-slide">
                </router-link>
              </div>
            </div>
            <div class="d-flex container resize-height">
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Men'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category3.text }}</p>
                  <img v-bind:src="manStyle.category3.image" :alt="manStyle.category3.text" :title="manStyle.category3.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Men'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category4.text }}</p>
                  <img v-bind:src="manStyle.category4.image" :alt="manStyle.category4.text" :title="manStyle.category4.text" class="zoom resize-main-slide">
                </router-link>
              </div>
              <div class="m-1 overflow-hidden resize-height-33 position-relative">
                <router-link :to="{name: 'Men'}">
                  <p class="text-dark fs-5 position-absolute top-100 start-50 pb-5 translate-middle text-front">{{ manStyle.category5.text }}</p>
                  <img v-bind:src="manStyle.category5.image" :alt="manStyle.category5.text" :title="manStyle.category5.text" class="zoom resize-main-slide">
                </router-link>
              </div>
            </div>
          </div>
          <div class="overflow-hidden position-relative resize-main-div">
            <router-link class="text-center" :to="{name: 'Men'}">
              <p class="text-light fs-1 position-absolute top-50 start-50 translate-middle text-front">{{ manStyle.mainCategoty.text }}</p>  
              <p class="text-light fs-5 mt-5 pt-5 text-decoration-underline position-absolute top-50 start-50 translate-middle" style="z-index: 100;">{{ manStyle.mainCategoty.link }}</p>  
              <img v-bind:src="manStyle.mainCategoty.image" :alt="manStyle.mainCategoty.text" :title="manStyle.mainCategoty.text" class="zoom resize-main-slide">
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="pet-styles">
    <div class="w-100 box-container bg-dark">
      <div class="d-flex justify-content-center align-items-center bg-dark title-container">
        <p class="text-light fs-3">Pet Style</p>
      </div>
      <div class="d-flex w-100 bg-light image-container radius-bottom ">
        <div class="d-flex container mx-auto align-items-center">
          <div class="m-1 overflow-hidden position-relative">
            <router-link class="text-center" :to="{name: 'Pet'}">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category1.text }}</p>
              <img v-bind:src="petStyle.category1.image" :alt="petStyle.category1.text" :title="petStyle.category1.text" class="zoom resize-main-slide">
            </router-link>
          </div>
          <div class="m-1 overflow-hidden position-relative">
            <router-link class="text-center" :to="{name: 'Pet'}">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category2.text }}</p>
              <img v-bind:src="petStyle.category2.image" :alt="petStyle.category2.text" :title="petStyle.category2.text" class="zoom resize-main-slide">
            </router-link>
          </div>
          <div class="m-1 overflow-hidden position-relative">
            <router-link class="text-center" :to="{name: 'Pet'}">
              <p class="text-dark fs-5 text-decoration-underline position-absolute top-0 start-50 pt-5 translate-middle text-front">{{ petStyle.category3.text }}</p>
              <img v-bind:src="petStyle.category3.image" :alt="petStyle.category3.text" :title="petStyle.category3.text" class="zoom resize-main-slide">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Modal
      :product="product"/>
  </section>
</template>

<script>
import bestSeller from '../data/bestSellers.js'
import Modal from './Modal.vue'
import myWishlist from '../data/wishlist.js'

export default {
  name: 'Home',
  components: {
      Modal
  },
  data: function() {
    return {
      bestSeller: bestSeller,
      myWishlist: myWishlist,
      product: Object,
      banners: 
        {
          slide1: { 
            image: require("../assets/S1.jpg"), 
            text: "Code Your Own Style",
            alt: "Image of a stylish man and woman",
            btnText1: "Woman Collection",
            btnText2: "Man Collection"
          },
          slide2: { 
            image: require("../assets/S2.jpg"), 
            alt: "Image of a clock holder with three exposed clocks",
            text: "The Time is Now",
            btnText1: "Discover"  
          },
          slide3: { 
            image: require("../assets/S3.jpg"), 
            alt: "Image of a stylish woman from the back in a white dress",
            text: "ss '22 Collection",
            btnText1: "Shop Now"
          }
        },
      womanStyle: 
        {
          mainCategoty: {
            image: require("../assets/woman-style/w-1.jpg"), 
            text: "New Arrivals",
            link: "Explore Now"
          },
          category1: {
            image: require("../assets/woman-style/w-2.jpg"), 
            text: "Short&Pants"
          },
          category2: {
            image: require("../assets/woman-style/w-3.jpg"), 
            text: "Accessories"
          },
          category3: {
            image: require("../assets/woman-style/w-4.jpg"), 
            text: "Skirts"
          },
          category4: {
            image: require("../assets/woman-style/w-5.jpg"), 
            text: "Bags"
          },
          category5: {
            image: require("../assets/woman-style/w-6.jpg"), 
            text: "Shoes"
          },
        },
      manStyle: 
        {
          mainCategoty: {
            image: require("../assets/man-style/m-1.jpg"), 
            text: "New Arrivals",
            link: "Explore Now"
          },
          category1: {
            image: require("../assets/man-style/m-2.jpg"), 
            text: "Shirts"
          },
          category2: {
            image: require("../assets/man-style/m-3.jpg"), 
            text: "Short&Pants"
          },
          category3: {
            image: require("../assets/man-style/m-4.jpg"), 
            text: "Shoes"
          },
          category4: {
            image: require("../assets/man-style/m-5.jpg"), 
            text: "Hats"
          },
          category5: {
            image: require("../assets/man-style/m-6.jpg"), 
            text: "T-shirts"
          },
        },
      petStyle: 
        {
          category1: {
            image: require("../assets/pet-style/p-1.jpg"), 
            text: "Scratchers"
          },
          category2: {
            image: require("../assets/pet-style/p-2.jpg"), 
            text: "Transport bags"
          },
          category3: {
            image: require("../assets/pet-style/p-3.jpg"), 
            text: "Beds"
          },
        },
    }
  },
  methods: {
    showDetails(itemCliked) {
        this.product = itemCliked
        console.log(this.product)
        return this.product
    },
    addWishlist(item) {
        myWishlist.push(item)
        alert("ADDED TO WISHLIST!")
    }
  }
}
</script>

<style lang="scss" scoped>
.image-carousel {
    object-fit: cover;
    height: 100vh;
}
.time-now {
  top: 50%;
  left: 30%;
}
.box-container {
  min-height: 100vh;
}
.title-container {
  min-height: 15vh;
}
.image-container {
  min-height: 85vh;
}
.radius-bottom {
  border-radius: 0 0 50px 50px;
}
.best-product {
  margin: 0 auto;
}
.btn-dark:hover {
  background-color: transparent;
  color: black;
}
.zoom {
  transition: all 0.3s;
}
.zoom:hover {
  transform: scale(1.1)
}
.minimal-line {
  height: 1px;
}
.resize-width-80 {
  width: 80%;
}
.resize-main-div {
  max-width: 90%;
}
.resize-main-slide { 
  object-fit: cover;
  max-width: 100%;
} 
.resize-height {
  max-height: 100% 
}
.resize-height-50 {
  max-height: 50%
}
.resize-height-33 {
  max-height: 33%
}
.text-front {
  z-index: 99;
}

@media (max-width: 760px) {
  .best-product {
    display: flex;
    flex-direction: column;
  }
  .hide-component  {
    display: none;
  }

  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }
}

@media (max-width: 986px) {
  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }

  // .resize-icon {
  //   transform: scale(0.8)
  // }
 
}
</style>