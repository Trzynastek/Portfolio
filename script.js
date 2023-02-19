blob = document.getElementById('blob');
document.body.onpointermove = event => {
    const { clientX, clientY } = event
    blob.animate({
        left: clientX + 'px',
        top: clientY + 'px'
    }, { duration: 30000, fill: 'forwards' },)
}
icons = [
    'code-2',
    'binary',
    'chrome',
    'bug',
    'cpu',
    'folder',
    'github',
    'laptop',
    'layout',
    'server',
    'terminal-square'
];
grid = document.getElementById('grid')
columns = Math.floor(window.innerWidth / 80) * 8
rows = Math.floor(window.innerHeight / 80) * 8
col = 1
for (let x of Array(columns).keys()) {
    column = document.createElement('div');
    if (col == 1) {
        column.setAttribute('class', 'columnup');
        col = 2
    } else if (col == 2) {
        column.setAttribute('class', 'columndown')
        col = 1
    }
    for (let x of Array(rows).keys()) {
        ico = icons[(Math.floor(Math.random() * icons.length))]
        icon = document.createElement('i');
        icon.setAttribute('icon-name', ico);
        icon.setAttribute('class', 'bgi');
        column.appendChild(icon);
    }
    grid.appendChild(column);
}

page = 0

function nav(place) {
    if (place == 'home') {
        page = 1
    } else if (place == 'about') {
        page = 5
    } else if (place == 'works') {
        page = 8
    }
    update()
}

document.addEventListener('wheel', function(event) {
    console.log(page)
    if (page < 0) {
        page = 0
    }
    if (page > 9) {
        page = 9
    }
    if (event.deltaY > 0) {
        page += 1
    } else if (event.deltaY < 0) {
        page -= 1
    } 
    update()
});

function update() {
    if (page >= 0 && page <= 3) {
        document.getElementById("home").style.opacity = "1"
        document.getElementById("about").style.opacity = "0"
        document.getElementById("works").style.opacity = "0"
        document.getElementById("home").style.visibility = "visible"
        document.getElementById("about").style.visibility = "hidden"
        document.getElementById("works").style.visibility = "hidden"
        console.log(document.getElementById("home").style.opacity)
        console.log(document.getElementById("home"))
    }
    if (page >= 4 && page <= 6) {
        document.getElementById("home").style.opacity = "0"
        document.getElementById("about").style.opacity = "1"
        document.getElementById("works").style.opacity = "0"
        document.getElementById("home").style.visibility = "hidden"
        document.getElementById("about").style.visibility = "visible"
        document.getElementById("works").style.visibility = "hidden"
        console.log(document.getElementById("about").style.opacity)
        console.log(document.getElementById("about"))
    }
    if (page >= 7 && page <= 9) {
        document.getElementById("home").style.opacity = "0"
        document.getElementById("about").style.opacity = "0"
        document.getElementById("works").style.opacity = "1"
        document.getElementById("home").style.visibility = "hidden"
        document.getElementById("about").style.visibility = "hidden"
        document.getElementById("works").style.visibility = "visible"
        console.log(document.getElementById("works").style.opacity)
        console.log(document.getElementById("works"))
    }
}

if (localStorage.getItem('theme') == undefined){
    theme = 'dark'
} else {
    theme = localStorage.getItem('theme')
    loadtheme()
}

function changetheme() {
    if (theme == 'dark') {
        theme = 'light'
        localStorage.setItem('theme', 'light')
    } else if (theme == 'light') {
        theme = 'dark'
        localStorage.setItem('theme', 'dark')
    }
    loadtheme()
}

function loadtheme() {
    root = document.documentElement;
    if (theme == 'dark') {
        root.style.setProperty('--bg', '#202020')
        root.style.setProperty('--fg', '#dfdfdf')
        document.getElementById('homelogo').style.filter = 'invert(1)'
        document.getElementById('themeicon').src = './Images/sun.svg'
    }
    if (theme == 'light') {
        root.style.setProperty('--bg', '#dfdfdf')
        root.style.setProperty('--fg', '#202020')
        document.getElementById('homelogo').style.filter = 'invert(0)'
        document.getElementById('themeicon').src = './Images/moon.svg'
    }
}

document.getElementById('yo').innerHTML = Math.floor((new Date() - new Date('2005-06-08')) / (1000 * 60 * 60 * 24 * 365))