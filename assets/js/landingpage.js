window.addEventListener('DOMContentLoaded', (event) => {
    const box = document.getElementsByTagName("box")[0]
    const imageHolder = document.getElementsByClassName("responsive_image")[0]
    const iconHolder = document.getElementsByClassName("icon_holder")[0]
    const downloadIcon = document.getElementById("downloadIcon")

    downloadIcon.addEventListener("click", (event) => {
        event.preventDefault()
        window.open("https://drive.google.com/file/d/1gkiZrfVcdBDII5WCqDs4duDqIFv878Il/view?usp=share_link", "_blank")
    })
    setTimeout(() => {
        box.style.animation = 'start ease-in-out 1s 1'
        box.style.animationFillMode = 'forwards'
    },
        2600);

    setTimeout(() => {
        imageHolder.style.animation = 'center ease-in-out 1s 1'
        imageHolder.style.animationFillMode = 'forwards'
    }, 2750);

    setTimeout(() => {
        iconHolder.style.animation = 'end ease-in-out 1s 1'
        iconHolder.style.animationFillMode = 'forwards'
    }, 2950);

});


