import { createStore } from 'vuex'
import userData from '../data/user.js'
import cartProducts from '../data/cart.js'
import firebase from 'firebase'
import router from '../router/index.js'
import { db } from '@/main'

export default createStore({
	state: {
		userData: userData,
		cartProducts: cartProducts,
		loginEmail: null,
		loginPass: null,
	},
	mutations: {
		registerFirebase(state){
			firebase
				.auth()
				.createUserWithEmailAndPassword(state.userData.email, state.userData.password)
				.then(firebase_data => {
					alert("FirebaseAuth Success: Account Created!")
					console.log("User Object UID: ------> ", firebase_data.user.uid)
					state.userData.id = firebase_data.user.uid
					this.commit('createUserFirebase')
					router.push({name: 'Account'})
				})
				.catch(err => {
					console.log("FirebaseAuth Error: ", err.message)
					alert("FirebaseAuth Error: ",err.message)
				})
		},
		updateUserData(state, firebaseData){
			state.userData = firebaseData
			window.localStorage.setItem('User_Data', JSON.stringify(state.userData))
		},
		updateUserID(state, firebaseID){
			state.userData.id = firebaseID
		},
		addCart(state, newItem) {
			const cardItem = state.cartProducts.find(item => item.id === newItem.id)
			if(cardItem) {
				console.log('cardItem  ----->', cardItem.choseSize)
				console.log('newItem  ----->', newItem.choseSize)
				cardItem.qty += 1
			} else {
				newItem.qty = 1
				state.cartProducts.push(newItem)
			}
			window.localStorage.setItem('myCart', JSON.stringify(state.cartProducts))
		},
		removeItemCart(state, payload) {
			state.cartProducts.splice(payload, 1)
			window.localStorage.setItem('myCart', JSON.stringify(state.cartProducts))
			window.localStorage.setItem('myTasks', JSON.stringify(state.mockTasks))
		},
		
	},
	actions: {
		userLogin(context){
			firebase
				.auth()
				.signInWithEmailAndPassword(context.state.loginEmail, context.state.loginPass)
				.then(firebase_data => {
					console.log(firebase_data),
					this.commit('updateUserID',firebase_data.user.uid)
					this.dispatch('getUserDataFirebase')
				}).catch(err => alert(err.message))
		},
		getUserDataFirebase(context){
			db.collection('users').doc(context.state.userData.id).get()
				.then(snapshot => {
					this.commit('updateUserData', snapshot.data())
					console.log("snapshot.data() ---> ", snapshot.data())
					// alert("FirebaseStore Success: Data Retrieved!")
				}).catch(err => {
					console.log("FirebaseStore Error: ", err.message)
					// alert("FirebaseStore: ", err.message)
				})
		},
		createUserFirebase(context){
			db.collection('users').doc(context.state.userData.id).set(context.state.userData)
				.then(
					// alert("FirebaseStore Success: Data Store!")
				)
				.catch(err => {
					console.log("FirebaseStore Error: ", err.message)
					// alert("FirebaseStore: ", err.message)
				})
		},
	},
	modules: {
	}
})