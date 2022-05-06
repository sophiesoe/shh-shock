var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
        if(direction === 'down'){
            document.querySelector('.navbar').classList.add("navbar-control")
            document.querySelector('.navbar').classList.add("animate__fadeInDown")
            document.querySelector('.navbar').classList.add("shadow-zinc-300")
        } else {
            document.querySelector('.navbar').classList.remove("navbar-control")
            document.querySelector('.navbar').classList.remove("animate__fadeInDown")
            document.querySelector('.navbar').classList.remove("shadow-zinc-300")
        }
    },
    offset: '10%'
})

var waypoint = new Waypoint({
    element: document.getElementById('price'),
    handler: function(direction) {
        if(direction === 'down'){
            document.querySelector(".footer-fixed").classList.add("show")
            document.querySelector(".footer-fixed").classList.add("animate__fadeInDown")
            document.querySelector(".footer-fixed").classList.add("shadow-zinc-300")
        } else {
            document.querySelector(".footer-fixed").classList.remove("show")
            document.querySelector(".footer-fixed").classList.remove("animate__fadeInDown")
            document.querySelector(".footer-fixed").classList.remove("shadow-zinc-300")
        }
    },
    offset: '10%'
})

// Menu bar



// Theme
let card = document.querySelectorAll('.card');
let border = document.querySelectorAll('.footer');
let divider = document.querySelectorAll('.dropdown-divider');
let input = document.querySelectorAll('.form-control');
const changeThemeToDark = () => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('.navbar').classList.remove('shadow-lg');
    document.querySelector('.navbar').classList.add('pdf-border-zinc-700');

localStorage.setItem('data-theme', 'dark');
    for (let x = 0; x < card.length; x++ ) {
        card[x].classList.remove('shadow-lg');
        card[x].classList.add('shadow-sm');
        card[x].classList.add('shadow-rose-50');
    }
    for (let x = 0; x < border.length; x ++ ) {
        border[x].classList.add('pdf-border-zinc-700');
}
    for (let x = 0; x < divider.length; x ++ ) {
        divider[x].classList.add('pdf-border-zinc-600');
    }
    for (let x = 0; x < input.length; x ++ ) {
        input[x].classList.add('border-0');
        input[x].classList.add('shadow-none');
        input[x].classList.add('shadow-sm');
        input[x].classList.add('shadow-red-50');
        input[x].classList.add('pdf-text-red-100');
    }
}

const changeThemeToLight = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('.navbar').classList.add('shadow-lg');
    document.querySelector('.navbar').classList.remove('pdf-border-zinc-700');

    localStorage.setItem('data-theme', 'light');
    for (let x = 0; x < card.length; x++ ) {
        card[x].classList.add('shadow-lg');
        card[x].classList.remove('shadow');
        card[x].classList.remove('shadow-violet-100');
    }
    for (let x = 0; x < border.length; x ++ ) {
        border[x].classList.remove('pdf-border-zinc-700');
}
    for (let x = 0; x < divider.length; x ++ ) {
        divider[x].classList.remove('pdf-border-zinc-600');
    }
    for (let x = 0; x < input.length; x ++ ) {
        input[x].classList.remove('border-0');
        input[x].classList.remove('shadow-none');
        input[x].classList.remove('shadow-sm');
        input[x].classList.remove('shadow-gray-300');
        input[x].classList.remove('pdf-text-red-100');
    }
}

let changeTheme = document.getElementById("ChangeTheme");
    changeTheme.addEventListener('change', () => {
    let theme = localStorage.getItem('data-theme');
    if (theme === 'dark') {
        changeThemeToLight();
    } else {
        changeThemeToDark();
    }
})

let theme = localStorage.getItem('data-theme');
if (theme === 'dark') {
    changeThemeToDark();
    changeTheme.setAttribute('checked','checked');
} else {
    changeThemeToLight();
}
// menuicon
let menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', ()=> {
    menuIcon.classList.toggle('show');
})