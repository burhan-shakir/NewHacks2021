let sites = [];
let count=0;

function checkList(){
    let list= JSON.parse(localStorage.getItem('SiteList'));
    let pre = document.querySelector('#msg pre');
    for (let i=0; i<list.length;i++){
        pre.textContent += list[i] + "\n";
    }
} 

const addSite = (ev)=>{
    ev.preventDefault();
    let site = document.getElementById('website').value
    
    sites.push(site);
    document.querySelector('form').reset();

    console.log('added', {sites});

    let pre = document.querySelector('#msg pre');

    pre.textContent += (sites[count]) + "\n ";
    count++;

    localStorage.setItem('SiteList', JSON.stringify(sites));
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addSite);
})

const clearSites = (ev)=>{
    localStorage.removeItem('SiteList');
    ev.preventDefault();
    sites=[];
    let pre = document.querySelector('#msg pre');

    pre.textContent = (sites);
    
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('clrbtn').addEventListener('click', clearSites);
}
)

window.addEventListener('load', checkList);
