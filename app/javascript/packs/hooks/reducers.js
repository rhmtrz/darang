import actionTypes from "./action-type";

export const INITIAL_STATE = {
  articles: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ARTICLES:
      return {
        ...state,
        articles: action.articles
      };

    default:
      return state;
  }
};

export default reducer;
