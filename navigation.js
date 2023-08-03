var dafaultActive=3;
const selectorCircles=document.querySelectorAll(".selectorCircle")
const stripe=document.querySelectorAll(".stripe")

console.log(stripe)
selectorCircles.forEach((node,ind)=>{
    node.addEventListener("click",()=>{
          gsap.to("#circle",{
            rotate:((dafaultActive-1)-ind)*10,
          })
          smallcircleChange()
          gsap.to(node,{
            opacity:1
          })
          stripeChange()
          gsap.to(stripe[ind],{
            opacity:1
          })
    })
})

function stripeChange(){
    stripe.forEach((node)=>{
        gsap.to(node,{
            opacity:.2
          }
        )
        })
}
function  smallcircleChange(){
    selectorCircles.forEach((node)=>{
        gsap.to(node,{
            opacity:.2
          })
    })
}


gsap.to(selectorCircles[dafaultActive-1],{
    opacity:1
})
gsap.to(stripe[dafaultActive-1],{
    opacity:1
})

gsap.to("#circle",{
    rotate:"0deg",
    duration:2,
    opacity:1
})

gsap.to("#selector",{
    x:-150,
    duration:2,
    opacity:1
})