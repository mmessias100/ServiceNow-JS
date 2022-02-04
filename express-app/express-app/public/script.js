`use strict`

// import { response } from 'express';
import * as DOM from './dom.js';

// list item function
const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
  DOM.listOutput.appendChild(child);
}

// GET all function

/*const get = () => {
  DOM.outputData.innerHTML = ``;

  axios.get(`/read/:id`, {_id : DOM.inputName.value})
  .then((response) => {
    outputData.innerHTML = JSON.stringify(response.data);
    for (let _id of response.data){writeItem(item._id)}
    console.log(`Come on g!`);
  // axios.get(`/read`)
  //   .then((response) => {
  //     if (!Array.isArray(response.data)) {
  //       writeItem(response.data);
  //     } else {
  //       for (let item of response.data) {
  //         writeItem(item);
  //       }
  //     }
    }).catch((err) => {
      console.log(err);
    });
}*/

DOM.buttonGet.onclick = () => read(input.value);

const get = () => {
  DOM.listOutput.innerHTML = ``;

  axios.get(`/read/:id`, {_id : DOM.inputName.value})
      .then((response) => {
          if (!Array.isArray(response.data)){writeItem(response.data);}
          else {
            for (let item of response.data){writeItem(item);}
          }
          console.log(`Come on G!`)
      }).catch((err) => {
          console.log(err);
      })
}

// POST function
const post = () => {
  axios.post(`/create`, {name : DOM.inputName.value})
    .then((response) => {
      console.log(response);
      get();
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonCreate.onclick = () => post();