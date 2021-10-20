const initialState = {
  name: "All",
  status: false,
};

const filterReducers = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEACTIVEFILTER":
      return {
        name: action.payload.name,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default filterReducers;
