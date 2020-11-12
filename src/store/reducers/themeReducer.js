import * as actionTypes from '../actions/theme';

const initialState = {
  theme: null
}

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.THEME_CHANGE:
      return { ...state, theme: action.theme }
    case actionTypes.LOGOUT:
      localStorage.clear();
      return {}
    default:
      return state
  }
}

export default themeReducer;