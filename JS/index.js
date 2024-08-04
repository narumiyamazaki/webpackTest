const mordalBtn = document.querySelector('#JS-mordal');
const mordalClose = document.querySelector('#JS-close');

const mordalContent = document.querySelector('.p-mordal-content');

mordalBtn.addEventListener('click',() => {
  mordalContent.showModal();
  document.body.classList.add('is-scrollLock')
},false);


mordalClose.addEventListener('click',() => {
  mordalContent.close();
},false);