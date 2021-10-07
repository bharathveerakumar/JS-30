let color=document.querySelectorAll('.cont input');
let box1=document.querySelector('.box');
let image=document.querySelector('.pBox');


color.forEach((element)=>{
    element.addEventListener('input', ()=>{
        var suffix=element.dataset.set||'';
        document.documentElement.style.setProperty(`--${element.name}`, element.value+suffix);
    });
});


