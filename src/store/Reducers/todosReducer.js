const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDTODO":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          status: false,
        },
      ];
    case "REMOVETODO":
      return state.filter((todo) => action.payload !== todo.id);
    case "CHANGESTATUS":
      return state.map((todo) =>
        action.payload === todo.id
          ? {
              ...todo,
              status: !todo.status,
            }
          : todo
      );
    case "CLEARCOMPLETED":
      return state.filter((todo) => !todo.status);
    default:
      return state;
  }
};

export default todoReducer;
