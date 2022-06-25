
// Global variables 
const url = '/db.json'
// const url = 'https://api.github.com/users'

const usersDiv = document.getElementById('btnToggle').addEventListener('click', displayDiv)
function displayDiv(){
    if (userNames.style.display === 'none') {
        userNames.style.display = 'block';
        alert('Click on specific user to view profile')
    } else {
        userNames.style.display = 'none';
    }
}

// Developer Names Section 
function getNames(){
    fetch(url)
    .then(res => res.json())
    .then(devs => {
        devs.forEach((dev) => {
            let ul = document.getElementById('users')
            let li = document.createElement('li')
            li.className = 'users-list'
            li.innerText = dev.login
            ul.appendChild(li)
            li.addEventListener('click', () => {
                let div = document.getElementById('devName')
                let h3 = document.querySelector('.firstName')
                h3.innerText = (`Name: [${dev.login}]
                Specialization: (${dev.language_id})`)
                div.appendChild(h3)
            })
        })
    })
    .catch((err) => err)
}

<<<<<<< HEAD

function getProfiles(){
    fetch(url)
    .then(res => res.json())
    .then(profiles =>{
        profiles.map(profile => showOneProfile(profile))
    })
}
=======
// Specialization: (${dev.language_id})
>>>>>>> refs/remotes/origin/main

let showOneProfile = (profile) => {
    login.innerText = profile.login;
    tag.innerText = profile.avatar_url
    image.setAttribute('src', profile.avatar_url)
    followers.innerText = profile.followers_url;
    followers.appendChild(followers)
}

// Function for the form section 
document.addEventListener("DOMContentLoaded", () => {
      let form = document.querySelector("form")
      form.addEventListener("submit", (e) => {
      e.preventDefault();
      sendComment(document.getElementById('comment').value)
      form.reset()
    })
  })
  
  function  sendComment(comment) {
    let li = document.createElement("li")
    li.textContent = `${comment} `
    let liBtn = document.createElement("button")
    liBtn.addEventListener('click', delBtn)
    // liBtn.textContent = "x"
    li.appendChild(liBtn)
    document.querySelector("#reviews").appendChild(li)
  }

  function delBtn(e){
    e.target.parentNode.remove()
  }

let pageLoader = () => {
    getNames()
    displayDiv()
    showOneProfile()
    getProfiles()
}
pageLoader();

    