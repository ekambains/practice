async function getArticles() {
    let res = await fetch("http://localhost:3000/api/articles/");
    let jsonData = await res.json();
    let articles = jsonData.data;
    const list = document.getElementById("list");
    list.innerHTML = "";

    articles.forEach(article => {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.borderRadius = "0.50rem";
        div.style.padding = "2px";
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.gap = "1px";
        div.style.paddingLeft = "10px"
        const title = document.createElement("h3");
        title.textContent = article.title;
        const content = document.createElement("p");
        content.textContent = article.content;
        const author = document.createElement("h5");
        author.textContent = article.author;
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(author);

        list.appendChild(div);
    });
}

async function postArticles() {
    
}

getArticles();