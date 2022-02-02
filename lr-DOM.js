`use strict`;

// IMPORT STATEMENT
import * as DOM from './dom.js';

// DOM - DOCUMENT OBJECT MODEL

// The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content.

// CREATING A DOM FILE
// and exporting it!

// export const pageParagraph = document.getElementById("para");
// export const pageButton = document.getElementById("button");

let str = "hello";

let changeText = str => DOM.pageParagraph.innerHTML = `${str}`;


DOM.pageButton.onclick = () => changeText(str);


//EXERCISES