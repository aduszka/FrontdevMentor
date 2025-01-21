const navLinks = document.getElementById('nav-links')
const closeBtn = document.getElementById('close-nav-btn')
const mobileBtn = document.getElementById('mobile-nav-btn')

const mobileOverlay = document.getElementById('mobile-overlay')

mobileBtn.addEventListener('click',()=>{
  navLinks.classList.add('show')
  mobileBtn.style.display='none'
  closeBtn.style.display='block'
  mobileOverlay.classList.add('show')
})
closeBtn.addEventListener('click',()=>{
  navLinks.classList.remove('show')
  mobileBtn.style.display='block'
  closeBtn.style.display='none'
  mobileOverlay.classList.remove('show')
})