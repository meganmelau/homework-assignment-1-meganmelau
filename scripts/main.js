let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/firefox-icon.png') {
          myImage.setAttribute ('src','images/firefox2.jpeg');
        } else {
          myImage.setAttribute ('src','images/firefox-icon.png');
        }
    }

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Enter your name:');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to the internet, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Welcome to the internet, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
