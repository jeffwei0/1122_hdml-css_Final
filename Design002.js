let currentShape = 'random';

function createBlocks(num) {
    const container = document.querySelector(".container");
    const formWrapper = document.querySelector(".form-wrapper");
    container.innerHTML = ''; 
    container.appendChild(formWrapper); 

    const colors = ['white', 'lightblue', 'darkgrey'];
    
    for (let i = 0; i < num; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.classList.add(colors[i % colors.length]); 
        if (currentShape === 'circle' || (currentShape === 'random' && Math.random() > 0.5)) {
            block.classList.add('circle');
        } else {
            block.classList.remove('circle');
        }
        container.appendChild(block);
    }
}

function setShape(shape) {
    currentShape = shape;
    createBlocks(45); // 生成45個圖案
    generate(); // 按鈕後立即觸發動畫效果
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

function confirmAction() {
    generate(); 
    alert("Confirmed!"); 
}

function cancelAction() {
    circle(); 
    alert("Cancelled!"); 
}

function cancelAction() {
    document.getElementById('username').value = ''; // 清空用户名输入
    document.getElementById('password').value = ''; // 清空密码输入
    alert("Cancelled!"); 
}

// 生成45個 block
createBlocks(45);
generate();
