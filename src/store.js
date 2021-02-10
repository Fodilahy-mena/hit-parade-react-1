
import { createStore} from 'redux';
import state from "./state";
import reducers from "./reducers/index";

let store = createStore(reducers,state);

console.log(store.getState())
export default store;