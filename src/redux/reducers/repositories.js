import * as Actions from '../actions'

const initialState = {
  data: []
};

export default function (state = initialState, action) {

  switch (action.type) {
    case Actions.GET_REPOSITORIES: {
      return {
        ...state,
        data: action.payload
      }
    }
    case Actions.ADD_REPOSITORY: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case Actions.REMOVE_REPOSITORY: {
      return {
        ...state,
        data: action.payload
      };
    }
    case Actions.PUT_REPOSITORY: {
      return {
        ...state,
        data: action.payload
      };
    }
    default:
      return state;
  }
}
