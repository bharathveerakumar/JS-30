let images=document.querySelectorAll('img');

function slideIn(){
    images.forEach(image=>{
        if((window.scrollY+window.innerHeight-image.height)>image.offsetTop&&(image.offsetTop+image.height/2)>window.scrollY){
            image.classList.add('active');
        }
        else image.classList.remove('active');
    });
}

window.addEventListener('scroll', ()=>{
    slideIn();
});