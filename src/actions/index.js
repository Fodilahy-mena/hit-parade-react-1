
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

  export function setStyles(styles){
    return {
      type: "SET_SYLES",
      value: styles
    }
  }

export function toggleFavouriteSong(favouriteSongId) {
    return {
      type: 'TOGGLE_FAVOURITE',
      value: favouriteSongId
    }
  }

export function upvoteSong(upvoteSongId) {
  return {
    type:"UPVOTE_SONG",
    value: upvoteSongId
  }
}

export function downvoteSong(downvoteSongId) {
  return {
    type:"DOWNVOTE_SONG",
    value: downvoteSongId
  }
}

export function addToCart(song) {
  return {
  type: "ADD_TO_CART",
  value: song
  }
}

export function removeCartItem(songId) {
  return {
    type: "REMOVE_FROM_CART",
    value: songId
  }
}

export function emptyCart() {
  return {
    type: "EMPTY_CART",
  }
}

export function addSong(song) {
  return {
    type: "ADD_SONG",
    value: song
  }
}