let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/images/2019-10-22-22-36-41-1c7095.png') {
        myImage.setAttribute('src', 'https://image.shutterstock.com/image-photo/vestrahorn-mountaine-on-stokksnes-cape-600w-1487897966.jpg' )
    } else {
        myImage.setAttribute('src', 'https://user-media-prod-cdn.itsre-sumo.mozilla.net/uploads/images/2019-10-22-22-36-41-1c7095.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}
