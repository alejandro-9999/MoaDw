import { createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import donorDuck,{getDonorsAction} from "./donorDuck";


let rootReducer = combineReducers({
    donor:donorDuck
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    getDonorsAction(0,3,"donations")(store.dispatch,store.getState);
    return store;
}
