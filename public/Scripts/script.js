import {uiIndex} from './uiIndex.js';

const instructions = document.querySelector('.instructions');
const submitButton = document.querySelector('button');
const uiScreen = document.querySelector('.ui-screen');

instructions.onkeypress = (e) => {
  if(e.code == "Enter") {
    let design = parse(instructions.value);
    addToHistory(instructions.value);
    createUI(design);
    instructions.value = "";
    e.preventDefault();
  }
}

function parse(elements) {
  let elementList = elements.split('.');
  let designObject = {};

  for(let i = 0; i < elementList.length - 1; i++) {
      let subList = elementList[i].split(",");
      designObject[subList[0]] = subList.slice(1);
  }

  console.log(designObject);
  return designObject;
}

function createUI(elementsObj) {
  for(let element in elementsObj) {
    if(uiIndex[element]) {
      let currentUI = uiIndex[element];
      currentUI.attach(uiScreen, elementsObj[element]);
    } else {
      console.log(`The element ${element} does not exist in the index!`);
    }
  }
}

function addToHistory(info) {
  let div = document.createElement('div');
  let history = document.getElementById('history');
  div.innerHTML = info;
  div.className = 'history-item';

  div.onclick = function() {
    let uiScreen = document.querySelector('.ui-screen');
    uiScreen.innerHTML = "";
    let historyItem = parse(div.innerHTML);
    createUI(historyItem);
  }

  history.appendChild(div);
}
