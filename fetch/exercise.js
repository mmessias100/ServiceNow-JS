`use strict`;

// Doing FETCH APIs by only using the AXIOS way!

const getB = document.getElementById(`getButton`);
const postB = document.getElementById(`postButton`)
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);

// EXERCISE 1: GET REQUEST

getB.onclick = () => read(input.value);

// function get(URL){

//     fetch(URL)
//     .then((response) => {
//         if (response.status !== 200){
//             console.error(`status: ${response.status}`);
//             return;
//         }
//         response.json()
//             .then(data => {
//                 output.innerHTML = JSON.stringify(data);
//             })
//     }).catch((err) => {
//         console.error(`${err}`);
//     })
// }

// AXIOS - FOR EXERCISE 1

read = URL => {

    axios.get(URL)
        .then((response) => {
            output.innerHTML = JSON.stringify(response.data);
            console.log(`OK OK OKKKKKKKK`)
        }).catch((err) => {
            console.log(err);
        })
}

// EXERCISE 3: POST request for 'Creating' name and job

create = URL => {
    axios.post(URL, {
        "name" : "Morpheus",
        "job" : "Leader"
    }).then((response) => {
        output.innerHTML = JSON.stringify(response.data);
        console.log(`OK OK OKKK I posted something`)
    }).catch((err) => {console.log(err);})
}
postB.onclick = () => create(input.value);

// EXERCISE 4: POST request for 'Register - Successful'

register = URL => {
    axios.post(URL, {
        "email" : "eve.holt@reqres.in",
        "password" : "pistol"
    }).then((response) => {
        output.innerHTML = JSON.stringify(response.data);
        console.log(`Login successful my guy!!`)
    }).catch((err) => {console.log(err);})
}
postB.onclick = () => register(input.value);

// EXERCISE 5: POST request for 'Login - Successful'

register = URL => {
    axios.post(URL, {
        "email" : "eve.holt@reqres.in",
        "password" : "cityslicka"
    }).then((response) => {
        output.innerHTML = JSON.stringify(response.data);
        console.log(`Come on g!!`)
    }).catch((err) => {console.log(err);})
}
postB.onclick = () => register(input.value);


// EXAMPLE TEMPLATE FOR A POST REQ:

/*create = URL => {

    axios.post(URL, {
        firstName: `Morris`,
        email : `morrismessias@hotmail.co.uk`
    })
        .then((respone) => {
            output.innerHTML = JSON.stringify(respone.data);
        }).catch((err) => {
            console.log(err);
        })
}*/
