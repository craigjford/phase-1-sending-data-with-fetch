document.addEventListener("DOMContentLoaded", () => {
    console.log('DOMContentLoaded is completed');
})

function handleError(error) {
    document.body.innerHTML = error.message
}

function submitData(userName, userEMail) {

    const fetchObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEMail,
        }),
    };


    return fetch("http://localhost:3000/users", fetchObject)
    .then(resp => resp.json()) 
    .then(data =>  {
        const newID  = parseInt(data.id)
        document.body.innerHTML = `${newID}    ${data.name}     ${data.email}`
    })
    .catch(function (error) {
        handleError(error)
    })
}


