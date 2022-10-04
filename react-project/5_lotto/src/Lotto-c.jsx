import React, { Component } from 'react';
import Ball from './Ball';
import './index.css'

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

//첫번째 공은 1초뒤에 나타나고 두번째공은 2초 ,,,winballs에 하나씩 추가
class Lotto extends Component {
    state = {
        winNumbers: getWinNumbers(), // 당첨 숫자들
        winBalls: [],
        bonus: null, // 보너스 공
        redo: false,
    };

    timeouts = [];
    
    runTimeouts = () => {
        const { winNumbers } = this.state;
        for (let i = 0; i < this.state.winNumbers.length - 1; i++){
            this.timeouts[i] = setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        winBalls: [...prevState.winBalls, winNumbers[i]],
                    };
                });
            }, (i + 1) * 1000);
        }
        this.timeouts[6] = setTimeout(() => {
            this.setState({
                bonus: winNumbers[6],
                redo: true,
            });
        }, 7000);
    };
    
    componentDidMount() {
        this.runTimeouts();
    }

    conponentDidUpdate(prevProps, prevState) {
        if (this.state.winBalls.length === 0){
            this.runTimeouts();
        }
    }

    componentWillUnmount() {
        this.timeouts.forEach((v) => {
            clearTimeout(v);
        });
    }

    onClickRedo = () => {
        this.setState({
            winNumbers: getWinNumbers(), // 당첨 숫자들
            winBalls: [],
            bonus: null, // 보너스 공
            redo: false,
        });
        this.timeouts=[];
        this.runTimeouts();
    };

    render() {
        const { winBalls, bonus, redo } = this.state;
        return (
            <>
                <div>result</div>
                <div id = "result">
                    {winBalls.map((v)=><Ball key = {v} number={v} /> )}
                </div>
                <div>bonus</div>
                {bonus && <Ball number={bonus}/>}
                {redo && <button onClick={this.onClickRedo}>one more!</button>}
            </>
        );
    }
}

export default Lotto-C;