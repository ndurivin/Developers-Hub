// Global variables 

// let name = docuement.getElementById('dev-name')
// let tag = document.getElementById('dev-tag')


// Developer Names Section 

function getNames(){
    const url = 'https://api.github.com/users'
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

function getProfiles(){

}


function showUserProfile(){
    fetch(url)
    .then(response => response.json())
    .then()
}
getNames()
    