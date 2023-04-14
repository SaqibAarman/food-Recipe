import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const sideBarReducer = (state, actions) => {
  switch (actions.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: true,
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSideBarOpen: false,
      };

    default:
      return state;
  }
};

export default sideBarReducer;