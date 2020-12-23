const navControl = document.querySelector('.navOpen');
navControl.addEventListener('click', () => {
    const navOpen = document.querySelector('.leftNavIn')
    const navbarLeft = document.querySelector('.navbarLeft')
    const navNone = document.querySelector('.rightNav')

    if (navOpen.classList.value.includes("navNone")) {
        navOpen.classList.remove('navNone')
        navNone.classList.remove('navNone')
        navbarLeft.classList.add('navOn')
    } else {
        navOpen.classList.add('navNone')
        navbarLeft.classList.remove('navOn')
        navNone.classList.add('navNone')
    }
})
const navNone = document.querySelector('.rightNav').addEventListener('click', () => {
    const navOpen = document.querySelector('.leftNavIn')
    const navbarLeft = document.querySelector('.navbarLeft')
    const navNone = document.querySelector('.rightNav')

    if (navOpen.classList.value.includes("navNone")) {
        navOpen.classList.remove('navNone')
        navNone.classList.remove('navNone')
        navbarLeft.classList.add('navOn')
    } else {
        navOpen.classList.add('navNone')
        navbarLeft.classList.remove('navOn')
        navNone.classList.add('navNone')
    }
})