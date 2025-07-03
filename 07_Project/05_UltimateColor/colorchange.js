//randmon number
// console.log(Math.floor(Math.random()*16))

//randomcolor
const randomcolor = function () {
    let hex ="0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
         color += hex[(Math.floor(Math.random()*16))]
        
    }
    return color;
}
let intervaild
 const startchangecolor = function () {
     if (!intervaild) {
        intervaild = setInterval(changecolor,1000)
     }
    function changecolor() {
        
        document.body.style.backgroundColor = randomcolor()
    }
 }
 const stopchangecolor = function () {
 
  clearInterval(intervaild);
  intervaild = null;
};







document.querySelector("#start").addEventListener('click',startchangecolor)
document.querySelector("#stop").addEventListener('click',stopchangecolor)
