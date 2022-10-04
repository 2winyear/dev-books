import React, { Component } from 'react';

class Counter extends Component {
    state= {
        number: 0,
        fixedNumber: 0
    };

render() {
    const{number, fixedNumber} = this.state;
    return(
        <div>
            <h1>{number}</h1>
            <h2>諛붽씀吏� �븡�뒗 媛�: {fixedNumber}</h2>
            <button onClick={() => {
                this.setState({number:
                number+1});
            }}>
                +1
            </button>
        </div>
    )
}
}

export default Counter;