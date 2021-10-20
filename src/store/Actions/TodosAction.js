export const addtodo = (id, name) => {
  return {
    type: "ADDTODO",
    payload: {
      id,
      name,
    },
  };
};

export const removetodo = (id) => {
  return {
    type: "REMOVETODO",
    payload: id,
  };
};

export const changestatus = (id) => {
  return {
    type: "CHANGESTATUS",
    payload: id,
  };
};

export const clearcompleted = () => {
  return {
    type: "CLEARCOMPLETED",
  };
};
