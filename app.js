const ajax = new XMLHttpRequest();
const article_url = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');
const container = document.getElementById('root');

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
ajax.send();

// console.log(ajax.response);

const newsfeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
    const id = location.hash.substring(1); // location: browser가 제공하는 주소 객체 

    ajax.open('GET', url = article_url.replace('@id', id), false);
    ajax.send();

    console.log(ajax.response);
    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1'); ``

    title.innerHTML = newsContent.title;
    content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const a = document.createElement('a');

    // alternative 1
    div.innerHTML = `
    <li>
        <a href="#${newsfeed[i].id}">${newsfeed[i].title} (${newsfeed[i].comments_count})</a>
    </li>
    `
    // alternative 2: Dom API
    // a.href = `#${newsfeed[i].id}`;
    // a.innerHTML = `${newsfeed[i].title} (${newsfeed[i].comments_count})`;
    // li.appendChild(a);
    // ul.appendChild(li);
    ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(content);
