import React, {useContext} from 'react';
import ListItem from './ListItem';
import {DataContext} from './DataProvider'

//complete가 true, false로 편집 가능 상태와 편집 불가능한 상태.
//setTodos로 newTodos에 추가한다. 완료부분
//index랑 id가 같으면 
const List = () =>{
    const [todos, setTodos] = useContext(DataContext);

    //완료와 수정상태. 완료가 아니라면 완료로 값을 바꿔주고, newTodos.
    const switchComplete = id => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id){
                todo.complete = !todo.complete
            }
        })
        setTodos(newTodos)
    }

    //수정할 때, editvlued와 id로 todos를 업데이트.
    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos]
        newTodos.forEach((todo, index) => {
            if (index === id){
                todo.name = editvalue
            }
        })
        setTodos(newTodos)
    }

    //todos에 map으로 todo와 index를
    //ListItem으로 넘겨준다. 
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                    checkComplete={switchComplete} handleEditTodos={handleEditTodos}/>
                ))
            }
        </ul>
    )
}

export default List;