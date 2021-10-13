const panel=document.querySelectorAll('.imgcont');
let clas;

panel.forEach(pan=>{
    console.log(panel)
    pan.addEventListener('mouseover', ()=>{
        pan.style.flex=2.3;
        pan.style.fontSize=70+'px';
        clas=setTimeout(()=>{
            pan.classList.add('active');
        }, 700);
    });
    pan.addEventListener('mouseleave', ()=>{
        pan.style.flex=1;
        pan.style.fontSize=45+'px';
        clas=setTimeout(()=>{
            pan.classList.remove('active');
        }, 700);
    });
});