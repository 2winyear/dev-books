import React, {useState, useContext} from 'react';
import {DataContext} from './DataProvider'

//Create가 눌리면, addToDo가 실행되는데, 소문자만 입력 가능하고
//setTodos로 todo의 내용을 업데이트 해줌.
//setTodoName으로 값을 비워준다.
//useContext는 DataContext에서 return값으로 변경
const FormInput = () => {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    
    //todos의 모든 원소를 그대로 가져오고 추가한 배열을 todos에 업데이트.
    const addTodo = e => {
        e.preventDefault(); //form 안에 있는 input등을 그 동작을 중단시킨다.
        setTodos([...todos, {name: todoName, complete:false}])
        setTodoName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="todos" id="todos"
            require placeholder="What needs to be done?"
            value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button type = "submit">Create</button>
        </form>
    )
}

export default FormInput;