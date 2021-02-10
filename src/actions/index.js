
export function setSongs(songs){
    return {
      type: "SET_SONGS",
      value: songs
    }
  }

  export function setCartItems(cartItems){
    return {
      type: "SET_CART_ITEMS",
      value: cartItems
    }
  }