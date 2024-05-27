function circle(){
    let circleBtn = document.querySelector(".circleBtn");
    container.classList.toggle("circle")
}
function generate(){
    anime({
        targets: ".block",
        translateX: function (){
            return anime.random(-700, 700);
        },
        translateY: function (){
            return anime.random(-500, 500);
        },
        scale: function (){
            return anime.random(1, 5);
        },
    });
}

generate();