// this one is just to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme')
    const themeToggle = document.getElementById('theme-toggle')
    const themeLogo = document.getElementById('page-logo')
    // const themeButton = document.getElementById('button-icon')
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = 'assets/css/main.dark.css'
            themeToggle.innerText = 'Light Mode'
            themeLogo.src = 'images/logo.dark.svg'
            // themeButton.src = 'images/toggle.dark.svg'
            console.log("Changed theme to dark mode.")
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'assets/css/main.light.css'
            themeToggle.innerText = 'Dark Mode'
            themeLogo.src = 'images/logo.light.svg'
            // themeButton.src = 'images/toggle.light.svg'
            console.log("Changed theme to light mode.")
            // themeToggle.getElementsById("img") = "assets/images/dark.svg"
        }
        })
    })
