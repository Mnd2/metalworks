// Sub-menu
var submenus = document.querySelectorAll("ul.sub-menu");
if (submenus.length > 0)
  for (var i = 0; i < submenus.length; i++) {
    var span = document.createElement("span");
    span.classList.add("expand");
    span.innerHTML = "+";

    span.addEventListener("click", function () {
      this.classList.toggle("active");
      // this.nextElementSibling.classList.toggle('active');
      this.parentNode.classList.toggle("active");
    });

    submenus[i].previousElementSibling.appendChild(span);
    submenus[i].parentNode.insertBefore(span, submenus[i]);
  }

/*
	<a class="anyclass" href="#" data-toggle-class="active, someotherclass" data-toggle-target=".menu, self">Menu</a>

	data-toggle-class - classes to apply to targets
	data-toggle-target - target's selectors to apply classes to

	If there is no 'data-toggle-target' attribute (only 'data-toggle-class'), classes are applyed to trigger element. 
	If classes are needed to be appled to targets including trigger element itself, use keywords 'this' or 'self'.
*/
(function () {
  function toggleClasses(classes, obj) {
    if (!classes) return;
    if (!obj) return;
    for (var n = 0; n < classes.length; n++)
      obj.classList.toggle(classes[n].trim());
  }

  function applyToTargets(targetslist, dototargets, obj, dotoself, dotonext) {
    if (!targetslist) return;
    if (!dototargets) return;

    targetslist = targetslist.split(",");

    for (var n = 0; n < targetslist.length; n++) {
      targetslist[n] = targetslist[n].trim();

      if (
        (targetslist[n] == "this" || targetslist[n] == "self") &&
        obj &&
        dotoself
      )
        dotoself(obj);
      if (targetslist[n] == "next" && obj && dotonext)
        dotonext(obj.nextElementSibling);
      else {
        var elems = document.querySelectorAll(targetslist[n]);
        if (elems.length > 0) {
          for (var m = 0; m < elems.length; m++) {
            dototargets(elems[m]);
          }
        }
      }
    }
  }

  var clickToggle = document.querySelectorAll("[data-toggle-class]");

  if (clickToggle.length > 0) {
    for (var i = 0; i < clickToggle.length; i++) {
      clickToggle[i].addEventListener("click", function (e) {
        e.preventDefault();

        var classes = this.getAttribute("data-toggle-class");
        if (!classes) return;

        classes = classes.split(",");
        for (var n = 0; n < classes.length; n++) classes[n] = classes[n].trim();

        var targets = this.getAttribute("data-toggle-target");

        if (!targets)
          toggleClasses(
            classes,
            this
          ); //for(var n=0; n<classes.length; n++)  this.classList.toggle(classes[n]);
        else {
          applyToTargets(
            targets,
            function (elem) {
              toggleClasses(classes, elem);
            },
            this,
            function (elem) {
              toggleClasses(classes, elem);
            },
            function (elem) {
              toggleClasses(classes, elem);
            }
          );
        }
      });
    }
  }
})();



// VERTIMAS
const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll(".lng");
const generalEl = document.querySelector(".general");
const projectEl = document.querySelector(".project");
const businessEl = document.querySelector(".business");
const homeEl = document.querySelector(".home");
const aboutEl = document.querySelector(".about");
const contactsEl = document.querySelector(".contacts");
const titleEl = document.querySelector(".title");
const descriptionEl = document.querySelector(".description");
const about1El = document.querySelector(".about1");
const aboutUsTextEl = document.querySelector(".aboutUsText");
const aboutUsPressEl = document.querySelector(".aboutUsPress");
const businessTopTextEl = document.querySelector(".businessTopText");
const homeTopTextEl = document.querySelector(".homeTopText");


link.forEach(el => {
  el.addEventListener('click', () => {
    langEl.querySelector('.active').classList.remove('active');
    el.classList.add('active');

    const attr = el.getAttribute('language');

    generalEl.textContent = data[attr].general;
    projectEl.textContent = data[attr].project;
    businessEl.textContent = data[attr].business;
    homeEl.textContent = data[attr].home;
    aboutEl.textContent = data[attr].about;
    contactsEl.textContent = data[attr].contacts;
    titleEl.textContent = data[attr].title;
    descriptionEl.textContent = data[attr].description;
    about1El.textContent = data[attr].about1;
    aboutUsTextEl.textContent = data[attr].aboutUsText;
    aboutUsPressEl.textContent = data[attr].aboutUsPress;
    businessTopTextEl.textContent = data[attr].businessTopText;
    homeTopTextEl.textContent = data[attr].homeTopText;
  });
});


var data = {
  "lithuanian": {
    "general": "Pagrindinis",
    "project": "Projektai",
    "business": "Verslui",
    "home": "Namams",
    "about": "Apie mus",
    "contacts": "Kontaktai",
    "title": "Metalinių baldų projektavimas ir gamyba",
    "description": "Mes paverčiam metalą į dizainą",
    "about1": "Apie mus",
    "aboutUsText": "Mes paverčiame jūsų įdėjas realybe.Baldai ir jų konstrukcijos, interjero, eksterjero bei fasadų elementai ar kiti išskirtiniai gaminiai profesionalų dėka virsta estetiška ir kokybiška norimos idėjos detale.",
    "aboutUsPress": "Plačiau...",
    "businessTopText": "Įdėjos Jūsų verslui...",
    "homeTopText": "Įdėjos Jūsų namams...",
    
  },
  "english": {
    "general": "Home",
    "project": "Projects",
    "business": "For Buisness",
    "home": "For Home",
    "about": "About Us",
    "contacts": "Contacts",
    "title": "Design and manufacture of metal furniture",
    "description": "We turn metal into design",
    "about1": "About Us",
    "aboutUsText": "We turn your ideas into reality. Thanks to professionals, furniture and its constructions, interior, exterior and facade elements or other exclusive products turn into an aesthetic and high-quality detail of the desired idea.",
    "aboutUsPress": "More...",
    "businessTopText": "Ideas for your business...",
    "homeTopText": "Ideas for your home...",
  },
};

const menuSelect = document.querySelector(".main-menu");
const btn = document.querySelectorAll("span");
btn.forEach(sel => {
  sel.addEventListener('click', () => {
    menuSelect.querySelector(".press").classList.remove("press");
    sel.classList.add('press');
  });
});




window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200|| document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").style.background = "black";
    document.querySelector(".sub-menu").style.background = "black";
    document.querySelector(".main-menu").style.background = "black";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.querySelector(".sub-menu").style.background = "none";
    document.querySelector(".main-menu").style.background = "none";
  }
};

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