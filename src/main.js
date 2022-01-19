import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import { ref, onUnmounted } from "vue-demi"

const firebaseConfig = {
    apiKey: "AIzaSyBhnPhzQXFsOd_11T8VpGZflxO37qx_Fys",
    authDomain: "coding-style.firebaseapp.com",
    projectId: "coding-style",
    storageBucket: "coding-style.appspot.com",
    messagingSenderId: "578402053859",
    appId: "1:578402053859:web:a8db343299c333c72c9fd6"
  }

const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.document(user.id).set(user)
}
export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onUnmounted(close)
    return users
}

createApp(App).use(store).use(router).mount('#app')