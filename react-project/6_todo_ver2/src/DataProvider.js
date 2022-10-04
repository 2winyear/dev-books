import React, {useState, useEffect, createContext} from 'react'

export const DataContext = createContext();

//DataProvider가 불리면, 자식컴포넌트의 인자값이 바뀐다. 
export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if(todoStore) setTodos(todoStore)
    }, [])

    //로컬스토리지에 저장. todo를 받아서 수정되어야한다. todos가 업데이트 될 때 작동하는 함수.
    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos));
    }, [todos])

    //todos, setTodos를 넘겨준다. children을 
    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}