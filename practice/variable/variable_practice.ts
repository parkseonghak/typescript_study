let moveCheck: boolean = true;
const buttons: any = document.querySelector(".buttons");
const container: any = document.querySelector(".container");
const slider: any = document.querySelector(".slider");
const sliderWidth = 300;
const sliderLength = slider.childElementCount;
const buttonContainer: any = document.querySelector(".button_container");

for(let i = 0; i < sliderLength; i++){
    const makeDiv = document.createElement('div');
    makeDiv.classList.add('button');
    buttonContainer.appendChild(makeDiv);
    makeDiv.addEventListener('click', ()=>{
        index = i + 1;
        moveSlider(1);
    })
}
buttonContainer.children[0].classList.add('active');

const first: boolean = slider.firstElementChild.cloneNode(true);
const last: boolean = slider.lastElementChild.cloneNode(true);

slider.appendChild(first);
slider.insertBefore(last, slider.firstElementChild);

slider.style.width = slider.childElementCount * sliderWidth + 'px';

let index = 1;
container.children[0].style.transform = 'translateX(-' + (index * 300) + 'px)'

buttons.children[0].addEventListener('click', prev);
buttons.children[2].addEventListener('click', next);

setInterval(() => {
    next();
}, 3000)

function prev(){
    if(moveCheck){
        moveCheck = false;
        index --;
        console.log(moveCheck);
        setTimeout(()=>{
            if(index === 0){
                index = slider.childElementCount-2;
                moveSlider(0);
            }
            moveCheck = true;
            console.log(moveCheck);
        }, 1000)
    }
    moveSlider(1);
}

function next(){
    if(moveCheck){

        moveCheck = false;
        index ++;
        
        setTimeout(()=>{
            if(index === slider.childElementCount-1){
                index = 1;
                moveSlider(0);
            }
            moveCheck = true;
        }, 1000)
    }
    
    moveSlider(1);
}

function updateButtons(){
    for(let i = 0; i < sliderLength; i++){
        buttonContainer.children[i].classList.remove('active');
    }
    if(index === 0){
        buttonContainer.children[sliderLength-1].classList.add('active');
    }else if(index === sliderLength+1){
        buttonContainer.children[0].classList.add('active');
    }else{
        buttonContainer.children[index-1].classList.add('active');
    }
}

function moveSlider(time){
    slider.style.transition = time + 's'
    container.children[0].style.transform = 'translateX(-' + (index*300) + 'px)';
    updateButtons();
}
