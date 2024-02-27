import ITodo from "../../models/ITodo.ts";
import { Todo } from "../Todo/Todo.tsx";
import { useRef, useState, useEffect } from "react";
import './TodoList.css'


function TodoList() {
    let [nextId, setNextId] = useState<number>(0);
    let newTaskRef = useRef<HTMLInputElement>(null);
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [completedList, setCompletedList] = useState<ITodo[]>([]);
    const initialized = useRef(-1)

    function handleOnAddClick(event: any): void {
        const newTodoList = todoList.slice();
        setNextId(++nextId);
        newTodoList.push({ id: nextId, title: newTaskRef.current?.value, isCompleted: false });

        setTodoList(newTodoList);
        if (newTaskRef.current) {
            newTaskRef.current.value = '';
        }
    }

    function handleOnClickClearAll(event: any): void {
        setTodoList([]);
    }

    function deleteTask(id: number): void {
        setTodoList(todoList.filter(todo => todo.id !== id));
    }

    useEffect(() => {
        if (initialized.current === 1) {
            return;
        }
        initialized.current = 1;
        const itemsFromStorage = localStorage.getItem('todoList');
        const completedListFromStorage = localStorage.getItem('completedList');
        if (itemsFromStorage !== null) {
            const items = JSON.parse(itemsFromStorage); 
            setTodoList(items);
            setNextId(items.length);
        }
        if (completedListFromStorage !== null) {
            setCompletedList(JSON.parse(completedListFromStorage));
        }

    }, [])

    useEffect(() => {
        if (initialized.current !== 1) {
            return;
        }

        localStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.setItem('completedList', JSON.stringify(completedList));

    }, [todoList, completedList])

    function onComplete(todo: ITodo) {
        deleteTask(todo.id);
        completedList.push(todo);
        setCompletedList(completedList);
    }

    return (
        <>
            <h2>TO DO </h2>
            <div className="col-md-12">
                <div className="row">

                    <div className="col-md-7">
                        <input type="text" ref={newTaskRef} className="form-control" />
                    </div>

                    <div className="col-md-4">
                        <button className="btn btn-primary mx-1" onClick={handleOnAddClick}>Add</button>
                        <button className="btn btn btn-outline-secondary mx-1" onClick={handleOnClickClearAll}>Clear All</button>
                    </div>

                    <div className="col-md-12 mt-3">
                        <ul className="list-group">
                            {todoList.map((todo, index) =>
                                <Todo item={todo} key={index}
                                    deleteItem={() => deleteTask(todo.id)}
                                    onDoubleClick={() => onComplete(todo)}
                                ></Todo>
                            )}
                        </ul>
                    </div>

                    <hr className="mt-4" />

                    <div className="col-md-12 mt-1">
                        <h4>Completed</h4>
                        <ul className="list-group">
                            {completedList.map((completedTask, index) =>
                                <li className="list-group-item line-through" key={index}>{completedTask.title} </li>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TodoList;