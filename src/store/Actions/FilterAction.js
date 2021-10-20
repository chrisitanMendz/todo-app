export const changefilter = (name, status) => {
  return {
    type: "CHANGEACTIVEFILTER",
    payload: {
      name,
      status,
    },
  };
};
