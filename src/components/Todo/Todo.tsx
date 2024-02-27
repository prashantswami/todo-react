import React from 'react'
import ITodo from '../../models/ITodo'

interface props {
    item: ITodo;
    deleteItem: () => void;
    onDoubleClick: ()=> void;
}

export const Todo = ({ item, deleteItem, onDoubleClick }: props) => {
    return (
        <li className="list-group-item" onDoubleClick={onDoubleClick}>
            {item.title}
            <button type="button" 
            className="btn float-end" 
                onClick={deleteItem}
                
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    )
}
