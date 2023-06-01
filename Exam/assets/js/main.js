$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
}) 

const menu = document.querySelector('.logo-menu')
menu.addEventListener('click', function(){
    const menuClicked = document.querySelector('.menu-clicked')
    menuClicked.style.display = "block"
}) 

const btnX = document.querySelector(".btn-x")
btnX.addEventListener("click", function(){
    const menuClicked = document.querySelector('.menu-clicked')
    menuClicked.style.display = "none"
})


fetch('https://6469bba8183682d614455b66.mockapi.io/information')
.then(res => {
    res.forEach(el => {
        const container = document.querySelector(".container") 
        container.innerHTML+=`
        <div class="card col-4 mx-5" style="width: 18rem;">
                <div class="logo-and-text d-flex mx-3">
                    ${el.avatar}
                    <h4>${el.name} </h4>
                </div>
                <div class="card-body">
                    <p class="card-text">${el.info}</p>
                </div>
            </div>`
    });
})
