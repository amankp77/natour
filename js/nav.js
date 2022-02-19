const links = document.querySelectorAll('.navigation__link')
const button = document.querySelector('.navigation__btn')
const navigation = document.querySelector('.navigation')
let active = true
button.addEventListener('click',()=>{
           if(active){
             navigation.classList.add('active')
             active = false
           }
           else{
             navigation.classList.remove('active')
             active = true
           }
})
console.log(links)
links.forEach(link=>{
  link.addEventListener('click',()=>{
    console.log("chutiya")
    navigation.classList.remove('active')
    active = true

  })
})
