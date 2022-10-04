import React, {useState} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent'
// import CountDown from './CountDown';

const Timer = () => {
    const [time, setTime] = useState({s: 0, m: 0, h: 0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 1000));
    };

    let updatedS=time.s, updatedM = time.m, updatedH = time.h;

    const run = () => {
        if (updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        updatedS++;      
        return setTime({s:updatedS, m:updatedM, h:updatedH});
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({s:0, m:0, h:0});
    };


    return (
        <div>
            <div className="stopwatch">
                <DisplayComponent time = {time}/>
                <BtnComponent status={status} reset={reset} stop={stop} start={start}/>
                {/* <CountDown /> */}
            </div>
        </div>
    );
  };

export default Timer;