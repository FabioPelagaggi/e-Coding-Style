<template>
	<section id="" class="container bg-light min-vh-100">
		<div class="w-100 bg-light" style="height: 120px;"></div>
		<div class="bg-light d-flex justify-content-center my-auto p-4 border border-start-0 border-end-0" style="height: 120px;">
			<p class="my-auto fs-3">My Account</p>
		</div>
		<div class="d-flex justify-content-end ">
			<button type="button" class="btn btn-dark mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Whishlist</button>
			<button type="button" class="btn btn-dark ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal3">My Orders</button>
		</div>
		<div class="bg-light w-100">
			<form>
				<fieldset disabled>
					<legend class="fw-bold my-5">Personal Information</legend>
					<div class="col-md-10 d-flex  mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="uid" type="text" class="form-control" :value="$store.state.userData.id">
							<label for="uid">ID</label>
						</div>
					</div>
					<div class="col-md-10 d-flex  mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="firstName" type="text" class="form-control" :value="$store.state.userData.firstName">
							<label for="firstName">First name</label>
						</div>
						<div class="col-md-6 form-floating">
							<input id="lastName" type="text" class="form-control" :value="$store.state.userData.lastName">
							<label for="lastName">Last name</label>
						</div>
					</div>
					<div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3 ">
						<input id="email" type="email" class="form-control" :value="$store.state.userData.email"> 
						<label for="email">Email address</label>
					</div>
					<div class="col-md-10 d-flex  mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="phone" type="text" class="form-control" :value="$store.state.userData.phone">
							<label for="phone">Phone number</label>
						</div>
						<div class="col-md-6 form-floating">
						</div>
					</div>
				</fieldset>
			</form>
		</div>
		<div class="bg-light w-100">
			<form>
				<fieldset disabled>
					<legend class="fw-bold my-5">Address</legend>
					<div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
						<input id="addrs" type="text" class="form-control" :value="$store.state.userData.addrs">
						<label for="addrs">Address</label>
					</div>
					<div class="col-md-10 form-floating d-flex justify-content-center mx-auto mb-3">
						<input id="addrs2" type="text" class="form-control" :value="$store.state.userData.addrs2">
						<label for="addrs2">Address 2</label>
					</div>
					<div class="col-md-10 d-flex  mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="city" type="text" class="form-control" :value="$store.state.userData.city">
							<label for="city">City</label>
						</div>
						<div class="col-md-6 form-floating">
							<input id="state" type="text" class="form-control" :value="$store.state.userData.state">
							<label for="state">State</label>
						</div>
					</div>
					<div class="col-md-10 d-flex mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="zip" type="text" class="form-control" :value="$store.state.userData.zip">
							<label for="zip">Zip</label>
						</div>
						<div class="col-md-6 form-floating">
							<input id="Neighborhood" type="text" class="form-control" value="Neighborhood">
							<label for="Neighborhood">Neighborhood</label>
						</div>
					</div>
					<div class="col-md-10 d-flex mx-auto">
						<div class="col-md-6 form-floating mb-3 pe-2">
							<input id="Country" type="text" class="form-control" value="Russia">
							<label for="Country">Country</label>
						</div>
						<div class="col-md-6 form-floating">
						</div>
					</div>
				</fieldset>
			</form>
		</div>
		<div class="col-lg-3 mx-auto p-4">
			<button @click="logout" class="btn1 mt-3 mb-5 btn-1">Logout</button>
		</div>
		<Wishlist/>
		<Orders/>
	</section>
				
</template>

<script>
import { onBeforeMount, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import firebase from 'firebase'
import Wishlist from '../Wishlist.vue'
import { useLoadUsers, deleteUser } from '@/main'
import userData from '../../data/user.js'
import Orders from '../Orders.vue'

export default {
	components: {
		Wishlist,
        Orders
	},
	setup() {
		const router = useRouter()
		const route = useRoute()
		const users = useLoadUsers()
		
		onBeforeMount(() => {		
			firebase.auth().onAuthStateChanged((user) => {
				if(!user){
					router.replace('/Login')
				} else if (route.path == '/Login' || route.path == '/Register'){
					router.push({name: 'Account'})
				}
			})

		})

		const state = reactive({
			inputEmail:'',
			inputPassword: '',
			inputConfirmPassword: '',
			
		})

		const Logout = () =>{
			firebase
				.auth()
				.signOut()
				.then(() => console.log("Loged out"))
				.catch(err => alert(err.message))
		}

		return{
			Logout,
			users,
			state,
			deleteUser
		}


	},
	data() {
		return {
			userData: userData
		}
	},
	methods: {
		logout(){
			this.Logout()
		},		
	}

}
</script>

<style lang="scss" scoped>
.main-div{
	background: white;
	border-radius: 30px;
}
.padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
.btn1{
	border: none;
	outline: none;
	height: 50px;
	width: 100%;
	background-color: black;
	color: white;
	border-radius: 30px;
	cursor: pointer;
	&:hover {
		background-color: white;
		border: 2px solid;
		color: black;
		}
}
</style>