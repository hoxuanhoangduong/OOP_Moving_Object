function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }

    this.moveLeft = function () {
        this.left -= this.speed;
    }

    this.moveDown = function () {
        this.top += this.speed;
    }

    this.moveUp = function () {
        this.top -= this.speed;
    }
}

let hero = new Hero('images/pikachu.png', 20, 30, 300, 10);
let firstTop = hero.top;
let firstLeft = hero.left;
let maxLeft = window.innerWidth - hero.left - hero.size;
let maxTop = window.innerHeight - hero.top - hero.size;

function start() {
    if (hero.left < maxLeft && hero.top <= firstTop) {
        hero.moveRight();
    } else if (hero.left >= maxLeft && hero.top < maxTop) {
        hero.moveDown();
    } else if (hero.left > firstLeft && hero.top >= maxTop) {
        hero.moveLeft();
    } else if (hero.left <= firstLeft && hero.top > firstTop) {
        hero.moveUp();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 42);
}

start();