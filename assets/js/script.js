
// Global variables 
const url = 'https://api.github.com/users'

const usersDiv = document.getElementById('btnToggle').addEventListener('click', displayDiv)

function displayDiv(){
    if (userNames.style.display === 'none') {
        userNames.style.display = 'block';
        alert('Click on specific user to view profile')
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

// Developer profiles section 
let name = document.getElementById('devName')
let tag = document.getElementById('devTag')
let followers = document.getElementById('followers')
let following = document.getElementById('following')
let repos = document.getElementById('repos')
let expertise1 = document.getElementById('exp1')
let expertise2 = document.getElementById('exp2')
let expertise3 = document.getElementById('exp3')
let expertise4 = document.getElementById('exp4')
let expertise5 = document.getElementById('exp5')


// function showUserProfile(){
//     fetch(url)
//     .then(response => response.json())
//     .then()
// }

    