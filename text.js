const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

//display mobile menu 
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// SHOW ACTIVE MENU when scrolling
const highlightMenu = () => {
    const whateveriwannaput = document.querySelector('.highlight');
    const homemenu = document.querySelector('#home-page');
    const aboutmenu = document.querySelector('#about-page');
    const servicesmenu = document.querySelector('#services-page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

    // adds 'highlght' to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) {
    homemenu.classList.add('highlight');
    aboutmenu.classList.remove('highlight');
    return;
    }
    else if (window.innerWidth > 900 && scrollPos < 1400) {
    aboutmenu.classList.add('highlight');
    homemenu.classList.remove('highlight');
    servicesmenu.classList.remove('highlight');
    return;
    }
    else if (window.innerWidth > 900 && scrollPos < 2345) {
    servicesmenu.classList.add('highlight');
    aboutmenu.classList.remove('highlight');
    return;
    }
    if ((whateveriwannaput && window.innerWidth < 960 && scrollPos < 600) || whateveriwannaput) {
    whateveriwannaput.classList.remove('highlight');
    }
};  

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// CLOSE MOBILE MENU WHEN CLICKING ON A MENU ITEM
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 950 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu); 