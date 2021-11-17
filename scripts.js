
let container = document.getElementById("container");
let newSize = 16;
let totalDivs = newSize * newSize;
let div = undefined
let divs = document.getElementsByClassName('divClass');
let clear = document.getElementById('clear');



let myFunction = function(){
    this.style.setProperty('background-color', 'black');
}



function makeDivs() {
for (i=0; i < totalDivs; i++) {
   div = document.createElement('div');
   div.id = i;
   container.appendChild(div);
}}

makeDivs();

document.getElementById('container').childNodes.forEach(function(element) {
    element.addEventListener('mouseover', myFunction);

});  

document.getElementById('clear').addEventListener('click', () => {
    let clearDiv = document.getElementById('container').childNodes;
        for (i=0; i<clearDiv.length; i++) {
            if (clearDiv[i].nodeName.toLowerCase() == 'div') {
                clearDiv[i].style.background = "";
            }
        }
    
})

document.getElementById('changeSize').addEventListener('click', () => {
    newSize = prompt("What size grid would you like? (Grid will stay a square, only enter one value");
        if (newSize > 64){
            alert("Sorry, max value is 64");
    }   else {
            container.style.setProperty('grid-template-rows', 'repeat(' + newSize + ', 1fr)');
            container.style.setProperty('grid-template-columns', 'repeat(' + newSize + ', 1fr)');
            totalDivs = newSize * newSize;
            makeDivs();


}});


            
        




  










