"use strict";

// Jag använder "use strict" för att få tydliga errors när jag skriver något knas.

let newPostBtn = document.querySelector('.blog__addBtn');


/*
Debugging addArticle()
-----------------------------------------------------
När jag skapade "addArticle" funktionen så hamnade den nya <article> under allting annat på sidan.
Jag testade att skriva koden inne i console på webbläsaren och såg då att det är för att den lades till i body.
Jag hade missat att specificera att artikeln skulle ligga inuti blogContainer. 

*/

/* 
addArticle()
-----------------------------------------------------
När man trycker på "New Entry"-knappen så sker följande:
Skapar en ny <article> och tilldelar klassnamn.
Skapar dessutom <h1> och <p> som sedan läggs inuti den nya article.
Lägger också till en knapp, som kan ta bort article.

*/
// funktion för ny blog-post
let addArticle = () => {

    // Skapar <article>
    let newPost = document.createElement('article');
    let blogContainer = document.querySelector('.blog__container');
    newPost.className = 'blog__post';
    blogContainer.prepend(newPost);

    // Skapar <h1> och <p> till article, samt knapp för att ta bort blog-post
    let newTitle = document.createElement('h1');
    let newText = document.createElement('p');
    let newDeleteBtn = document.createElement('button');
    newTitle.className = 'blog__title';
    newTitle.contentEditable = 'true';
    newTitle.textContent = 'Add a title here';
    newText.className = 'blog__text';
    newText.contentEditable = 'true';
    newText.textContent = 'This is where you write all the stuffs...';
    newDeleteBtn.className = 'blog__deleteBtn';
    newDeleteBtn.textContent = 'Delete Entry';
    newPost.appendChild(newTitle);
    newPost.appendChild(newText);
    newPost.appendChild(newDeleteBtn);

    
    /* 
    Debugging ".addEventListener is not a function"
    -----------------------------------------------------
    Här ville inte den inte låta knappen (blog__deleteBtn) få funktionen att ta bort sin parent.
    Alltså ta bort posten som knappen ligger inuti.
    Jag fick sätta breakpoints och steppa igenom. Felet var att jag försökte "fästa" ett event på en knapp som inte hade skapat än.
    Jag skrev om koden lite, för att se till så att knappen skapades först.
    */


    // Jag lägger till en onclick function på knappen som skapas i varje ny post. Som tar bort knappens parent.
    // Tar bort blog-post.
    newDeleteBtn.onclick = ()=>{ newDeleteBtn.parentNode.remove() };
}

// Event för "New Entry"-knappen
newPostBtn.addEventListener('click', addArticle);