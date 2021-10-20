import React from "react";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { changefilter } from "../store/Actions/FilterAction";
import { clearcompleted } from "../store/Actions/TodosAction";

// Data
import lists from "../data/filterLists.json";

// Framer motion
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

// Components
import Todo from "./Todo";

// variants
const variants = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "ease",
      duration: 0.3,
    },
  },
  exit: {
    x: 30,
    opacity: 0,
    transition: {
      type: "ease",
      duration: 0.3,
    },
  },
};

const Todos = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const todos = useSelector((state) => state.todos);

  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        className="relative pb-8 bg-white mt-4 rounded-sm shadow-2xl"
      >
        <AnimatePresence>
          {todos.map(
            (todo) =>
              (filter.name === "All" || filter.status === todo.status) && (
                <Todo
                  key={todo.id}
                  name={todo.name}
                  id={todo.id}
                  status={todo.status}
                />
              )
          )}

          {todos.length === 0 && (
            <motion.li
              className="px-3 py-2"
              layout
              variants={variants}
              initial="hidden"
              animate="visible"
            >
              No task exist!
            </motion.li>
          )}
        </AnimatePresence>

        <motion.li
          layout
          className="absolute w-full h-8 bottom-0 px-3 flex justify-between items-center"
        >
          <p className="text-xs text-sec flex-1">{todos.length} items left</p>
          <div className="flex-1 flex justify-center">
            {lists.map((list) => (
              <button
                key={list.name}
                className={`text-xs mx-1 text-sec hover:text-prim
                ${
                  filter.name === list.name &&
                  "text-blue-500 pointer-events-none"
                }`}
                onClick={(e) =>
                  dispatch(changefilter(e.target.innerText, list.status))
                }
              >
                {list.name}
              </button>
            ))}
          </div>
          <div className="flex-1 flex justify-end">
            <button
              className="text-xs text-sec hover:text-prim"
              onClick={() => dispatch(clearcompleted())}
            >
              Clear Completed
            </button>
          </div>
        </motion.li>
      </motion.ul>
    </AnimateSharedLayout>
  );
};

export default Todos;
