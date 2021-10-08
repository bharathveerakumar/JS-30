let canva=document.querySelector('canvas');
let ctx=canva.getContext('2d');

canva.width=window.innerWidth;
canva.height=window.innerHeight;
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=30;

let x=0, y=0, onDown=false, hue=0, lw=20, flagWidth=1;

function draw(e){
    if(onDown){
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.strokeStyle=`hsl(${hue}, 100%, 50%, 1)`;
        hue++;
        if(hue>255) hue=0;
        ctx.stroke();
        ctx.lineWidth=lw;
        if(lw<200&&flagWidth) lw++;
        else if(lw>20) lw--, flagWidth=0;
        else flagWidth=1;
        x=e.offsetX, y=e.offsetY;
    }
}

canva.addEventListener('mousedown', (e)=>[x, y, onDown]=[e.offsetX, e.offsetY, true]);
canva.addEventListener('mousemove', draw);
canva.addEventListener('mouseup', ()=>[onDown]=[false]);