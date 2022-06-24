
// Global variables 
const url = '/db.json'
// https://api.github.com/users

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
            li.innerText = dev.login;
            ul.appendChild(li)
            li.addEventListener('click', () => {

                alert(`Name: ${dev.login}  
                Specialization: ${dev.language_id}
                `)
            })
        })
    })
    .catch((err) => err)
}

// Developer profiles section 
let name = document.getElementById('devName')
let image = document.getElementById('image')
let tag = document.getElementById('devTag')
let followers = document.getElementById('followers')
let following = document.getElementById('following')
let repos = document.getElementById('repos')
let expertise1 = document.getElementById('exp1')
let expertise2 = document.getElementById('exp2')
let expertise3 = document.getElementById('exp3')
let expertise4 = document.getElementById('exp4')
let expertise5 = document.getElementById('exp5')


function getProfiles(){
    fetch(url)
    .then(res => res.json())
    .then(profiles =>{
        profiles.map(profile => showOneProfile(profile))
    })
}

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

    