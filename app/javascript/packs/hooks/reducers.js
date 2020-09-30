import actionTypes from "./action-type";

export const INITIAL_STATE = {
  articles: [],
  authUser: {}
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      console.log('++++',action.articles)
      return {
        ...state,
        articles: action.articles
      };

    case actionTypes.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.user
      };
    default:
      return state;
  }
};

export default reducer;
