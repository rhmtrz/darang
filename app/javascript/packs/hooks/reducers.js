import actionTypes from "./action-type";

export const INITIAL_STATE = {
  flavors: [],
  recipes: [],
  lastComment: {},

  tags: [],
  searchedTagIds: [],
  searchedFlavorIds: [],
  currentUser: {},
  connectedUsers: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_FLAVORS:
      return {
        ...state,
        flavors: action.flavors
      };

    case actionTypes.FETCH_RECIPES:
      return {
        ...state,
        recipes: action.recipes
      };

    case actionTypes.SET_LAST_COMMENT:
      return {
        ...state,
        lastComment: action.lastComment
      };

    case actionTypes.FETCH_TAGS:
      return {
        ...state,
        tags: action.tags
      };

    case actionTypes.SET_SEARCHED_TAG:
      return {
        ...state,
        searchedTagIds: action.searchedTagIds
      };

    case actionTypes.SET_SEARCHED_FLAVOR:
      return {
        ...state,
        searchedFlavorIds: action.searchedFlavorIds
      };

    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user,
        authUser: true
      };

    case actionTypes.SET_ALL_USER:
      return {
        ...state,
        connectedUsers: action.connected_users
      };

    default:
      return state;
  }
};

export default reducer;
