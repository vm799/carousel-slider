const slides = document.getElementsByClassName("carousel")[1]
let slidePosition = 0
const totalSlides = slides.length
const carousel = document.getElementsByClassName("carousel")

const prev = document.querySelector(".prevBtn").addEventListener("click", showPrevImg)
const next = document.querySelector(".nextBtn").addEventListener("click", showNextImg)
let newSlides = []



const imgs = [
    {src :"https://images.unsplash.com/photo-1596574620648-98e00b6a09e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:"viper image"},
   
   {src:"https://images.unsplash.com/photo-1570741066052-817c6de995c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80", alt:"pink viper"},

   {src:"https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", alt:"red viper"}
]

function renderImgs(){
 for (let i=0; i < imgs.length; i++){
        let imageSlide = document.createElement("img")
        imageSlide.classList.add("carousel-item")
        slides.appendChild(imageSlide)
        newSlides.push(imageSlide)
        }
       
      
}

renderImgs()
  
function hideAllSlides(){
for(let slide of newSlides){
    slide.classList.remove("carousel-item-visible")
    slide.classList.add("carousel-item-hidden")
}
}


function showNextImg(){
    console.log("boyaaa")
    hideAllSlides()

if (slidePosition === totalSlides - 1){
slidePosition = 0
} else {
   slidePosition ++
}

slides[slidePosition].classList.add("carousel-item-visible")
renderImgs()
}


function showPrevImg(){
    console.log("boyaaakaaashaaa")
    hideAllSlides()

if (slidePosition === 0){
slidePosition = totalSlides - 1
} else {
   slidePosition --
}

slides[slidePosition].classList.add("carousel-item-visible")
renderImgs()
}




