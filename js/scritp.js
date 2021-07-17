const Share = document.querySelector('.footer__share')
const ContainerShare  = document.querySelector('.share')
const ShareClose = document.querySelector('.share__icon')

Share.addEventListener('click',()=>ContainerShare.classList.add('share--show'));
ShareClose.addEventListener('click',()=>ContainerShare.classList.remove('share--show'))