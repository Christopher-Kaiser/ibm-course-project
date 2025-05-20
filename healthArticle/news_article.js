var xhr = new XMLHttpRequest();
var url = './news_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var headline = document.createElement('h2');
        headline.textContent = article.headline;

        var story = document.createElement('p');
        story.textContent = article.story;

        articleDiv.appendChild(headline);
        articleDiv.appendChild(story);

        articlesDiv.appendChild(articleDiv);
    });
}

xhr.send();
