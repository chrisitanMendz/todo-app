import React, { useRef } from "react";

import _uniqueId from "lodash/uniqueId";

import { useDispatch } from "react-redux";
import { addtodo } from "../store/Actions/TodosAction";

const Form = () => {
  const dispatch = useDispatch();
  const refName = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const id = _uniqueId("todo-");
    const name = refName.current.value;

    if (name.length !== 0) {
      dispatch(addtodo(id, name));
      refName.current.value = "";
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Task..."
        className="ring-1 ring-gray-400 w-full px-3 py-2 outline-none rounded-sm
        focus:ring-2 focus:ring-blue-500"
        ref={refName}
      />
    </form>
  );
};

export default Form;
