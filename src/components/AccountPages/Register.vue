<template>
	<section class="form mx-5 padding">
		
		<div class="vh-100 ">
			<div class="shadow row main-div">
				<div class="image-align-self col-lg-5">
					<div class="branding mb-5">
						<h1 class="branding-name">Register</h1>
					</div>
				</div>
				<div class="col-lg">
					<div>
						<div class="d-flex flex-column">
							<div class="form-row d-flex">
								<div class="col m-3">
									<label for="inputFirstName">First Name</label>
									<input id="inputFirstName" v-model="$store.state.userData.firstName" type="text" class="form-control" placeholder="First name">
								</div>
								<div class="col m-3">
									<label for="inputLastName">Last Name</label>
									<input id="inputLastName" v-model="$store.state.userData.lastName" type="text" class="form-control" placeholder="Last name">
								</div>
							</div>
							<div class="form-row d-flex">
								<div class="col m-3">
									<label for="inputEmail">E-mail</label>
									<input id="inputEmail" v-model="state.inputEmail" type="text" class="form-control" placeholder="johndoe@email.com">
									<span class="red-warning" v-if="v$.inputEmail.$error">
										{{ v$.inputEmail.$errors[0].$message }}
									</span>
								</div>
								<div class="col m-3">
									<label for="inputPhone">Phone (Only Numbers)</label>
									<input id="inputPhone" v-model="$store.state.userData.phone" type="number" class="form-control" placeholder="+55 (021) 9999-0000">
								</div>
							</div>
							<div class="form-row d-flex flex-column">
								<div class="form-row d-flex">
									<div class="col m-3">
										<label for="inputPassword">Password</label>
										<input id="inputPassword" v-model="state.inputPassword" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Password">
										<span class="red-warning" v-if="v$.inputPassword.$error">
											{{ v$.inputPassword.$errors[0].$message }}
										</span>
									</div>
									<div class="col m-3">
										<label for="inputConfirmPassword">Confirm Password</label>
										<input id="inputConfirmPassword" v-model="state.inputConfirmPassword" :type="showPass ? 'text' : 'password'" class="form-control" placeholder="Confirm Password">
										<span class="red-warning" v-if="v$.inputConfirmPassword.$error">
											{{ v$.inputConfirmPassword.$errors[0].$message }}
										</span>
									</div>
								</div>
								<div class="m-3">
									<input id="showPass" class="toggle" type="checkbox" @click="togglePass"> Show Password
									<label class="d-none" for="showPass">Show Password</label>
								</div>
								<div class="m-3">
									<input id="showAddrs" class="toggle" type="checkbox" @click="toggleAddress"> I Want to Add My Address
									<label class="d-none" for="showAddrs">Show Address</label>
								</div>   
							</div>
							<div v-if="addAddress">
								<div class="form-row d-flex">
									<div class="form-group col m-3">
										<label for="inputAddress">Address</label>
										<input v-model="$store.state.userData.addrs" type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
									</div>
									<div class="form-group col m-3">
										<label for="inputAddress2">Address 2</label>
										<input v-model="$store.state.userData.addrs2" type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
									</div>
								</div>
								<div class="form-row d-flex">
									<div class="form-group  col m-3">
										<label for="inputCity">City</label>
										<input v-model="$store.state.userData.city" type="text" class="form-control" id="inputCity" placeholder="New York">
									</div>
									<div class="form-group col m-3">
										<label for="inputState">State</label>
										<input v-model="$store.state.userData.state" type="text" class="form-control" id="inputState" placeholder="New York">
									</div>
									<div class="form-group col m-3">
										<label for="inputZip">Zip</label>
										<input v-model="$store.state.userData.zip" type="number" class="form-control" id="inputZip">
									</div>
								</div>
							</div>
							<div class="form-row mb-3">
								<div class="col-lg-7">
									<button @click="checkForm" class="btn1 mt-3 mb-5">Submit</button>
								</div>
							</div>
							
						</div>
					</div>           
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import useValidade from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import { ref } from 'vue'

export default {
	setup() {
		const inputEmail = ref("")
		const inputPassword = ref("")
		const inputConfirmPassword = ref("")

		const state = reactive({
			inputEmail:'',
			inputPassword: '',
			inputConfirmPassword: '',
			
		})
		const rules = computed(() => {
			return{
				inputEmail: { required, email },
				inputPassword: { required, minLength: minLength(6) },
				inputConfirmPassword: { required, sameAs: sameAs(state.inputConfirmPassword) }
			}
		})

		const v$ = useValidade(rules, state)

		return{
			inputEmail,
			inputPassword,
			inputConfirmPassword,
			state,
			v$,
		}
	},
	data() {
		return {
			showPass: false,
			addAddress: false,
		}
	},
	methods: {
		togglePass(){
		this.showPass = !this.showPass
		},
		toggleAddress(){
		this.addAddress = !this.addAddress
		},
		checkForm() {
			alert("checkForm")
			this.v$.$validate()
			if(!this.v$.$error) {
				this.updateUserDataBase()
				alert("Validation Completed")
				this.$store.commit('registerFirebase')
				alert("Calling FirebaseAuth")
			} else{
				alert("Form Error!")
			}       
		} ,
		updateUserDataBase(){
			this.$store.state.userData.password = this.state.inputConfirmPassword
			this.$store.state.userData.email = this.state.inputEmail
		}
	},
}
</script>

<style lang="scss">
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
.main-div{
	background: white;
	border-radius: 30px;
}
.padding{
	padding-top: 120px;
	padding-bottom: 120px;
}
.image-align-self{
	align-self: center;
	padding: 25px;
}
img{
	border-radius: 30px;
}
form{
	padding: 25px;
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
.branding {
		display: flex;
		align-items: center;
		img {
		width: 40px;
		transition: .5s ease all;
		}
		.branding-name{
		font-size: 2rem;
		margin-left: 28px;
		}
}
.toggle {
	--size: 1.125rem;
	--width: calc(1.125rem * 2);
	display: inline-grid;
	align-items: center;
	width: var(--width);
	height: var(--size);
	cursor: pointer;
}
.toggle::before {
	content: "";
	grid-area: 1 / -1;
	width: var(--width);
	height: var(--size);
	transition: all 250ms ease;
	border-radius: var(--width);
	background-color: #000;
}
.toggle:hover::before {
	box-shadow: 0 0 0 2px #aef;
}
.toggle::after {
	content: "";
	grid-area: 1 / -1;
	width: calc(var(--size) * 0.8);
	height: calc(var(--size) * 0.8);
	transform: translateX(10%);
	transform-origin: center center;
	transition: all 250ms ease;
	border-radius: 100%;
	background: #fff;
}
.toggle:checked::before {
	background-color: #2be;
}
.toggle:checked::after {
	transform: translateX(calc(var(--width) - var(--size) * 0.8 - 10%));
}
.toggle:disabled {
	pointer-events: none;
	filter: grayscale(1);
}
.toggle:disabled::before {
	background: #2be;
}
.red-warning{
	color: red;
	font-weight: 800;
}
</style>