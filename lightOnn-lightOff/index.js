let img=document.querySelector("img")
let lightOn=document.querySelector(".light-on")
let lightOff=document.querySelector(".light-off")

lightOn.addEventListener("click",lightOnFunc)

function lightOnFunc(){
    img.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulbon.gif"
}

lightOff.addEventListener("click", lightOffFunc)

function lightOffFunc(){
    img.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/93927/pic_bulboff.gif"
}