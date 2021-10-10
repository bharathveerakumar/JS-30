const input=document.querySelectorAll('input');
const value=document.querySelectorAll('label');
let holded=false, first='zero', end;

input.forEach((inp)=>{
    inp.addEventListener('click', ()=>{
        let id=inp.getAttribute('id');
        if(holded&&(inp.checked)) shiftUp(id);
        else if(holded&&!inp.checked) shiftDown(id);
        else{
            first=id;
            let ele=document.querySelector(`[for="${id}"]`)
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
        if(id!=last&&last!=1) inp.checked=true, ele.classList.add('strike');
        else if(last!=1) inp.checked=(inp.checked), ele.classList.add('strike'), last=1;
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
