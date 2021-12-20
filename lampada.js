const turnOn = document.getElementById('turnOn');
const turOff = document.getElementById(' turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
     return lamp.src.indexOf ('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src='ybxlO.jpg';
    }


}
function lampOff() {
  if(!isLampBroken ()) {
     lamp.src='b983w.jpg';
  }
}
function lampBroken() {
    lamp.src='MRjsF.jpg';

}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('dblclick',lampBroken);