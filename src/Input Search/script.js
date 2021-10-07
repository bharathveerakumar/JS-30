let endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
let cat=[], searchVal=[], html;


const input=document.querySelector('input');
const list=document.querySelector('ul');

displayData(' ');

async function readData(){
    let data=await(fetch(endpoint));
    data=await(data.json());
    cat=data;
}


function displayData(value){
    readData();

    let val=new RegExp(value, 'gi');

    searchVal=cat.filter(data=>{
        return (data.state.match(val)||data.city.match(val))&&value.length;
    });

    html=searchVal.map((data)=>{
        let state=data.state, val1=state.match(val);
        let city=data.city, val2=city.match(val);
        return `<li>${city.replace(val2, `<b><u>${val2}</u></b>`)}, ${state.replace(val1, `<b><u>${val1}</u></b>`)}</li>`;
    }).join('');

    list.innerHTML=html;
}

input.addEventListener('input', ()=>{
    displayData(input.value);
});

input.addEventListener('change', ()=>{
    displayData(input.value);
});

