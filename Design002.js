let currentShape = 'random';

function createBlocks(num) {
    const container = document.querySelector(".container");
    const formWrapper = document.querySelector(".form-wrapper");
    container.innerHTML = ''; // 清空現有的 blocks
    container.appendChild(formWrapper); // 保留表單

    const colors = ['white', 'lightblue', 'darkgrey'];
    
    for (let i = 0; i < num; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        block.classList.add(colors[i % colors.length]); // 分配顏色
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
    createBlocks(45); // 重新生成45個圖案
    generate(); // 按下形狀按鈕後立即觸發動畫效果
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
    generate(); // 圖案變化
    alert("Confirmed!"); // 示例操作
}

function cancelAction() {
    circle(); // 圖案變化
    alert("Cancelled!"); // 示例操作
}

// 初始化調用，生成45個 block
createBlocks(45);
generate();
