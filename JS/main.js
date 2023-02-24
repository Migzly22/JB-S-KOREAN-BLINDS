import imgdata from './data.json' assert {type:'json'} 


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

/**Swiper */
const swiper = new Swiper('.swiper', {
    rewind:true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },


    });

    const exit = document.getElementsByClassName('exit')[0]
    const carouselportfolio = document.getElementsByClassName('carouselportfolio')[0]
    exit.addEventListener('click', (e)=>{
        
        carouselportfolio.style.display = "none"
    })


    const pleft = document.getElementsByClassName('pleft')[0]
    pleft.addEventListener('click', (e)=>{
        e.preventDefault()

        let linktarget = e.target.tagName
        let id = ""
        if (linktarget == "I"){
            id = e.target.parentElement.id
        }else{
            id = e.target.id
        }


        if (id == "jb1" || id == "jb2" || id == "jb3"){
            showgallery(id)
        }


    })


    function showgallery(id){
        carouselportfolio.style.display = "block"
        let imgarr = imgdata[id]
        let insiderval = ``

        

        const swiperwrapper = document.getElementsByClassName("swiper-wrapper")[0]

        for (let i in imgarr){
            insiderval +=`<div class="swiper-slide">
                <img src="${imgarr[i]}" alt="">
            </div>`
        }

        swiperwrapper.innerHTML = insiderval

    }
