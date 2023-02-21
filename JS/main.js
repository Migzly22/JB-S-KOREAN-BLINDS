const showsmallnav = document.getElementById('showsmallnav')
showsmallnav.addEventListener('click',(e)=>{
    e.preventDefault()
    const smallnav = document.getElementsByClassName('smallnav')[0]
    const mainbodycover = document.getElementsByClassName("mainbodycover")[0]
    const mainnav = document.getElementsByClassName("mainnav")[0]

    if (!smallnav.classList.contains("smallnavactive")){
        smallnav.classList.add("smallnavactive")
        mainnav.classList.add("smallmove")
        mainbodycover.style.display = "block"
    }else{
        smallnav.classList.remove("smallnavactive")
        mainnav.classList.remove("smallmove")
        mainbodycover.style.display = "none"
    }

})