function createBlocks(num) {
    const container = document.querySelector(".container");
    container.innerHTML = ''; // 清空現有的 blocks 和 buttons
    container.innerHTML = `
        <button onclick="generate();">Generate</button>
        <button onclick="circle();generate();" class="circleBtn">Circle | Square</button>
    `;
    
    const colors = ['white', 'lightblue', 'darkgrey'];
    
    for (let i = 0; i < num; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.classList.add(colors[i % colors.length]); // 分配顏色
        container.appendChild(block);
    }
}

function circle() {
    let container = document.querySelector(".container");
    container.classList.toggle("circle");
}

function generate() {
    anime({
        targets: ".block",
        translateX: function () {
            return anime.random(-700, 700);
        },
        translateY: function () {
            return anime.random(-500, 500);
        },
        scale: function () {
            return anime.random(1, 5);
        },
    });
}


createBlocks(60);
generate();
