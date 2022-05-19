// NAVBAR
const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function (e) {
  if (e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar') {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
}

toggle.onclick = function () {
  toggle.classList.toggle('active');
  navbar.classList.toggle('active');
};




// VERTIMAS
// const langEl = document.querySelector(".langWrap");
// const link = document.querySelectorAll(".lng");
// const generalEl = document.querySelector(".general");
// const projectEl = document.querySelector(".project");
// const businessEl = document.querySelector(".business");
// const homeEl = document.querySelector(".home");
// const aboutEl = document.querySelector(".about");
// const contactsEl = document.querySelector(".contacts");
// const titleEl = document.querySelector(".title");
// const descriptionEl = document.querySelector(".description");
// const about1El = document.querySelector(".about1");
// const aboutUsTextEl = document.querySelector(".aboutUsText");
// const aboutUsPressEl = document.querySelector(".aboutUsPress");
// const businessTopTextEl = document.querySelector(".businessTopText");
// const homeTopTextEl = document.querySelector(".homeTopText");


// link.forEach(el => {
//   el.addEventListener('click', () => {
//     langEl.querySelector('.active').classList.remove('active');
//     el.classList.add('active');

//     const attr = el.getAttribute('language');

//     generalEl.textContent = data[attr].general;
//     projectEl.textContent = data[attr].project;
//     businessEl.textContent = data[attr].business;
//     homeEl.textContent = data[attr].home;
//     aboutEl.textContent = data[attr].about;
//     contactsEl.textContent = data[attr].contacts;
//     titleEl.textContent = data[attr].title;
//     descriptionEl.textContent = data[attr].description;
//     about1El.textContent = data[attr].about1;
//     aboutUsTextEl.textContent = data[attr].aboutUsText;
//     aboutUsPressEl.textContent = data[attr].aboutUsPress;
//     businessTopTextEl.textContent = data[attr].businessTopText;
//     homeTopTextEl.textContent = data[attr].homeTopText;
//   });
// });


// var data = {
//   "lithuanian": {
//     "general": "Pagrindinis",
//     "project": "Projektai",
//     "business": "Verslui",
//     "home": "Namams",
//     "about": "Apie mus",
//     "contacts": "Kontaktai",
//     "title": "Metalinių baldų projektavimas ir gamyba",
//     "description": "Mes paverčiam metalą į dizainą",
//     "about1": "Apie mus",
//     "aboutUsText": "Mes paverčiame jūsų įdėjas realybe.Baldai ir jų konstrukcijos, interjero, eksterjero bei fasadų elementai ar kiti išskirtiniai gaminiai profesionalų dėka virsta estetiška ir kokybiška norimos idėjos detale.",
//     "aboutUsPress": "Plačiau...",
//     "businessTopText": "Įdėjos Jūsų verslui...",
//     "homeTopText": "Įdėjos Jūsų namams...",
    
//   },
//   "english": {
//     "general": "Home",
//     "project": "Projects",
//     "business": "For Buisness",
//     "home": "For Home",
//     "about": "About Us",
//     "contacts": "Contacts",
//     "title": "Design and manufacture of metal furniture",
//     "description": "We turn metal into design",
//     "about1": "About Us",
//     "aboutUsText": "We turn your ideas into reality. Thanks to professionals, furniture and its constructions, interior, exterior and facade elements or other exclusive products turn into an aesthetic and high-quality detail of the desired idea.",
//     "aboutUsPress": "More...",
//     "businessTopText": "Ideas for your business...",
//     "homeTopText": "Ideas for your home...",
//   },
// };





// FORMA
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("my-form");
  var status = document.getElementById("status");
  
  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Išsiųsta!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Neišsiųsta!";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    }
    else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}