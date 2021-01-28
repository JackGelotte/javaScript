"use strict";


let newPostBtn = document.querySelector('.blog__addBtn');

/*
Debug
När jag skapade "addArticle" funktionen så märkte jag att den lade till den nya ner i body.
Jag hade missat att specificera att artikeln skulle ligga i blogContainer. .prepend löste det.
Sedan fick jag inte med mig allt som skulle finnas inne i artikeln, men testade samma metod.
Append fungerade fint till det.
*/

// Lägger till ny blog post
let addArticle = () => {

    // Skapar <article>
    let newPost = document.createElement('article');
    let blogContainer = document.querySelector('.blog__container');
    newPost.className = 'blog__post';
    blogContainer.prepend(newPost);

    // Skapar <h1> och <p> till article
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
    Debug ".addEventListener is not a function"
    Här ville inte den inte låta knappen (blog__deleteBtn) få funktionen att ta bort sin parent.
    Alltså ta bort posten som knappen ligger inuti.
    Jag steppa igenom koden och fann felet. Jag försökte "fästa" ett event på en knapp som inte fanns.
    Testade med lite olika saker tills felmeddelandet ändrades. Nu fick jag "Cannot access removeArticle before initialization".
    Det felet förstod jag. Då var det vara flytta runt koden lite.
     */

    // Tar bort artikeln
    newDeleteBtn.onclick = ()=>{ newDeleteBtn.parentNode.remove() };
}

newPostBtn.addEventListener('click', addArticle);