const input=document.querySelectorAll('input');
const value=document.querySelectorAll('label');
let holded=false, first='zero', flagFirst=0, flagLast=0;

input.forEach((inp)=>{
    inp.addEventListener('click', ()=>{
        let id=inp.getAttribute('id');
        if(holded&&inp.checked) shiftUp(id);
        else if(holded&&!inp.checked) shiftDown(id);
        else{
            first=id;
            let ele=document.querySelector(`[for="${id}"]`);
            ele.classList.toggle('strike');
        }
    });
});

window.addEventListener('keydown', (data)=>{
    if(data.key=='Shift') holded=true;
});

window.addEventListener('keyup', (data)=>{
    if(data.key=='Shift') holded=false;
});

function shiftUp(last){
    input.forEach((inp)=>{
        let id=inp.getAttribute('id');
        let ele=document.querySelector(`[for="${id}"]`);
        if((id==first||flagFirst)&&id!=last){
            flagFirst=1;
            if(flagLast) flagFirst=0, flagLast=0;
            inp.checked=true, ele.classList.add('strike');
        }
        else if(id==last||flagLast){
            flagLast=1;
            if(flagFirst) flagFirst=0, flagLast=0;
            inp.checked=true, ele.classList.add('strike');
        }
    });
}

function shiftDown(last){
    input.forEach((inp)=>{
        let id=inp.getAttribute('id');
        let ele=document.querySelector(`[for="${id}"]`);
        if(id==last&&last!=1) ele.classList.remove('strike'), inp.checked=false, last=1;
        else if(last==1) ele.classList.remove('strike'), inp.checked=false;
    });
}
