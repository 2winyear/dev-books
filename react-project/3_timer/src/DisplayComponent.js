import React from 'react';

const DisplayComponent = (props) => {
    return (
        <div>
            <span>{(props.time.h > 0)? props.time.h : "0"+ props.time.h}</span>&nbsp;:&nbsp;
            <span>{(props.time.m > 0)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s > 0)? props.time.s : "0"+ props.time.s}</span>&nbsp;
        </div>
    )
}

export default DisplayComponent;