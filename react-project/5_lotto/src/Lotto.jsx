import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import Ball from './Ball';
import './index.css'

//useMemo�� ���� ����Ѵ�.
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

//���� ���� �߿�. ���ǹ�,�Լ��� �ݺ��� �ȿ� ���� ����.
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
            timeouts.current[i] = setTimeout(() => { //timeouts.current �ȹٲ��.
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
    // �� �迭�̶�� componentDidMount�� ����
    //�迭�� ��Ұ� ������ componentDidMount�� componentDidUpdate �� �� ����

    const onClickRedo = useCallback(() => {
        console.log('onClickRedo');
        console.log(winNumbers);
        setWinNumbers(getWinNumbers());
        setWinBalls([]);
        setBonus(null);
        setRedo(false);
        timeouts.current = []; //�ٲ��.
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