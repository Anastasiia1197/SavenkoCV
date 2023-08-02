const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu');


// next, removre

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach((event) => event.addEventListener('click', linkAction));


// scroll section 

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// scroll

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


// DARK LIGHT THEME


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'  //  bx-toggle-left
const iconTheme = 'bx-toggle-right'     //  bx-toggle-right

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
    
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'  // bx-toggle-left : bx-toggle-right

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme) //bx-toggle-left
}

// active button
themeButton.addEventListener('click', () => {
    // add/remove
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
  
    
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})




// scale CV

function scaleCV(){
    document.body.classList.add('scale-cv');
}

function removeScale(){
    document.body.classList.remove("scale-sv");
}


// // DOWNLOAD

// let getCV = document.getElementById("download-cv"); //CV

var opt = {
    margin:       0,
    filename:     'SavenkoCV.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { format: 'letter', orientation: 'a4' }
  };
  
  // New Promise-based usage:



let resBtn = document.getElementById("resume-button"); //button

function convertToPdf() {
    const getCV = document.getElementById("download-cv"); 
    scaleCV();
    html2pdf().set(opt).from(getCV).save();
}
