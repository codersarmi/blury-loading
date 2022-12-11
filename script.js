const blur = document.querySelector(".bg");
const loadText = document.querySelector(".load-text");

let load = 0;
const bluring = function (){
    load++;
    if(load > 99) {
        clearInterval(init);
    }
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load,0,100,1,0);
    blur.style.filter = `blur(${scale(load,1,100,20,0)}px)`;
};

let init = setInterval(bluring,30);

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}