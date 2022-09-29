var moveCheck = true;
var buttons = document.querySelector(".buttons");
var container = document.querySelector(".container");
var slider = document.querySelector(".slider");
var sliderWidth = 300;
var sliderLength = slider.childElementCount;
var buttonContainer = document.querySelector(".button_container");
var _loop_1 = function (i) {
    var makeDiv = document.createElement('div');
    makeDiv.classList.add('button');
    buttonContainer.appendChild(makeDiv);
    makeDiv.addEventListener('click', function () {
        index = i + 1;
        moveSlider(1);
    });
};
for (var i = 0; i < sliderLength; i++) {
    _loop_1(i);
}
buttonContainer.children[0].classList.add('active');
var first = slider.firstElementChild.cloneNode(true);
var last = slider.lastElementChild.cloneNode(true);
slider.appendChild(first);
slider.insertBefore(last, slider.firstElementChild);
slider.style.width = slider.childElementCount * sliderWidth + 'px';
var index = 1;
container.children[0].style.transform = 'translateX(-' + (index * 300) + 'px)';
buttons.children[0].addEventListener('click', prev);
buttons.children[2].addEventListener('click', next);
setInterval(function () {
    next();
}, 3000);
function prev() {
    if (moveCheck) {
        moveCheck = false;
        index--;
        console.log(moveCheck);
        setTimeout(function () {
            if (index === 0) {
                index = slider.childElementCount - 2;
                moveSlider(0);
            }
            moveCheck = true;
            console.log(moveCheck);
        }, 1000);
    }
    moveSlider(1);
}
function next() {
    if (moveCheck) {
        moveCheck = false;
        index++;
        setTimeout(function () {
            if (index === slider.childElementCount - 1) {
                index = 1;
                moveSlider(0);
            }
            moveCheck = true;
        }, 1000);
    }
    moveSlider(1);
}
function updateButtons() {
    for (var i = 0; i < sliderLength; i++) {
        buttonContainer.children[i].classList.remove('active');
    }
    if (index === 0) {
        buttonContainer.children[sliderLength - 1].classList.add('active');
    }
    else if (index === sliderLength + 1) {
        buttonContainer.children[0].classList.add('active');
    }
    else {
        buttonContainer.children[index - 1].classList.add('active');
    }
}
function moveSlider(time) {
    slider.style.transition = time + 's';
    container.children[0].style.transform = 'translateX(-' + (index * 300) + 'px)';
    updateButtons();
}
