const ajax = new XMLHttpRequest();
const article_url = 'https://api.hnpwa.com/v0/item/@id.json';
const content = document.createElement('div');
const container = document.getElementById('root');
const store = {
    currentPage: 1,
};

function getData(url) {
    ajax.open('GET', url, false);
    ajax.send();

    return JSON.parse(ajax.response);
}
function newsFeed() {
    const newsFeed = getData('https://api.hnpwa.com/v0/news/1.json');
    const newsList = [];
    let template = `
        <div>
            <h1>Hacker News</h1>
            <ul>
                {{__news_feed__}}
            </ul>
            <div>
                <a href="#/page/{{__prev_page__}}">이전 페이지</a>
                <a href="#/page/{{__next_page__}}">다음 페이지</a>
            </div>
        </div>
    `;

    for (let i = (store.currentPage - 1) * 10; i < (store.currentPage) * 10; i++) {
        newsList.push(`
            <li>
                <a href="#/item/${ newsFeed[i].id }">
                    ${ newsFeed[i].title } (${ newsFeed[i].comments_count })
                </a>
            </li>
        `)
    }
    template = template.replace('{{__news_feed__}}', newsList.join(''));
    template = template.replace('{{__prev_page__}}', store.currentPage > 1 ? store.currentPage - 1 : 1);
    template = template.replace('{{__next_page__}}', store.currentPage + 1);

    container.innerHTML = template;

}

function newsDetail() {
    const id = location.hash.substring(7); // location: browser가 제공하는 주소 객체 
    const newsContent = getData(article_url.replace('@id', id));
    const title = document.createElement('h1');

    container.innerHTML = `
        <h1>${ newsContent.title }</h1>
        <div>}
            <a href="#/page/${ store.currentPage }">목록으로</a>
        </div>
    `
    title.innerHTML = newsContent.title;
    content.appendChild(title);
}

function router() {
    const routePath = location.hash;
    console.log(location);
    if (routePath === '') { // @index.html에는 #이 있지만 #만 있을 때는 '' 리턴하는 걸로 인식
        newsFeed();
    } else if (routePath.indexOf('#/page/') >= 0) {
        store.currentPage = Number(routePath.substring(7));
        newsFeed();
    } else {
        newsDetail();
    }
}

window.addEventListener('hashchange', router);
router();
