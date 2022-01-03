const slides = document.querySelector(".slides")
const dots = document.querySelector(".dotsContainer")

const prev = document.querySelector(".prevBtn").addEventListener("click", showPrevImg)
const next = document.querySelector(".nextBtn").addEventListener("click", showNextImg)

let imgNum = 0;


const imgs = [
    {src :"https://images.unsplash.com/photo-1596574620648-98e00b6a09e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:"viper image"},
   
   {src:"https://images.unsplash.com/photo-1570741066052-817c6de995c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80", alt:"pink viper"},

   {src:"https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", alt:"red viper"}
]

function renderImgs(){
    imgs.map(image => {
        console.log("im rnederdrin")
        const imgSlide = document.createElement("img")
        imgSlide.src = image.src
        imgSlide.alt = image.alt
        const imgDot = document.createElement("div")
        imgDot.classList.add("dot")
        slides.appendChild(imgSlide)
        dots.appendChild(imgDot)
        })
}
  
function hideAllSlides(){
    
}


function showNextImg(){
if (imgNum < imgs.length - 1){
imgNum += 1
} else if(imgNum === imgs.length){
    imgNum = 0
}

renderImgs()  
}

function showPrevImg(){
    if (imgNum === 0){
        imgNum = imgs.length - 1
        } else {
            imgNum -= 1
        }
        
        renderImgs()   
}



