import {useState} from 'react';
import Button from './Button';

const TodoInput = ({onTaskCreate}) =>{

    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    const handleChange = (e) =>{
        setText(e.target.value);
    };

    const handleDescription = (e) =>{
        setDescription(e.target.value);
    };

    const handleClick = () =>{ 
        onTaskCreate(text,description);
    };

    return (
    <div className="mid">
        <input type="text" placeholder="Create a new Todo.." value={text} onChange={handleChange} className="input-btn"/>
        <Button title="+" onClick={handleClick} />
        <input type="text" placeholder="Add description of Todo.." value={description} onChange={handleDescription} className="description-btn"/>
       
    </div>
    );
};
export default TodoInput;