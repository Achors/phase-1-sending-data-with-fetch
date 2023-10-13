// Add your code here

const dogUrl = "http://localhost:3000/dogs"
const catsUrl = "http://localhost:3000/cats"
const usersUrl = "http://localhost:3000/users"
const robotUrl = "https://localhost:3000/robots"
const nameInput = document.querySelector("#name")

const configureForm = () => {
    const form = document.querySelector("form")
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const username = event.target.username.value
        const password = event.target.password.value
        const newUser = {name, email, username, password}
        fetch(usersUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(response => response.json())
        .then(newUser => {
            renderUser(newUser)
        })
    })
}

const renderUser = (user) => {
    const userList = document.createElement("li")
    userList.innerText = user.name
    const userUl = document.querySelector("#user-list")
    userUl.append(userList)
}

function submitData(name, email) {
    return fetch(usersUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(response => response.json())
    .then(object => {
        document.body.innerHTML = object["id"]
    })
    .catch(error => {
        document.body.innerHTML = error.message
    })
}