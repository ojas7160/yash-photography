import * as actionTypes from '../actions/theme';

const initialState = {
  theme: null
}

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_THEME :
      return { ...state, theme: action.theme }
    default:
      return state
  }
}

export default themeReducer;