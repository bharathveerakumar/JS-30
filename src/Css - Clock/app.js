let long=document.querySelector('.seconds');
let medium=document.querySelector('.minutes');
let small=document.querySelector('.hrs');
let audio=document.querySelector('audio');
let circle=document.querySelector('.circle'), i=0;


setInterval(()=>{
    audio.play();
    let date=new Date();
    let sec=date.getSeconds(), min=date.getMinutes(), hr=date.getHours();
    small.style.transform="rotate("+(((hr%12)*60)+min)*0.5+"deg)";
    medium.style.transform="rotate("+((min*60)+sec)*0.1+"deg)";
    long.style.transform="rotate("+sec*6+"deg)";
    if(!i) circle.style.boxShadow="1px 1px 30px 1px black", i=1;
    else circle.style.boxShadow="none", i=0;
    sec!=0?long.style.transition="transform 0.1s cubic-bezier(0, 4, 0, 1) 0s":long.style.transition="none";
}, 1000);