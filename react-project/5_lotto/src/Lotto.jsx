import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';
import './index.css'

//useMemo는 값을 기억한다.
function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0){
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

//선언 순서 중요. 조건문,함수나 반복문 안에 넣지 말것.
const Lotto = () => {
    const [winBalls, setWinBalls] = useState([]);
    const lottoNumbers = useMemo(() => getWinNumbers(), []);
    const [winNumbers, setWinNumbers] = useState(lottoNumbers);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        console.log('useEffect');
        for (let i = 0; i < winNumbers.length - 1; i++){
            timeouts.current[i] = setTimeout(() => { //timeouts.current 안바뀐다.
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        };
    }, [timeouts.current]); 
    // 빈 배열이라면 componentDidMount와 동일
    //배열에 요소가 있으면 componentDidMount랑 componentDidUpdate 둘 다 수행

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = []; //바뀐다.
    }, [winNumbers]);

    return (
        <>
            <div></div>
            <div id = "result">
                {winBalls.map((v)=><Ball key = {v} number={v} /> )}
            </div>
            <div>bonus</div>
            {bonus && <Ball number={bonus} onClick={onClickRedo}/>}
            {redo && <button onClick={onClickRedo}>one more!</button>}
        </>
    );
};

export default Lotto;