import React from "react";
// import {} from "./Handles";
const TodoItem = ({ todo, handleToggle, onDelete, onEdit }) => {
    return (

        <>
            <li className="w-full h-[10%] flex justify-between items-center quaternaryTextColor">
                <div className="flex  items-center gap-5 w-[80%] cursor-pointer hover:bg-black hover:text-white p-1"
                onClick={() => handleToggle(todo.id)}
                >
                    <input
                        className="cursor-pointer"
                        type="checkbox"
                        name="finish"
                        checked={todo.isCompleted}
                        onChange={() => handleToggle(todo.id)}
                    />
                    <div className="TodoText overflow-x-auto whitespace-nowrap flex-nowrap ">
                        <span className={todo.isCompleted ? "line-through" : ""}>
                            {todo.text}
                        </span>
                    </div>
                </div>

                <div className="flex h-auto w-[20%] justify-end">

                    <span onClick={() => onEdit(todo.id)} className="p-1 rounded-[50%] cursor-pointer hover:bg-[#525252]">
                        <img src="/assets/edit.svg" alt="" className="filter invert w-5" />
                    </span>
                    <span onClick={() => onDelete(todo.id)} className="p-1 rounded-[50%] cursor-pointer hover:bg-[#525252] ">
                        <img src="/assets/delete.svg" alt="" className="invert w-5 hover:filter fi" />
                    </span>
                </div>
            </li>
        </>
    );
};
export default TodoItem;
