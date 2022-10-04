//0.1초마다 background바꿔주기
let imagelocation = '0';
let rockScissorPaper = {
    rock: '0',
    scissor: '-120px',
    paper: '-250px'
};

function computer(imagelocation) {
    return Object.entries(rockScissorPaper).find(function(v) {
        return v[1] === imagelocation;
    })[0];
}

//비동기 끝에 코드가 있어야 된다고 생각.
let Interval = setInterval(() => {
    if (imagelocation === rockScissorPaper.rock){
        imagelocation = rockScissorPaper.scissor;
    }
    else if (imagelocation === rockScissorPaper.scissor){
        imagelocation = rockScissorPaper.paper;
    }
    else {
        imagelocation = rockScissorPaper.rock;
    }
    document.querySelector('#computer').style.background = 
    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbBC60XZM-pF3yv6WipAwIesPBXM5sJMMFg&usqp=CAU) ' + imagelocation + ' 0';
}, 100);

document.querySelectorAll('.btn').forEach(function(btn){
    btn.addEventListener('click', function(){
        clearInterval(Interval);
        setTimeout(function() {
            Interval = setInterval(function () {
                if (imagelocation === rockScissorPaper.rock){
                    imagelocation = rockScissorPaper.scissor;
                }
                else if (imagelocation === rockScissorPaper.scissor){
                    imagelocation = rockScissorPaper.paper;
                }
                else {
                    imagelocation = rockScissorPaper.rock;
                }
                document.querySelector('#computer').style.background = 
                'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbBC60XZM-pF3yv6WipAwIesPBXM5sJMMFg&usqp=CAU) ' + imagelocation + ' 0';
            }, 100);  
        }, 1000);
        let myselect = this.textContent;
        console.log(myselect, computer(imagelocation));
        if (myselect === 'rock'){
            if (computer(imagelocation) === 'scissor') {
                alert('이겼습니다.');
            } else if (computer(imagelocation) === 'rock'){
                alert('비겼습니다.');
            } else{
                alert('졌습니다.');
            }
        } else if (myselect == 'scissor') {
            if (computer(imagelocation) === 'scissor') {
                alert('비겼습니다.');
            } else if (computer(imagelocation) === 'rock'){
                alert('졌습니다.');
            } else{
                alert('이겼습니다.');
            }
        } else if (myselect == 'paper') {
            if (computer(imagelocation) === 'scissor') {
                alert('졌습니다.');
            } else if (computer(imagelocation) === 'rock'){
                alert('이겼습니다.');
            } else{
                alert('비겼습니다.');
            }
        }
    });
});