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
        div.style.paddingLeft = "10px";
        const title = document.createElement("h3");
        title.textContent = article.title;
        const content = document.createElement("p");
        content.textContent = article.content;
        const author = document.createElement("h5");
        author.textContent = article.author;
        const button = document.createElement("button");
        button.textContent = "Delete";
        button.id = "deleteBlog";
        button.onclick = () => deleteBlog(article.id);
        div.appendChild(title);
        div.appendChild(content);
        div.appendChild(author);
        div.appendChild(button);

        list.appendChild(div);
    });
}

async function postArticles() {
    let titleInput = document.getElementById("title");
    let contentInput = document.getElementById("content");
    let authorInput = document.getElementById("author");
    let title = titleInput.value;
    let content = contentInput.value;
    let author = authorInput.value;

    if(!title || !content || !author) {
        console.log(title);
        console.log(content);
        console.log(author);
        return;
    }

    await fetch("http://localhost:3000/api/articles/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({title, content, author}),
    });
    titleInput.value = "";
    contentInput.value = "";
    authorInput.value = "";
    getArticles();
}

async function deleteBlog(id) {
    await fetch(`http://localhost:3000/api/articles/${id}`, {
        method: "DELETE",
    });
    getArticles();
}

getArticles();

document.getElementById("addBlog").onclick = postArticles;