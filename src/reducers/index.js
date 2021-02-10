import { combineReducers } from "redux";
function songs(state = [], action) {
    switch (action.type) {
        case "SET_SONGS":
            return [...state, action.value]
        default: 
        return state;
    }

}

function favoriteSong(state = '', action){
    return {}
}

function upvoteSong(state = '', action){
    return {}
}

function downvoteSong(state = '', action){
    return {}
}

function addToCart(state = '', action){
    return {}
}

function addSong(state = '', action){
    return {}
}

function removeCartItem(state = '', action){
    return {}
}

function emptyCart(state = '', action){
    return {}
}

export default combineReducers({
    songs,
    favoriteSong,
    upvoteSong,
    downvoteSong,
    addToCart,
    addSong,
    removeCartItem,
    emptyCart,
})