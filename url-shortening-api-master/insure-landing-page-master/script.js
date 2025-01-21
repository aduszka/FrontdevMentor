const navLinks = document.getElementById('nav-list')
const mobileBars = document.getElementById('mobile-bars')
const mobileClose = document.getElementById('mobile-close')

mobileBars.addEventListener('click', ()=>{
  navLinks.classList.toggle('show')
  mobileBars.style.display='none'
  mobileClose.style.display='block'
  document.body.style.overflowY='hidden'
})
mobileClose.addEventListener('click',()=>{
  navLinks.classList.toggle('show')
  mobileBars.style.display='block'
  mobileClose.style.display='none'
  document.body.style.overflowY='initial'
})