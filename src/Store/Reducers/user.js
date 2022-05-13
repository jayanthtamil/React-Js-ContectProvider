const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: [...state.user, action.users],
      };
    default:
      return state;
  }
};

export default usersReducer;
