import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

// Redux
import { useDispatch } from "react-redux";
import { removetodo, changestatus } from "../store/Actions/TodosAction";

// framer motion
import { motion } from "framer-motion";

// Variats
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
    x: -30,
    opacity: 0,
    transition: {
      type: "ease",
      duration: 0.3,
    },
  },
};

const Todo = ({ name, id, status }) => {
  const dispatch = useDispatch();

  return (
    <motion.li
      className="py-2 px-3 border-b-[1px] border-gray-300 flex items-center group"
      layout
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <button
        className={`w-3 h-3 mr-2 rounded-full ring-[1px] ring-gray-400 text-xs text-white overflow-hidden grid place-items-center
        ${status && "bg-blue-400 ring-blue-400"}
        `}
        onClick={() => dispatch(changestatus(id))}
      >
        {status && <FontAwesomeIcon icon={faCheck} />}
      </button>
      <p
        className={`flex-1
        ${status && "line-through opacity-50"}`}
      >
        {name}
      </p>
      <button
        className="text-sec text-md hidden group-hover:block hover:text-prim"
        onClick={() => dispatch(removetodo(id))}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </motion.li>
  );
};

export default Todo;
