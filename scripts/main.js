/* created by Muhammet Andiç. on 01.08.2021 */
const myImage = document.querySelector('img');
myImage.onclick = () => {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/edge-logo.jpg');
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
}

myButton = document.querySelector('button');
myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name...');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozillla is cool, ' + storedName;
}

myButton.onclick = () => setUserName();
