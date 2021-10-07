window.addEventListener('keydown', function(e){
    const audio=document.querySelector(`audio[data-k="${e.keyCode}"]`);
    const div=document.querySelector(`div[data-k="${e.keyCode}"]`);
    if(!audio) return;
    div.classList.toggle('sty');
    audio.currentTime=0;
    audio.play();
});
window.addEventListener('keyup', function(e){
    const audio1=document.querySelector(`audio[data-k="${e.keyCode}"]`);
    const div1=document.querySelector(`div[data-k="${e.keyCode}"]`);
    if(!audio1) return;
    div1.classList.toggle('sty');
});