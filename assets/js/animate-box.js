window.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementsByTagName("box")[0]
    const imageHolder = document.getElementsByClassName("responsive_image")[0]
    setTimeout(() => {
        box.style.animation = 'start ease-in-out 1s 1'
        box.style.animationFillMode = 'forwards'
    },
        //text animation ends after 5s 
        2600);

    setTimeout(() => {
        imageHolder.style.animation = 'center ease-in-out 1s 1'
        imageHolder.style.animationFillMode = 'forwards'
    }, 2750);

});


