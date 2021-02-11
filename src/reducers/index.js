import { combineReducers } from "redux";
function songs(state = [], action) {
    switch (action.type) {
        case "SET_SONGS":
            return [...state, action.value]
        case "ADD_SONG":
            setTimeout(() => {
                console.log(state)
            }, 3000)
            return [...state, action.value];
        case "TOGGLE_FAVOURITE":
            // const updatedSongs = 
            // set it into our state!
            // how should I modify the state here?
            // recreate a WHOLE new state array
            // we want to update the state in an IMMUTABLE WAY
            return state.map(song => {
                    if (song.id === action.value) {
                        return {
                            ...song,
                            isFavorited: !song.isFavorited,
                        };
                    }
                    return song;
                });
        case "UPVOTE_SONG":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        upvotes: song.upvotes + 1,
                    };
                }
                return song;
            });
        case "DOWNVOTE_SONG":
            return state.map(song => {
                if (song.id === action.value) {
                    return {
                        ...song,
                        downvotes: song.downvotes + 1,
                    };
                }
                return song;
            });
        default: 
        return state;
    }

}

function cartItems(state = [], action) {
    switch (action.type) {
        case "SET_CART_ITEMS":
            return [...state, action.value]
        case "ADD_TO_CART":
            // push in an immutable way
            return [...state, action.value]
        case "REMOVE_FROM_CART":
            return state.filter(cartItem => cartItem.id !== action.value);
        case "EMPTY_CART":
            return []
        default:
        return state;
    }

}

function styles(state = [], action) {
    switch (action.type) {
        case "SET_STYLES":
            return [...state, action.value]
        default: 
        return state;
    }

}

function addSong(state = '', action){
    return {}
}


export default combineReducers({
    songs,
    cartItems,
    styles,
    addSong,
})