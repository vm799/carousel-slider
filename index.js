const slides = document.querySelector(".slides")
const dots = document.querySelector(".dotsContainer")

const prev = document.querySelector(".prevBtn").addEventListener("click", showPrevImg)
const next = document.querySelector(".nextBtn").addEventListener("click", showNextImg)

const slideIndex = 0;

const imgs = [
    {src :"https://images.unsplash.com/photo-1596574620648-98e00b6a09e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", alt:"viper image"},
   
   {src:"https://images.unsplash.com/photo-1570741066052-817c6de995c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80", alt:"pink viper"},

   {src:"https://images.unsplash.com/photo-1571391733814-15ac29ac3544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", alt:"pink viper"}
]

    imgs.map(image => {
        const imgSlide = document.createElement("img")
        imgSlide.src = image.src
        const imgDot = document.createElement("div")
        imgDot.classList.add("dot")
        slides.appendChild("imgSlide")
        dotsContainer.appendChild("imgDot")
        })



function showPrevImg(){
    console.log("boyysasasaa")
}

function showNextImg(){
    console.log("boybooyakashaa")
}