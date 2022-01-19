const localCart = JSON.parse(window.localStorage.getItem('myCart'))
const cartProducts = localCart ? localCart : []

export default cartProducts