let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
ajax.send();

console.log(ajax.response); 

const newsfeed =JSON.parse(ajax.reponse);
const ul = document.createElement('ul');

for(let i=0; i < 10; i++){
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.innerHTMl = newsfeed[i].title;
    console.log(a.innerHTML)
    li.innerHTML = a;
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);