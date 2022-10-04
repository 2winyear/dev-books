import React, {useState} from 'react';

//여긴 수정 사항 관련된 것.
//ListItem으로 값을 넘겨받아서 
const ListItem = ({todo, id, checkComplete, handleEditTodos}) =>{
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState(todo.name)

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    //수정 후 저장.
    const handleSave = id => {
        setOnEdit(false)
        if(editValue){
            handleEditTodos(editValue, id)
        }else{
            setEditValue(todo.name)
        }
    }

    //수정사항. 소문자로 입력받은 것. save를 누르면
    //handlesave에서 handleEditTodo로 todos를 업데이트.
    if (onEdit){
        return (
            <li>
                <input type="text" id="editValue" value={editValue} 
                name="editValue"
                onChange={e=>setEditValue(e.target.value.toLowerCase())} />

            <button onClick={() => handleSave(id)}>Save</button>
            </li>
        )

        //체크박스. active(true) = 완료부분. 
        //complete가 active이면, css의 값을 바꿔준다.
    } else {
        return (
            <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete}
                onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button disabled={todo.complete} onClick={handleOnEdit}>Edit</button>
            </li>
        )
    }
}

export default ListItem;