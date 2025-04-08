import React, { useState, useEffect } from "react";
import Inputs from "./Inputs.jsx";
import TodoItem from "./TodoItem.jsx";

const Card = () => {
    const [todos, setTodos] = useState([]);
    const [currentInput, setCurrentInput] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [showFinished,setShowFinished] = useState(false);
    useEffect(() => {
        const todoString = localStorage.getItem("todos");
        if (todoString) {
            setTodos(JSON.parse(todoString));
        }
    }, []);

    const saveToLS = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const handleSave = () => {
        if (currentInput.trim().length >0) {
            let newTodos;
            if (editingId) {
                newTodos = todos.map(todo =>
                    todo.id === editingId ? { ...todo, text: currentInput } : todo
                );
                setEditingId(null);
            } else {
                newTodos = [...todos, { id: Date.now(), text: currentInput, isCompleted: false }];
            }
            setTodos(newTodos);
            setCurrentInput('');
            saveToLS(newTodos);
        }
    };

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        saveToLS(newTodos);
    };

    const handleEdit = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        if (todoToEdit) {
            setCurrentInput(todoToEdit.text);
            setEditingId(id);
        }
    };

    const handleCheckBox = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        );
        setTodos(newTodos);
        saveToLS(newTodos);
    };
    const handleFinish = (id)=>{
        setShowFinished(!showFinished);
    }
    return (
        <div className="min-w-[320px] max-[500px]:w-[90%] min-h-[500px] quaternaryBackgroundColor rounded-2xl p-3 flex justify-start items-center flex-col gap-3 ">
            <h1 className="secondaryTextColor font-extrabold text-4xl text-center">
                Todo - Manage your todos at one place
            </h1>
            <h2 className="self-start secondaryTextColor text-[0.9rem] font-bold">
                Add a Todo:
            </h2>
            <Inputs
                currentInput={currentInput}
                setCurrentInput={setCurrentInput}
                onInputSave={handleSave}
                isEditing={!!editingId}
            />
            <div className="flex gap-3 justify-start items-center self-start cursor-pointer">
                <input
                    className="cursor-pointer"
                    type="checkbox"
                    name="finished"
                    id="show"
                    onClick={handleFinish}
                    checked={showFinished}
                    onChange={() => setShowFinished(!showFinished)}
                />
                <label htmlFor="show" className="secondaryTextColor font-bold cursor-pointer">
                    Show Finished
                </label>
            </div>
            <div className="w-[100%] tertiaryBackgroundColor h-1 rounded-full"></div>
            <h2 className="justify-self-start secondaryTextColor text-[0.9rem] font-bold">
                Your Todos:
            </h2>
            <div className="w-full">
                {
                    todos.filter(todoItem => todoItem.isCompleted === showFinished).length > 0 ? (
                        <ul className="w-full h-8/10 flex flex-col rounded-2xl quaternaryTextColor tertiaryBackgroundColor overflow-y-auto">
                            {
                                todos.map((todoItem) => (
                                    todoItem.isCompleted === showFinished ? (
                                        <TodoItem
                                            key={todoItem.id}
                                            todo={todoItem}
                                            handleToggle={handleCheckBox}
                                            onDelete={handleDelete}
                                            onEdit={handleEdit}
                                        />
                                    ) : null
                                ))
                            }
                        </ul>
                    ) : (
                          showFinished ?
                                <p className="secondaryTextColor font-bold">No Finished Todos display</p> 
                                : <p className="secondaryTextColor font-bold">No Todos display</p>
                            
                    )
                }
            </div>
        </div>
    );
};

export default Card;
