const localUserData = JSON.parse(window.localStorage.getItem('User_Data'))
const userData = localUserData ? localUserData : {
    id: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    phone: null,
    addrs: null,
    addrs2: null,
    city: null,
    state: null,
    zip: null,
}
    
export default userData