import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '占쎈듌占쎄텢占쎌뿺'},
        {id: 2, text: '占쎈섰占쎌벉'},
        {id: 3, text: '占쎈듌'},
        {id: 4, text: '獄쏅뗀�뿺'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const namesList = names.map(name => (
        <li key = {name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
    <>
    <input value = {inputText} onChange={onChange} />
    <button onClick={onClick}>�빊遺쏙옙占�</button>
    <ul>{namesList}</ul>
    </>
    );
};

export default IterationSample;