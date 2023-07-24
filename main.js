// header change background color on scroll

window.addEventListener("scroll", () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', scrollY>0)
})


// // active page

// const activePage = window.location.pathname;
// const navLinks = document.querySelectorAll('.nav-menu a').
// forEach(link =>{
//     if(link.href.includes(`${activePage}`)){
//         console.log(`${activePage}`)
//     }
// })


// show hidden faq answers

const question = document.querySelectorAll('.faq');

question.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');

        // change icon

        const icon = faq.querySelector('.faq-icon i');

        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }
        else{
            icon.className = 'fa-solid fa-plus'
        }
    })
})


// nav responsive

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');

menuBtn.addEventListener('click', () =>{
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'

})


const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)
