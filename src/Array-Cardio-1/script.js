let endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let data=[], arr=[];

read();

async function read(){
    data=await fetch(endpoint);
    data=await data.json();
    display();
}


function display(){
    
    //array filter
    //Filter by Population
    arr=data.filter(data=>{
        return data.population>=400000;
    });
    console.table(arr);

    //array map
    //City and State Name
    const map=arr.map(a=>{
        return `${a.city}, ${a.state}`;
    });
    console.table(map);

    //array sort
    //Sort by Population
    const sort=arr.sort((a, b)=>parseInt(a.population)>parseInt(b.population)?1:-1);
    console.table(sort);

    //array reduce
    //Total Growth rate
    const gRate=arr.reduce((total, rate)=>{
        return total+parseInt(rate.rank);
    }, 0);
    console.log(gRate);

    //filtering the arr which contains the 'or' in state or city
    let val=new RegExp('or', 'gi');
    const on=arr.filter(a=>{
        return a.state.match(val);
    });
    console.table(on);

    //sort by state name
    const stateName=map.sort((a, b)=>{
        let aLt=a.split(", ")[1];
        let bLt=b.split(", ")[1];
        return aLt>bLt?1:-1;
    });
    console.table(stateName);
}





