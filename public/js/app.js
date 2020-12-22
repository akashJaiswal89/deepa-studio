const navControl = document.querySelector('.navOpen');
navControl.addEventListener('click', () => {
    const navOpen = document.querySelector('.leftNavIn')
    const navbarLeft = document.querySelector('.navbarLeft')

    if (navOpen.classList.value.includes("navNone")) {
        navOpen.classList.remove('navNone')
        navbarLeft.classList.add('navOn')
    } else {
        navOpen.classList.add('navNone')
        navbarLeft.classList.remove('navOn')
    }
})