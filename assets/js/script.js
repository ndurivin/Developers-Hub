// Global variables 

const url = 'https://api.github.com/users'

const usersDiv = document.getElementById('btnToggle').addEventListener('mouseover', displayDiv)

function displayDiv(){
    if (userNames.style.display === 'none') {
        userNames.style.display = 'block';
    } else {
        userNames.style.display = 'none';
    }
}
displayDiv()

// Developer Names Section 
function getNames(){
    fetch(url)
    .then(res => res.json())
    .then(devs => {
        devs.forEach((dev) => {
            let ul = document.getElementById('users')
            let li = document.createElement('li')
            li.className = 'users-list'
            li.innerText = dev.login;
            ul.appendChild(li)
        })
    })
    .catch((err) => err)
}
getNames()



// function showUserProfile(){
//     fetch(url)
//     .then(response => response.json())
//     .then()
// }

    