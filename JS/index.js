//animation 
const placeholder =  document.getElementById('placeholder');
const text = placeholder.getAttribute('placeholder');
let index = 0;
let intervalId;
function animationplaceholder(){
    index = (index + 1) % (text.length + 1);
    placeholder.setAttribute('placeholder', text.substring(0, index));
    if  (index  === text.length) {
        clearInterval(intervalId);
    }
}
intervalId = setInterval(animationplaceholder, 300);