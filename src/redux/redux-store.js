import { createStore, combineReducers } from "redux";
import sandboxReducer from "./sandbox-reducer";
import registerReducer from "./register-reducer";
import authReducer from "./auth-reducer";
import supportReducer from "./support-reducer";
import profileReducer from "./profile-reducer";
import adminReducer from "./admin-reducer";

let reducers = combineReducers({
  sandboxPage: sandboxReducer,
  registerPage: registerReducer,
  auth: authReducer,
  supportPage: supportReducer,
  profilePage: profileReducer,
  adminPage: adminReducer,
});

let store = createStore(reducers);

export default store;
