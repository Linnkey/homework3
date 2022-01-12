console.log("Manipulate DOM elements");

const resultParent = document.getElementById("results");
const genButton = document.getElementById("gen-btn");
const clearButton = document.getElementById("clear-all-btn");
const elCount = document.getElementById("el-count"); 


let idCount = 0

function createNewElement(parent, tag, id="", classes=[], text="", color="") {
    const newEl = document.createElement(tag);
    const newContent = document.createTextNode(text);
    newEl.appendChild(newContent);
    newEl.id = "res-el-" + id;
    

    for (const newClass of classes) {
         newEl.classList.add(newClass);
    }

    if (color) { 
        newEl.style.backgroundColor = color;
        
    }

    parent.appendChild(newEl);

}

//generate fizz, buzz, fizzbuzz and other

function onGenerateElementsClick(ev) {
onClearAllElements();

const count = parseInt(elCount.value);
console.log("Will generate elements. How many? " + count);

for (let i=0; i<count; i++) { 

  
    let classFizzbuzz = ["fizzbuzz"];
    let classFizz = ["fizz"];
    let classBuzz = ["buzz"];
    let classOther = ["other"];

      
    if(i % 3 == 0 && i % 5 == 0){
        classFizzbuzz.push("fizzbuzz");
        
             }
    else if (i % 3 == 0) {
        classFizz.push("fizz");
        
    }

    else if (i % 5 == 0) {
        classFizz.push("buzz");
        
    }

    else 
        classOther.push("other")
        
        createNewElement(resultParent, "div", id=i, classes=classFizzbuzz, "fizzbuzz" + i); 
        createNewElement(resultParent, "div", id=i, classes=classFizz, "fizz" + i); 
        createNewElement(resultParent, "div", id=i, classes=classBuzz, "buzz" + i); 
        createNewElement(resultParent, "div", id=i, classes=classBuzz, "other" + i); 
         
    
    
            }
    

}


  

//clear all elements
function onClearAllElements() {
    console.log("Will clear all elements");
    
    while (resultParent.firstChild) {
        resultParent.removeChild(resultParent.firstChild);
      }
    
}



function onPageLoaded() {
    console.log("This runs when the page is ready");   
    
    genButton.onclick = onGenerateElementsClick

    clearButton.onclick = onClearAllElements;
    
   
}




window.onload = onPageLoaded 
