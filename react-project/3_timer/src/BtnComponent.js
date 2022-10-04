import React from 'react';

const BtnComponent = (props) => {
    return (
        <div>
            {(props.status === 0)?
                <button className="start" onClick={props.start}>start</button> : ""
            }

            {(props.status === 1)?
                <div>
                    <button className="stop" onClick={props.stop}>stop</button>
                    <button className="reset" onClick={props.reset}>reset</button>
                </div> : ""
            }

            {(props.status === 2)?
                <div>
                    <button className="resume" onClick={props.resume}>resume</button>
                    <button className="reset" onClick={props.reset}>reset</button>
                </div> : ""
            }
        </div>
    );
}

export default BtnComponent;