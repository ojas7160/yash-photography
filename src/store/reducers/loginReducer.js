import * as actionTypes from '../actions/login';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  token: null,
  currentUser: null,
  user: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      localStorage.setItem('token', action.token)
      return { ...state, token: action.token, user: action.user }
    
    case actionTypes.UPDATE_USER:
      return { ...state, user: action.user }

    case actionTypes.LOGOUT:
      localStorage.clear();
      return {}
      
    default:
      return state;
  }
}

const persistConfig = {
  key: 'loginReducer',
  storage: storage,
  blacklist: ['currentUser']
};

export default persistReducer(persistConfig, loginReducer);

// export default loginReducer;