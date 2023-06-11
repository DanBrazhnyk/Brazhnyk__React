import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "../assets/Todo.module.css";

export default function HelperTextMisaligned() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const addToDO = () => {
        if (task.trim() === "") {
            alert("Пожалуйста, заполните поле");
        } else {
            if (editMode) {
                const updatedTodos = [...todos];
                updatedTodos[editIndex] = task;
                setTodos(updatedTodos);
                setTask("");
                setEditMode(false);
                setEditIndex(null);
            } else {
                setTodos([...todos, task]);
                setTask("");
            }
        }
    }

    const editTodo = (index) => {
        setTask(todos[index]);
        setEditMode(true);
        setEditIndex(index);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const editInput = (event) => {
        setTask(event.target.value);
    };
    
    return (
        <div>
            <div className={styles.containerInput}>  
                <TextField id="demo-helper-text-misaligned-no-helper" value={task} onChange={editInput} label="Todo" />
                <Button variant="outlined" onClick={addToDO}>
                    {editMode ? "Save" : "Add"}
                </Button>
            </div>
            <div className={styles.containerLists}>
                {todos.map((todo, index) => (
                    <div className={styles.ListsItem} key={index}>
                            {editMode && editIndex === index ? (
                                <TextField
                                    value={task}
                                    onChange={editInput}
                                    autoFocus
                                    fullWidth
                                />
                            ) : (
                                <span>{todo}</span>
                            )}
                            <div>
                                {editMode && editIndex === index ? (
                                    <Button variant="contained" onClick={() => addToDO()}>
                                        Save
                                    </Button>
                                ) : (
                                    <>
                                        <EditIcon onClick={() => editTodo(index)} />
                                        <DeleteIcon onClick={() => deleteTodo(index)} />
                                    </>
                                )}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
