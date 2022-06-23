


// Developers Section 

document.getElementById('users').addEventListener('mouseover', getNames);




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
getNames()
    