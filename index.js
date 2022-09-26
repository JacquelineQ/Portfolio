
// nav-links-container have class hidden and display: None 
// close-icon has display: None 
// menu-icon onClick  triggers function and adds class active to nav-links 
//     and they have display flex column

//     while nav-links has class active:
//     menu-icon has display: none 
//     close-icon has display: inline-block(?) 

//     close-icon onClick triggers function and nav-links
//     loses class active 

function toggleMenu() {
    let navLinks = document.getElementById('nav-links-container');
    // let body = document.getElementByClass('body');
    // let closeIcon= document.getElementById('close-icon');
    navLinks.classList.toggle('active')
    // closeIcon.classList.toggle('active')
//    body.classList.toggle('hidden')

}