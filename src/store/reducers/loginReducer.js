import { bindActionCreators } from 'redux';
import * as actionTypes from '../actions/login';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  token: null,
  currentUser: null
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      console.log(action)
      return { ...state, token: action.token }
  
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