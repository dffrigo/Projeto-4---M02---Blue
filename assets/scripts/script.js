const meuStatus = document.querySelector('#status');
const fotoStatus = document.querySelector('#char');
let meuBtn = document.querySelector('#button');

meuBtn.addEventListener('click', () =>{
    if(meuBtn.value == 'first'){
        meuStatus.innerText = 'angry';
        fotoStatus.src = 'assets/images/1.png';
        meuBtn.value = 'second';
    }else if(meuBtn.value == 'second'){
        meuStatus.innerText = 'in love';
        fotoStatus.src = 'assets/images/2.png';
        meuBtn.value = 'third';
    }else{
        meuStatus.innerText = 'happiness';
        fotoStatus.src = 'assets/images/0.png';
        meuBtn.value = 'first'
    }
});