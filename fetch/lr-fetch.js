`use strict`;

// HTTP REQUESTS

// Fetch API

// CREATE - POST
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

const button = document.getElementById(`button`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

// FETCH

function get(URL){

    fetch(URL)
    .then((response) => {
        if (response.status !== 200){
            console.error(`status: ${response.status}`);
            return;
        }
        response.json()
            .then(data => {
                output.innerHTML = JSON.stringify(data);
            })
    }).catch((err) => {
        console.error(`${err}`);
    })
}

// AXIOS

read = URL => {

    axios.get(URL)
        .then((response) => {
            output.innerHTML = JSON.stringify(response.data);
            console.log(`OK OK OKKKKKKKK`)
        }).catch((err) => {
            console.log(err);
        })
}

create = URL => {

    axios.post(URL, {
        firstName: `Morris`,
        email : `morrismessias@hotmail.co.uk`
    })
        .then((respone) => {
            output.innerHTML = JSON.stringify(respone.data);
        }).catch((err) => {
            console.log(err);
        })
}

button.onclick = () => read(input.value);