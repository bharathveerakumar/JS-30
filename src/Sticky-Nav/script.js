const nav=document.querySelector('nav');
const side=document.querySelector('.wi');
const p=document.querySelector('p');

let top1=nav.offsetTop;

window.addEventListener('scroll', (e)=>{
    if(scrollY>=top1){
        nav.classList.add('stick');
        side.classList.remove('toggle');
        p.classList.add('zoom');
    }
    else nav.classList.remove('stick'), side.classList.add('toggle'), p.classList.remove('zoom');
});