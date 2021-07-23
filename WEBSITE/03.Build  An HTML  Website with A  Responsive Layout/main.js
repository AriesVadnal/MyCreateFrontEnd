var showcase = document.getElementById('showcase')
window.addEventListener('scroll', function(){
    showcase.style.opacity = 1 - +window.pageYOffset/500+''
    showcase.style.top = +window.pageYOffset+'px'
    showcase.style.backgroundPositionY = -+window.pageYOffset/3+'px'
});