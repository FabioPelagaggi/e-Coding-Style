<template>
    <section id="footer" class="bg-dark pt-5">
        <div class="container">
            <footer class="py-3">
                <div class="row">
                    <div class="col-md-2">
                        <h5 class="text-light fw-bold">Section</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-light" :to="{name: 'Home'}">Home</router-link></li>
                            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-light" :to="{name: 'Women'}">Women</router-link></li>
                            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-light" :to="{name: 'Men'}">Men</router-link></li>
                            <li class="nav-item mb-2"><router-link class="nav-link p-0 text-light" :to="{name: 'Pet'}">Pet</router-link></li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <h5 class="text-light fw-bold">Institutional</h5>
                        <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="ContactUs" class="nav-link p-0 text-light">Contact Us</a></li>
                        <li class="nav-item mb-2"><a href="Policy" class="nav-link p-0 text-light">Privacy Policy</a></li>
                        <li class="nav-item mb-2"><router-link class="nav-link p-0 text-light" :to="{name: 'Account'}">My Account</router-link></li>
                        </ul>
                    </div>
                    
                    <div class="col-md-6">
                        <img src="https://cdn-icons-png.flaticon.com/512/217/217422.png" class="mx-4 margin-mob resize-icon" width="100" alt="Round logo with centralized Paypal company name" title="Paypal logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/1488/1488176.png" class="mx-4 margin-mob resize-icon" width="100" alt="Red star icon with yellow band in the middle with 100% money back writing" title="Money back icon">
                        <img src="https://cdn-icons-png.flaticon.com/512/4289/4289291.png" class="mx-4 margin-mob resize-icon" width="100" alt="Blue credit card icon" title="Credit card icon">
                    </div>
                </div>

                <div class="d-flex justify-content-between py-4 my-4 border-top text-light">
                    <p>© 2021 Coding Style. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="text-decoration-none text-light" href="https://twitter.com/">Twitter<i class="bi bi-twitter ms-2 fs-4 text-light"></i></a></li>
                        <li class="ms-3"><a class="text-decoration-none text-light" href="https://facebook.com/">Facebook<i class="bi bi-facebook ms-2 fs-4 text-light"></i></a></li>
                        <li class="ms-3"><a class="text-decoration-none text-light" href="https://instagram.com/">Instagram<i class="bi bi-instagram ms-2 fs-4 text-light"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </section>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>

@media (max-width: 986px) {
  .container {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .margin-mob {
      margin: 0 15px !important;
  }
  .resize-icon {
    transform: scale(0.8)
  }
 
}
</style>