const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC = document.querySelector(".elem-container")
var fixed_img = document.querySelector(".fix-image")
elemC.addEventListener("mouseenter", function(){
    fixed_img.style.display="block"
})

elemC.addEventListener("mouseleave", function(){
    fixed_img.style.display="none"
})

var elem1 = document.querySelectorAll(".elem")
elem1.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-image")
        fixed_img.style.backgroundImage=`url(${img})`
    })
})